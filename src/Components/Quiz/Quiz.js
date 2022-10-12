import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';
import Player from './Player';



const Quiz = () => {
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => setQuiz(data.data.data));
        }
    ,[]);
    return (
        <div className="container my-5 py-5">
            <Player></Player>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
                {
                quiz.map(quiz => <Card key={quiz.id} quiz={quiz}></Card>)   
                }
            </div>
           
        </div>
    );
};

export default Quiz;