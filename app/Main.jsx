import React from 'react'
import update from 'react-addons-update'

import StopLine from './StopLine.jsx'
import Add from './Add.jsx'

import RaisedButton from 'material-ui/lib/raised-button'



export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stops : [{line: 44},{line: 4400},{line: 1221}, {line: 111},{line:678}]
        }
    }

    addStop (){
        this.setState(update(this.state, {
            stops: {
                $push: [{}]
            }
        }))
    }

    handleChange(name, value, index){
        this.state.stops[index][name] = value
        this.setState(this.state)
    }

    close(){
        // location.href = 'pebblejs://close#'+encodeURIComponent(JSON.stringify(this.state.stops))
        console.log(JSON.stringify(this.state.stops,2))
    }

    destroy(index){
        this.setState(update(this.state, {
            stops: {
                [index]: {
                    $merge: {__deleted: true}
                }
            }
        }))
    }

    render(){
        console.groupEnd('rendering')
        console.group('rendering')
        let handleChange = this.handleChange.bind(this),
            stops = this.state.stops;
        return(
            <div>
            <div>
            {stops
                .map( (stop,i) =>{
                    console.log(i, stop)
                return !stop.__deleted && <StopLine {...stop}
                  key={'key'+i} index={i}
                  onChange={handleChange}
                  onDestroy={this.destroy.bind(this, i)}
                />
            })}
            </div>
            <RaisedButton label="Add bus stop" secondary={true} onClick={this.addStop.bind(this)} />
            <RaisedButton label="Send config"  primary={true} onClick={this.close.bind(this)} />
            </div>
        )
    }
}
