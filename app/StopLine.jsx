import React from 'react';

import TextField from 'material-ui/lib/text-field'
import Card      from 'material-ui/lib/card/card'
import CardText  from 'material-ui/lib/card/card-text'

export default class StopLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    handleChange(event){
        let {name, value} = event.target
        this.setState({
            [name]: value
        },()=> this.props.onChange(this.state, this.props.index))
    }

    render() {
        let {name, number, line} = this.state,
            handleChange = this.handleChange.bind(this),
            style= {marginBottom: 5  };
        
        return (
          <Card style={style}>
            <CardText>
              <TextField hintText="Name"   name="name"   value={name}   onChange={handleChange} />
              <TextField hintText="Line"   name="line"   value={line}   onChange={handleChange} />
              <TextField hintText="Number" name="number" value={number} onChange={handleChange} />
            </CardText>
          </Card>);
    }
}
