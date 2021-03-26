import React from 'react'
import { ptsChange } from '../utils/Calculation.js'

class EvaluationGridLine extends React.Component {
  render(){
    return(
      <div key={`${this.props.data.id}_EvaluationGridLine`} className={`EvaluationGridLine`}>
        <div key={`${this.props.data.id}_EvaluationGridLineID`} className="EvaluationGridElement EvaluationGridLineID">
          {this.props.data.id}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineQuestion`} className="EvaluationGridElement EvaluationGridLineQuestion">
          {this.props.data.description}
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLinePt`} className="EvaluationGridElement EvaluationGridLinePt" onChange={() => ptsChange()}>
          <input type="number" id={`${this.props.data.id}_pts`} key={`${this.props.data.id}_pts`} min={0} max={3} step={1} size={1} className="EvaluationMark" />
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineJustification`} className="EvaluationGridElement EvaluationGridLineJustification">
          <textarea type="text" id={`${this.props.data.id}_justification`} key={`${this.props.data.id}_justification`} cols={37} rows={3} ></textarea>
        </div>
      </div>
    )
  }
}

export{EvaluationGridLine}
