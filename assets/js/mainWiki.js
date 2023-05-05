// start of wikipedia test
// an array of questions and answers
const citizenQuestionsWiki = [

    { answer: "A", question: "In 1989, who first used the term citizen science? \nA - R. Kerson\nB - Alan Irwin\nC - Muki Haklay"},
    { answer: "C", question: "Choose the female citizen who better embodies the radical spirit of CS. \nA - Darlene Cavalier\nB - Margaret Kosmala\nC - Florence Nightingale"}, 
    { answer: "B", question: "Choose which series from 2017 is supported by the American National Science Foundation. \nA - Game of Thrones\nB - The Crowd and the Cloud\nC - Blue Planet II"},
    { answer: "C", question: "How many breaches of WHO guidelines did wood smoke monitors in Bristol find? \nA - A few\nB - none\nC - 11"},
    { answer: "B", question: "Name the project that helped train AI used by Ellipsis? \nA - The Milky Way project\nB - The Plastic Tide\nC - AnnoTate"}
];
  // end of array
  // start of recursive function
  function citizenQuizWiki() {
    let score = 0;
     // forEach array method
    citizenQuestionsWiki.forEach((question) => {
     // window.prompt method
    let answer = prompt(question.question + "\nAnswer: ");
       //lowercase to uppercase
      if (answer.toUpperCase() === question.answer) {
      score = score + 1;
      alert("Your answer is correct. Your score is currently " + score);
    } else {
      alert("Your answer is not correct or has invalid input.");
    }
  });
    // score accumulator
   if (score >= 4) {
     alert("Congratulations! You have passed " + score);
   } else {
     alert("Sorry, you did not pass " + score);
   }
 }

//end
