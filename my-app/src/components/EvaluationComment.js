import React from 'react'
class EvaluationComment extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div className={`EvaluationComment`}>
        <h2>Remarque</h2>
        <textarea type="text" id={`EvaluationComment_comment`} key={`EvaluationComment_comment`} cols={150} rows={15} ></textarea>
      </div>
    )
  }
}

export {EvaluationComment}
