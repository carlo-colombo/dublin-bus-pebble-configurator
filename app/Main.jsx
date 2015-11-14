import React from 'react'

import StopLine from './StopLine.jsx'
import Add from './Add.jsx'

import RaisedButton from 'material-ui/lib/raised-button'

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stops : []
        }
    }

    addStop (){
        this.setState({
            stops: this.state.stops.concat({})
        })
    }

    handleChange(stopLine,index){
        let stops = this.state.stops.map( (sl,i) => i==index ? stopLine : sl)
        this.setState({stops})
    }

    close(){
        // location.href = 'pebblejs://close#'+encodeURIComponent(JSON.stringify(this.state.stops))
        console.log(JSON.stringify(this.state.stops,2))
    }

    render(){
        let handleChange = this.handleChange.bind(this)
        return(
            <div>
            <div>
            {this.state.stops.map((stop,i) =>{
                return <StopLine {...stop}
                  key={i} index={i}
                  onChange={handleChange} />
            })}
            </div>
            <RaisedButton label="Add bus stop" secondary={true} onClick={this.addStop.bind(this)} />
            <RaisedButton label="Send config"  primary={true} onClick={this.close.bind(this)} />
            </div>
        )
    }
}
