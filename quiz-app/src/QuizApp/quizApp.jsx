import React from 'react';
import { useState } from 'react';
import '../QuizApp/quizApp.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function QuizApp() {

    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const quizData = [
        {
            question: 'Pakistan independence year?',
            options: ['1946', '1947', '1948', '1949'],
            correct: '1947',
        },
        {
            question: 'Most polluted city in the world?',
            options: ['Delhi', 'Lahore', 'Dhakka', 'Ching kok'],
            correct: 'Lahore',
        },
        {
            question: 'Largest animal in the world',
            options: ['Giraph', 'Whale', 'Elephant', 'Rhinoceros'],
            correct: 'Whale',
        },
        {
            question: 'Who Invented Computers?',
            options: ['William Worths', 'Shakespear', 'Newton', 'Charles Babbage'],
            correct: 'Charles Babbage',
        },
    ];


    const HandleNextquestion = (option) => {
        if (quizData[currentQuestion]?.correct === option) {
            const inc = score + 1
            setScore(inc);
        }
        const lastIndex = quizData?.length - 1
        setcurrentQuestion(currentQuestion + 1)
    }

    const lastIndex = quizData?.length - 1

    return (
        <div className='container'>
            <ProgressBar className='progressbar' now={currentQuestion * 25} label={`${currentQuestion * 25}%`} />
            {
                lastIndex >= currentQuestion ?
                    <>
                        <p>{[currentQuestion + 1 + " "]}. {quizData[currentQuestion].question}</p>
                        <div>
                            {quizData[currentQuestion].options.map((option, index) => (
                                <li className='Quizoptions' key={index} onClick={() => HandleNextquestion(option)}>
                                    {option}
                                </li>
                            ))
                            }
                        </div>
                    </>
                    :
                    <p>Score : {score} out of {quizData?.length}</p>
            }

        </div>
    );
}

export default QuizApp;
