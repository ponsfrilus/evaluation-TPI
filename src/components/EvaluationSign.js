import React from 'react'
class EvaluationSign extends React.Component {
  render() {
    return (
      <div className={`EvaluationSign`}>
        <h2>Signatures</h2>
        <div className={`EvaluationSignContainer`}>
          <div className={`EvaluationSignBlock sign_chef_de_projet`}>
            <h3>Chef de projet</h3>
            <p>Lieu&thinsp;:</p>
            <div className="textLine"></div>
            <p>Date&thinsp;:</p>
            <div className="textLine"></div>
            <p>Signature&thinsp;:</p>
            <div className="textLine"></div>
          </div>
          <div className={`EvaluationSignBlock sign_expert_1`}>
            <h3>Expert 1</h3>
            <p>Lieu&thinsp;:</p>
            <div className="textLine"></div>
            <p>Date&thinsp;:</p>
            <div className="textLine"></div>
            <p>Signature&thinsp;:</p>
            <div className="textLine"></div>
          </div>
          <div className={`EvaluationSignBlock sign_expert_2`}>
            <h3>Expert 2</h3>
            <p>Lieu&thinsp;:</p>
            <div className="textLine"></div>
            <p>Date&thinsp;:</p>
            <div className="textLine"></div>
            <p>Signature&thinsp;:</p>
            <div className="textLine"></div>
          </div>
        </div>
      </div>
    )
  }
}

export { EvaluationSign }
