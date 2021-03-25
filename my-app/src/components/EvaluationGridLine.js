import React from 'react'
class EvaluationGridLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div key={`${this.props.data.id}_EvaluationGridLine`} className={`EvaluationGridLine`}>
        <div key={`${this.props.data.id}_EvaluationGridLineID`} className="EvaluationGridElement EvaluationGridLineID">
          {this.props.data.id}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineQuestion`} className="EvaluationGridElement EvaluationGridLineQuestion">
          {this.props.data.description}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLinePt`} className="EvaluationGridElement EvaluationGridLinePt">
          <input type="number" id={`${this.props.data.id}_pts`} key={`${this.props.data.id}_pts`} min={0} max={3} step={1} size={1} />
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineJustification`} className="EvaluationGridElement EvaluationGridLineJustification">
          <textarea type="text" id={`${this.props.data.id}_justification`} key={`${this.props.data.id}_justification`} col={40} rows={5} ></textarea>
        </div>
      </div>
    )
  }
}

export{EvaluationGridLine}
