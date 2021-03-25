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
          <input type="text" id="A1_pts" value=""/>
        </div>
        <div key={`${this.props.data.id}_EvaluationGridLineJustification`} className="EvaluationGridLineJustification">
          <input type="text" id="A1_justification" value=""/>
        </div>
      </div>
    )
  }
}

export{EvaluationGridLine}
