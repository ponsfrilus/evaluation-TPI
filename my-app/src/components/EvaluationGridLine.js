import React from 'react'
class EvaluationGridLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div key={this.props.data.id} className={`EvaluationGridLine`}>
        <div key={`${this.props.data.id}_EvaluationGridLineID`} className="EvaluationGridLineID">
          {this.props.data.id}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineQuestion`} className="EvaluationGridLineQuestion">
          {this.props.data.description}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLinePt`} className="EvaluationGridLinePt">
          <input type="text" id={`${this.props.data.id}_pts`} />
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineJustification`} className="EvaluationGridLineJustification">
          <input type="text" id={`${this.props.data.id}_justification`} />
        </div>
      </div>
    )
  }
}

export{EvaluationGridLine}
