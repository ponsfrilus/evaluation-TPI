import React from 'react'
class PeopleForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={`PeopleForm ${this.props.fieldPrefix}`} >
      {this.props.fields.map((field, i) => {
        return (
          <label key={this.props.fieldPrefix + "_" + field + "_label"}><br />
            {field}:
            <input type="text" id={this.props.fieldPrefix + "_" + field} key={this.props.fieldPrefix + "_" + field} />
          </label>
        );
      })}
      </div>
    )
  }
}

export{PeopleForm}
