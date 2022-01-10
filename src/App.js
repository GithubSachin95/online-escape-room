import './App.css';
import { useState } from 'react';
import Question from './containers/question/Question';
import { Button, Transition, Modal } from 'semantic-ui-react';
function App() {

  const questions = [
    {
      questionHeader: "You are locked up in a room and you have 4 digit pin to unlock. Solve this riddle",
      questionText: "We are all part of this entity and the entity started its most popular social media around this pin. To get the pin, first decode which entity we are talking about and then take a look at their earliest post.",
      answer: "2017",
      clue: "Instagram account of the university",
      image: "src\images\riddler.png"
    },
    {
      questionHeader: "You have entered our world 'We fight. That is how we win, and that is how we die'",
      questionText: "Only I can help you get out alive but only if you say my name. Solve this riddle",
      answer: "Ragnar",
      clue: "Vikings Main character"
    },
    {
      questionHeader: "Good job !! Moving on! Now you are onboard on the vikings ship in the middle of the ocean. ",
      questionText: "I am part of atlantic ocean. But if you visit me conspiracies say you might disapper. Who am I ? ",
      answer: "Bermuda triangle",
      clue: "I am also known as devil's triangle /_\ '"
    },
    {
      questionHeader: "You have conquered the ocean and stranded on a deserted island.",
      questionText: "I look like a ray of hope but I am very deceiving. Guess me to enter into your final quest.",
      answer: "Mirage",
      clue: "I am a sort of optical illusion found in desert",
    },
    {
      questionHeader: "Hurray! You have survived the deserted island! There is a door in front of you and it has blocked by spell and in order to break that spell you need to solve this mathematical equation. Mathematical equation to break the spell! Strange no?",
      questionText: "8+(2*4)/4+19-8*(6/3)+4*2/8",
      answer: "14",
      clue: "BODMAS rule",
    }
  ];


  const [qId, setqId] = useState(0)
  const [question, setQuestion] = useState(questions[qId]);
  const [visible, setVisible] = useState(false);
  const [inputText, setinputText] = useState('');
  const [finish, setFinish] = useState(false);

  const handleSubmitAnswer = () => {
    if (qId != 4) {
      if (inputText == question.answer || inputText == question.answer.toLocaleLowerCase()) {
        let id = qId + 1;
        setqId(id);
        setQuestion(questions[id]);
        setinputText('');
      }
    }
    else {
      handleFinish();
    }
  }

  const toggleVisibility = () => setVisible(!visible);

  const handleFinish = () => setFinish(!finish)


  const handleInput = (input) => {
    setinputText(input);

  }
  return (
    <div className="App">
      <div className="ui container">
        {!visible &&
          <>
            <h1>Hello there!</h1>
            <Button
              className="ui secondary"
              content="Enter into the escape room"
              onClick={toggleVisibility}
              size="large"
            />
          </>}

        {!finish &&
          <Transition visible={visible} animation='drop' duration={400}>
            <div>
              <Question question={question} handleSubmitAnswer={handleSubmitAnswer} handleInput={handleInput} inputText={inputText} />
            </div>
          </Transition>}

        {finish && <Transition visible={finish} animation='drop' duration={500}>
          <div>
          <h1 className="successMsg">You have successfully escaped from the room! We are glad that you make it!</h1>
          </div>
        </Transition>
        }


      </div>
    </div>
  );
}

export default App;
