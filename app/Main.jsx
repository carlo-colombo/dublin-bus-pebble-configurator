import React from 'react'

import StopLine from './StopLine.jsx'
import Add from './Add.jsx'

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
            <Add onClick={this.addStop.bind(this)} />
            </div>
        )
    }
}
