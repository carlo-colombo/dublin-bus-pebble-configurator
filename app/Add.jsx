import React from 'react'; 

export default class Add extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <button onClick={this.props.onClick}>add</button>
    }
}
