import React from 'react'
class EvaluationGridLine extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className={`EvaluationGridLine`}>
        <div className="EvaluationGridLineID">
          A1
        </div>
        <div className="EvaluationGridLineQuestion">
          Gestion de projet et planification
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
