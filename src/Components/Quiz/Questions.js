import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Player from './Player';
import Question from './Question';

const Questions = () => {
    const questions = useLoaderData();
    const {id, question, options } = questions;
    console.log(questions);
    return (
        <div>
            <Player></Player>
            <div>
                {/* This code below doesn't work, I don't know why. */}
               {/* { 
                questions.map(questionText => <Question key={id} questionText={questionText}></Question>)
               } */}
            </div>
        </div>
    );
};

export default Questions;