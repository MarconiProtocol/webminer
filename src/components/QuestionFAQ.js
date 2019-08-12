import React from 'react';

import ic_question from '../assets/icons/ic-question.png';


const QuestionFAQ = ({ title, description }) => (
    <div className="faq-content-body">
        <div className="flex flex-row items-center">
            <img src={ic_question} alt="question" />

            <span className="ml-20 question-title block">{title}</span>
        </div>

        <p className="question-description">{description}</p>
    </div>
);

export default QuestionFAQ;
