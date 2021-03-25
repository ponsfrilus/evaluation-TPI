import React from 'react'
class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.fields.reduce((acc,curr)=> (acc[curr]='',acc),{});
    // this.state = {value: ''}
    const test = props.fields.reduce((acc,curr)=> (acc[curr]='',acc),{});
    
    this.handleChangeTest = this.handleChangeTest.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeTest(event) {
    var dynObj = {}
    dynObj[event.target.id] = event.target.value
    this.setState(dynObj);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div className={`PeopleForm ${this.props.fieldPrefix}`} >
      {this.props.fields.map((field, i) => {
        return (
          <label><br />
            {field}:
            <input type="text" id={this.props.fieldPrefix + "_" + field} value={`${this.state[this.props.fieldPrefix + "_" + field]}`} onChange={this.handleChangeTest} />
          </label>
        );
      })}
      </div>
    )
  }
}

export{PeopleForm}
