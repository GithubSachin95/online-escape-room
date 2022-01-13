import './App.css';
import { useState } from 'react';
import Question from './containers/question/Question';
import { Button, Transition, Modal, Divider } from 'semantic-ui-react';
function App() {

  const questions = [
    {
      questionHeader: "You are locked up in a room and you have 4 digit pin to unlock. Solve this riddle",
      questionText: "We are all part of this entity and the entity started its most popular social media around this year. To get the number, first decode which entity we are talking about and then take a look at their earliest post.",
      answer: "2017",
      clue: "First post by instagram account of the university"
    },
    {
      questionHeader: "You have entered our world 'We fight. That is how we win, and that is how we die'",
      questionText: "I am the king! I can help you get out alive but only if you say my name.",
      answer: "Ragnar",
      clue: "Vikings series Main character"
    },
    {
      questionHeader: "Good job !! Moving on! Now you are onboard on the vikings ship in the middle of the ocean. ",
      questionText: "I am part of atlantic ocean. But if you visit me conspiracies say you might disapper. Who am I ? ",
      answer: "Bermuda triangle",
      clue: "I am also known as devil's triangle"
    },
    {
      questionHeader: "You have conquered the ocean and stranded on a deserted island.",
      questionText: "I look like a ray of hope but I am very deceiving. Guess me to enter into your final quest.",
      answer: "Mirage",
      clue: "I am a sort of optical illusion found in desert",
    },
    {
      questionHeader: "Hurray! You have survived the deserted island! There is a door in front of you and it has blocked by spell and in order to break that spell you need to solve this mathematical equation. Mathematical equation to break the spell! Strange no?",
      questionText: "(8+2*4/4+19-8*6/3+4*2/8)",
      answer: "14",
      clue: "use BODMAS rule",
    }
  ];


  const [qId, setqId] = useState(0)
  const [question, setQuestion] = useState(questions[qId]);
  const [visible, setVisible] = useState(false);
  const [inputText, setinputText] = useState('');
  const [finish, setFinish] = useState(false);
  const [duration,setDuration] = useState(10);

  const handleSubmitAnswer = () => {

    if (qId <= 3) {
      if (inputText == question.answer || inputText == question.answer.toLocaleLowerCase()) {
        let id = qId + 1;
        setqId(id);
        setQuestion(questions[id]);
        setinputText('');
        setDuration(10);
        console.log(qId);
    
      }
    }
    else if(qId == 4){
      if (inputText == question.answer) handleFinish();
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
            <h1 className="helloHeader">Hello there!</h1>
            <Button
              className="ui secondary"
              content="Enter into the escape room"
              onClick={toggleVisibility}
              size="large"
            />
            <div className="item rule">
              <h1 className="ruleHead">Rules</h1>
              <Divider/>
              <h2>1. There are 5 quizes are to be solved </h2>
              <Divider/>
              <h2>2. the next quiz will be unlocked only when you solve the current one. </h2>
              <Divider/>
              <h2>3. There is a time limit of 15 minutes to escape the room.</h2>
              <Divider/>
              <h2>4. When in doubt, ask for clue!</h2>
            </div>
          </>}

        {!finish &&
          <Transition visible={visible} animation='drop' duration={400}>
            <div>
              <Question question={question} handleSubmitAnswer={handleSubmitAnswer} handleInput={handleInput} inputText={inputText} duration={duration} timeUp={false}/>
            </div>
          </Transition>}

        <Transition visible={finish} animation='drop' duration={500}>

          <h1 className="item">You have successfully escaped from the room! We are glad that you make it!</h1>
        </Transition>



      </div>
    </div>
  );
}

export default App;
