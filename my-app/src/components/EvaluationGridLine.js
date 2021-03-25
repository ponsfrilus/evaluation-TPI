import React from 'react'
class EvaluationGridLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log("--------------")
    console.log(this.props.data.id)
    return(
      <div className={`EvaluationGridLine`}>
        <div className="EvaluationGridLineID">
          {this.props.data.id}
        </div>
        <div className="EvaluationGridLineQuestion">
          {this.props.data.description}
        </div>
        <div className="EvaluationGridLinePt">
          <input type="text" id="A1_pts" value=""/>
        </div>
        <div className="EvaluationGridLineJustification">
          <input type="text" id="A1_justification" value=""/>
        </div>
      </div>
    )
  }
}

export{EvaluationGridLine}
