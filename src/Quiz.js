import React, { useState } from 'react';
//import  MathJax  from 'better-react-mathjax';
import {MathJax}  from 'better-react-mathjax';

function Quiz(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = props.data.questions[currentIndex].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    
    setAnsweredQuestions(prev => [...prev, {
      question: props.data.questions[currentIndex].question,
      selectedAnswer,
      correctAnswer
    }]);
    
    if (currentIndex < props.data.questions.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div>
      <MathJax.Provider>
        {!completed ? (
          // Questions part
          <>
            <h2>
              <MathJax.Node inline>{props.data.questions[currentIndex].question}</MathJax.Node>
            </h2>
            <ul>
              {props.data.questions[currentIndex].options.map((option, idx) => (
                <li key={idx}>
                  <button onClick={() => handleAnswer(option)}>
                    <MathJax.Node inline>{option}</MathJax.Node>
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          // Results part
          <>
            <p>Your score is: {score}</p>
            <button onClick={() => {
              answeredQuestions.forEach(q => {
                if (q.selectedAnswer !== q.correctAnswer) {
                  console.log(`Question: ${q.question}`);
                  console.log(`Your Answer: ${q.selectedAnswer}`);
                  console.log(`Correct Answer: ${q.correctAnswer}`);
                }
              });
            }}>See what you got wrong</button>
          </>
        )}
      </MathJax.Provider>
    </div>
  );
}

export default Quiz;

