import React, { useState } from 'react';
import  {MathJaxContext} from 'better-react-mathjax';
import Quiz from './Quiz';
import QuizSelector from './QuizSelector';  // Assuming you have this component to select/load quizzes

function App() {
  const [quizData, setQuizData] = useState(null);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const mathJaxConfig = {
    loader: {
      load: ['input/tex', 'output/svg'],
    },
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      processEnvironments: true,
    },
    svg: {
      fontCache: 'global',
    },
  };

  return (
    <MathJaxContext config={mathJaxConfig}>
      <div className="App">
        <h1>Quiz App</h1>

        {!quizData && <QuizSelector onFileLoaded={setQuizData} />}

        {quizData && !isQuizComplete && <Quiz data={quizData} onComplete={() => setIsQuizComplete(true)} />}
        
        {/* TODO: Add other components like Results, Visualization, etc. */}
      </div>
    </MathJaxContext>
  );
}

export default App;

