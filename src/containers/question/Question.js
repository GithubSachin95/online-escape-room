import React, { useState } from "react";
import { Item } from "semantic-ui-react";
import './Question.css';
import { Button, Divider, Image, Transition, Modal } from 'semantic-ui-react'
export default function Question(props) {

  const [clue, openClue] = React.useState(false);

  return (

    <div className="item">
      <div className="image">
        <Image className="image" size='small' />
      </div>
      <div className="content">
        <h2 className="header">{props.question.questionHeader}</h2>
        <div className="description">{props.question.questionText}</div>
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
  )

}
