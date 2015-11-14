import React from 'react';

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
        handleChange = this.handleChange.bind(this)

        return (<div>
            <label>Name
            <input name="name" value={name} onChange={handleChange} />
            </label>
            <label>Number
            <input name="number" value={number}  onChange={handleChange} />
            </label>
            <label>Line
            <input name="line" value={line} onChange={handleChange} />
            </label>
            </div>);
    }
}
