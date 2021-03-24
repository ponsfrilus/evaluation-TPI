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
    console.log(this.test);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <form>
      {this.props.fields.map((fields, i) => {
        return (
          <label>
          {fields}:
          <input type="text" id={fields} />
          </label>
        );
      })}
      </form>
    )
  }
}

export{PeopleForm}
