import React from 'react';

import TextField from 'material-ui/lib/text-field'
import Card      from 'material-ui/lib/card/card'
import CardText  from 'material-ui/lib/card/card-text'

import IconButton   from 'material-ui/lib/icon-button'
import ActionDelete from 'material-ui/lib/svg-icons/action/delete'

import ArrowUp   from 'material-ui/lib/svg-icons/navigation/arrow-drop-up'
import ArrowDown from 'material-ui/lib/svg-icons/navigation/arrow-drop-down'

export default class StopLine extends React.Component {
    constructor(props) {
        super(props);
        let {name, stop, line} = props
        this.state = {name, stop, line}
    }

    handleChange(event){
        let {name, value} = event.target
        this.setState({
            [name]: value
        },()=> this.props.onChange(this.state, this.props.index))
    }

    render() {
        let {name, stop, line} = this.state,
            handleChange = this.handleChange.bind(this),
            style= {marginBottom: 5  };
        
        return (
          <Card style={style}>
            <CardText>
              <IconButton tooltip="Delete" touch={true}>
                <ActionDelete/>
              </IconButton>
              <IconButton tooltip="Move down" touch={true}>
                <ArrowDown/>
              </IconButton>
              <IconButton tooltip="Move up" touch={true}>
                <ArrowUp/>
              </IconButton>
              <br/>
              <TextField hintText="Name" name="name" value={name} onChange={handleChange} /><br/>
              <TextField hintText="Line" name="line" value={line} onChange={handleChange} /><br/>
              <TextField hintText="Stop" name="stop" value={stop} onChange={handleChange} /><br/>
            </CardText>
          </Card>);
    }
}
