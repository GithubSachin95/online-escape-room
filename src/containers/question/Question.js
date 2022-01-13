import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import './Question.css';
import { Button, Divider, Image, Transition, Modal } from 'semantic-ui-react';
import questionImg from '../../images/digital.jpg';

export default function Question(props) {

  const [clue, openClue] = React.useState(false);
  const [timer, setTimer] = React.useState();
  const [timeUp,setTimeUp] = React.useState(props.timeUp);
  const [duration,setDuration] = React.useState(props.duration);

  
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        timer = duration;
        setTimeUp(true);
      }
    }, 1000);
  }
  useEffect(() => {
    startTimer(900, document.getElementById('counter'))
    
  }, [duration])


  return (
    <>
      {!timeUp && <h1 id="counter">{timer}</h1>}
      { timeUp && <h2 id="counter">Times Up!</h2>}
      <div className="item">
        <div className="image">
          <Image className="image" src={questionImg} size='big' />
        </div>
        <div className="content">
          <h2 className="header">{props.question.questionHeader}</h2>
          <h3 className="description">{props.question.questionText}</h3>
          <Divider hidden />
          <div className="ui input"><input type="text" value={props.inputText} onChange={e => props.handleInput(e.target.value)} placeholder="Enter the answer" /></div>
          <Divider hidden />
          
          <button className="ui primary button" onClick={() => { props.handleSubmitAnswer() }}>Submit</button>

          <Modal
            centered={false}
            open={clue}
            onClose={() => openClue(false)}
            onOpen={() => openClue(true)}
            trigger={<Button className="ui secondary button">Show Clue</Button>}

          >
            <Modal.Header>Here is your clue. Best luck!</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                {props.question.clue}
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => openClue(false)}>OK</Button>
            </Modal.Actions>
          </Modal>
        </div>

      </div>
    </>
  )

}
