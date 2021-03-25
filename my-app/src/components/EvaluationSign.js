import React from 'react'
class EvaluationSign extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div className={`EvaluationSign`}>
        <h2>Signatures</h2>
        <div className={`EvaluationSignContainer`}>
          <div className={`EvaluationSignBlock sign_chef_de_projet`}>
            <h3>Chef de projet</h3>
            <p>
              Lieu :
              <div className="textLine"></div>
            </p>
            <p>
              Date :
              <div className="textLine"></div>
            </p>
            <p>
              Signature :
              <div className="textLine"></div>
            </p>
          </div>
          <div className={`EvaluationSignBlock sign_expert_1`}>
            <h3>Expert 1</h3>
            <p>
              Lieu :
              <div className="textLine"></div>
            </p>
            <p>
              Date :
              <div className="textLine"></div>
            </p>
            <p>
              Signature :
              <div className="textLine"></div>
            </p>
          </div>
          <div className={`EvaluationSignBlock sign_expert_2`}>
            <h3>Expert 2</h3>
            <p>
              Lieu :
              <div className="textLine"></div>
            </p>
            <p>
              Date :
              <div className="textLine"></div>
            </p>
            <p>
              Signature 
              <div className="textLine"></div>
            </p>
          </div>
        </div>
        
      </div>
    )
  }
}

export {EvaluationSign}
