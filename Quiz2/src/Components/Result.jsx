import React from 'react';

export default class Result extends React.Component {
  render() {
    return (
      <div className='container'>
        <h1 className='result-heading'>Result</h1>
        <div className="result-box">
          <h3>Need more practice!</h3>
          <h1>Your score is 20%</h1>
          <div className='summary'>
            <p>Total number of questions</p>
            <p>15</p>
          </div>
          <div className='summary'>
            <p>Number of attempted questions</p>
            <p>9</p>
          </div>
          <div className='summary'>
            <p>Number of correct answers</p>
            <p>3</p>
          </div>
          <div className='summary'>
            <p>Number of wrong answers</p>
            <p>6</p>
          </div>
        </div>
        <div className="action">
          <button className='play-again-btn'>Play Again</button>
          <button className='back-btn'>Back to home</button>
        </div>
      </div>
    );
  }
}
