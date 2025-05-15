import React from "react";
import './QuestionCard.css';

const QuestionCard = ({ question, onCorrect, onWrong, onSkip }) => (
  <div className="card">
    <h2 className="question">{question}</h2>
    <div className="buttons">
      <button onClick={onCorrect} className="btn correct">ACERTOU</button>
      <button onClick={onWrong} className="btn wrong">ERROU</button>
      <button onClick={onSkip} className="btn skip">PULAR</button>
    </div>
  </div>
);

export default QuestionCard;
