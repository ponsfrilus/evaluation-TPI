import React from 'react'
class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("------");
    console.log(props.fields);
    console.log("------");
    this.state = props.fields.reduce((acc,curr)=> (acc[curr]='',acc),{});
    // this.state = {value: ''}
    const test = props.fields.reduce((acc,curr)=> (acc[curr]='',acc),{});
    console.log(this.state);

    this.handleChangeTest = this.handleChangeTest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTest(event) {
    var dynObj = {}
    dynObj[event.target.id] = event.target.value
    this.setState(dynObj);
    console.log(event);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event);
  }

  handleSubmit(event) {
    console.log(this.test);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div className={`PeopleForm ${this.props.fieldPrefix}`} >
      {this.props.fields.map((field, i) => {
        return (
          <label>
          {field}:
          <input type="text" id={this.props.fieldPrefix + "_" + field} value={this.state[field]} onChange={this.handleChangeTest} />
          {console.log(this.state[field])}
          </label>
        );
      })}
      </div>
    )
  }
}

export{PeopleForm}
