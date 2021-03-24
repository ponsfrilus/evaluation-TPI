import React from 'react'
class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
    console.log("------");
    console.log(props.fields);
    console.log("------");
    this.state = {value: ''};



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    {var test = this.props.fields.map((fields, i) => {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {fields}:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    })}
    return test;
  }
}

export{PeopleForm}
