import React from 'react'
import update from 'react-addons-update'

import StopLine from './StopLine.jsx'
import Add from './Add.jsx'

import RaisedButton from 'material-ui/lib/raised-button'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        let options = localStorage.stops || '[]'
        this.state = {
            stops : JSON.parse(decodeURIComponent(options))
            .map( (stop,i) => {
                stop.key= i
                return stop
            })
        }
    }

    addStop (){
        this.setState(update(this.state, {
            stops: {
                $push: [{key:this.state.stops.length}]
            }
        }))
    }

    handleChange(name, value, index){
        this.state.stops[index][name] = value
        this.setState(this.state)
    }

    close(){
        let stops = this.state.stops.filter(stop => !stop.__deleted)
        let options = encodeURIComponent(JSON.stringify(stops))
        localStorage.stops = options
        location.href = 'pebblejs://close#' + options
    }

    destroy(index){
        confirm('Do you want to delete?') && this.setState(update(this.state, {
            stops: {
                [index]: {
                    $merge: {__deleted: true}
                }
            }
        }))
    }

    move(direction, index){
        this.setState(update(this.state, {
            stops: {
                [index + direction]: {
                    $set: this.state.stops[index]
                },
                [index]: {
                    $set: this.state.stops[index + direction]
                }
            }
        }), ()=> this.forceUpdate(()=>{
            this.render()
        }))
    }

    render(){
        let handleChange = this.handleChange.bind(this),
        stops = this.state.stops,
        lastIndex = stops.length -1;

        return(
            <div>
            <div>
            {stops
                .map( (stop,i) =>{
                    let
                    onUp = this.move.bind(this,-1,i),
                    onDown = this.move.bind(this,+1, i),
                    onDestroy = this.destroy.bind(this, i),
                    last = i == lastIndex,
                    first = i == 0,
                    binds = {onDestroy, onUp, onDown, first, last};
                    
                    return !stop.__deleted && <StopLine
                      {...stop}
                      {...binds}
                      key={i+'_'+stop.key} index={i}
                      onChange={handleChange}
                    />
                })}
            </div>
            <RaisedButton label="Add bus stop" secondary={true} onClick={this.addStop.bind(this)} />
            <RaisedButton label="Send config"  primary={true} onClick={this.close.bind(this)} />
            </div>
        )
    }
}
