import React from 'react'
import pck from '../../package.json'

class Footer extends React.Component {
  render() {
    return (
      <div className="footer no-print">
        <hr size={1}/>
        <small>
          version&thinsp;:&nbsp;{pck.version}&nbsp;|&nbsp;<a href="https://github.com/ponsfrilus/evaluation-TPI" target="_blank" rel="noreferrer">source</a>
        </small>
      </div>
      )}
}

export { Footer }
