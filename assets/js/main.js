// start of activities page quiz
// an array of read-only questions and answers

//let btn = document.getElementById("citizenQuizAct");
//btn.addEventListener("click", alertMe);

const citizenQuestionsAct = [
    { answer: "C", question: "If you wanted to help clean-up marine plastic? \nA - The Wildlife Trusts\nB - National Geographic\nC - Ocean Cleanup"},
    { answer: "B", question: "If you wanted to help monitor urban woodsmoke pollution? \nA - UK Centre for Hydrology\nB - Citizen Sensing\nC - Guardian Vacations"},
    { answer: "A", question: "If you wanted to look at and classify millions of galaxies? \nA - Galaxy Zoo\nB - Hedgehog Watch\nC - Changing Coastlines"},
    { answer: "C", question: "if you wanted to count butterflies \nA - Ocean Cleanup\nB - Flooding Resilience\nC - UK Center"},
    { answer: "B", question: "if you are in Cheshire and wanted to find reptiles? \nA - Guardian Vacations\nB - the Wildlife Trusts\nc - National Geographic"}
];
  // function citizenQuiz and Activities page
  function citizenQuizAct() {
     let score = 0;
      // forEach array method
     citizenQuestionsAct.forEach((question) => {
      // window.prompt method
     let answer = prompt(question.question + "\nAnswer: ");
       if (answer.toUpperCase() === question.answer) {
       score = score + 1;
       alert("Your answer is correct. Your score is currently " + score);
     } else {
       alert("Sorry, your answer is not correct.");
     }
   });
     // score accumulator
    if (score >= 3) {
      alert("Nice one! You have passed " + score);
    } else {
      alert("Sorry, you did not pass " + score);
    }
  }


//end
