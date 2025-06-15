"use client";
import { useState } from 'react';
import Navbar from '../Navbar';
import styles from './Quiz.module.css';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Which instrument measures soil compaction?",
      options: [
        "pH meter",
        "Pocket penetrometer", 
        "Moisture sensor",
        "Thermometer"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the ideal soil compaction range?",
      options: [
        "0-100 psi",
        "100-300 psi",
        "300-500 psi",
        "500-700 psi"
      ],
      correctAnswer: 1
    },

    {
    question: "What is the main purpose of the Five-Point Method?",
    options: [
      "To test soil compaction patterns",
      "To measure soil pH levels",
      "To determine soil color variations",
      "To calculate organic matter content"
    ],
    correctAnswer: 0
  },
  {
    question: "In the Five-Point Method, how should the sampling points be arranged?",
    options: [
      "In a straight line",
      "In a circular pattern",
      "Randomly scattered",
      "In an 'X' or 'Y' pattern"
    ],
    correctAnswer: 3
  },
  {
    question: "What should you do before taking penetrometer measurements?",
    options: [
      "Water the soil thoroughly",
      "Clear away grass and debris",
      "Mix different soil layers",
      "Add fertilizer to the area"
    ],
    correctAnswer: 1
  },
  {
  question: "What does a pocket penetrometer directly measure?",
  options: [
    "Soil moisture content",
    "Soil pH level",
    "Soil temperature",
    "Soil compaction resistance"
  ],
  correctAnswer: 3
},
  {
    question: "What is soil compaction?",
    options: [
      "When soil particles are pressed together, reducing pore space",
      "The process of adding nutrients to soil",
      "The natural loosening of soil over time",
      "The mixing of different soil types"
    ],
    correctAnswer: 0
  },
  {
    question: "What unit is typically used for penetrometer readings?",
    options: [
      "pH units",
      "Pounds per square inch (psi) or kg/cm²",
      "Percentage of moisture",
      "Degrees Celsius"
    ],
    correctAnswer: 1
  },
  {
    question: "Why is soil compaction important in agriculture?",
    options: [
      "It makes soil more colorful",
      "It increases soil temperature dramatically",
      "It limits root growth and water absorption",
      "It prevents all weed growth"
    ],
    correctAnswer: 2
  },
  {
    question: "What is the correct procedure when using a penetrometer?",
    options: [
      "Press it into soil quickly and forcefully",
      "Twist it while inserting",
      "Press it slowly and steadily",
      "Drop it from a height"
    ],
    correctAnswer: 2
  }
    
  ];

  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return;
    
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <section className={styles.section}>
        {!showResult ? (
          <>
            <h2 className={styles.sectionTitle}>Soil Compaction Quiz</h2>
            
            <div className={styles.quizContainer}>
              <div className={styles.quizCard}>
                <div className={styles.progress}>
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                
                <h3 className={styles.question}>
                  {questions[currentQuestion].question}
                </h3>
                
                <div className={styles.optionsContainer}>
                  {questions[currentQuestion].options.map((option, index) => {
                    const isCorrect = index === questions[currentQuestion].correctAnswer;
                    const isSelected = selectedOption === index;
                    let optionClass = styles.option;
                    
                    if (showAnswer) {
                      if (isCorrect) {
                        optionClass += ` ${styles.correct}`;
                      } else if (isSelected) {
                        optionClass += ` ${styles.incorrect}`;
                      }
                    }

                    return (
                      <div
                        key={index}
                        className={optionClass}
                        onClick={() => handleOptionSelect(index)}
                      >
                        {option}
                        {showAnswer && isCorrect && " ✓"}
                        {showAnswer && isSelected && !isCorrect && " ✗"}
                      </div>
                    );
                  })}
                </div>
                
                {showAnswer && (
                  <button
                    className={styles.nextButton}
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'}
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className={styles.resultContainer}>
            <h2 className={styles.resultTitle}>Quiz Results</h2>
            <p className={styles.score}>
              {score} / {questions.length} correct
            </p>
            <button className={styles.restartButton} onClick={restartQuiz}>
              Try Again
            </button>
          </div>
        )}
      </section>
    </div>
  );
}