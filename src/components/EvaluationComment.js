import React from 'react'
class EvaluationComment extends React.Component {
  render() {
    return (
      <div className={`EvaluationComment`}>
        <h2>Remarques</h2>
        <textarea
          id={`EvaluationComment_comment`}
          key={`EvaluationComment_comment`}
          cols={100}
          rows={15}
        ></textarea>
      </div>
    )
  }
}

export { EvaluationComment }
