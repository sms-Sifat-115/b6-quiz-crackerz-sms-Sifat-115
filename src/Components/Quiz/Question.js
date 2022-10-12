import React from 'react';

const Question = ({questionText}) => {
    const {question, options} = questionText;
    return (
        <div>
           Q {question}
           options: {options}  
        </div>
    );
};

export default Question;