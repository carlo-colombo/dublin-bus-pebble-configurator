import React from 'react'; 

import RaisedButton from 'material-ui/lib/raised-button'

export default class Add extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return <RaisedButton label="Default" secondary={true} onClick={this.props.onClick} />
    }
}
