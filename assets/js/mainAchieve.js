// start of achievements page quiz
// an array of questions and answers
const citizenQuestionsAch = [
    { answer: "B", question: "If you wanted to find out about rainfall levels in Ireland? \nA - Deep learning\nB - Millions of Observations\nC - Smartphones and agriculture"},
    { answer: "A", question: "If you wanted to find out about snorkeling in the Indian Ocean? \nA - Involving recreational\nB - Scribes and Scripts\nC - Describing Vocalizations"},
    { answer: "A", question: "if you wanted to find out about the project Etch-a-Cell? \nA - Millions of Observations\nB - Citizen Science and computing\nC - Deep Learning"},
    { answer: "B", question: "If you wanted to find out about Egyptian writing? \nA -  ForestEyes Project\nB - Scribes and Scripts\nC - Describing Vocalizations"},
    { answer: "C", question: "If you wanted to find out about deforestation? \nA - Smartphones and agriculture\nB - Involving recreational\nC - ForestEyes Project"}
];
  //end of array
  // start of recursive function
  function citizenQuizAch() {
     let score = 0;
      // forEach array method
     citizenQuestionsAch.forEach((question) => {
      // window.prompt method
     let answer = prompt(question.question + "\nAnswer: ");
       //lowercase to uppercase
       if (answer.toUpperCase() === question.answer) {
       score = score + 1;
       alert("Your answer is correct. Your score is currently " + score);
     } else {
       alert("Your answer is not correct or has invalid input");
     }
   });
     // score accumulator
    if (score >= 4) {
      alert("Nice one! You have passed " + score);
    } else {
      alert("Sorry, you did not pass " + score);
    }
  }
//end
