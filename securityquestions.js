var securityQuestions = [
   {
       question: "What is your mother's maiden name?",
       expectedAnswer: "Sassy"
   },
   {
       question: "What is your favorite color?",
       expectedAnswer: "Red"
   },
   {
       question: "What town did you grow up in?",
       expectedAnswer: "Kalamazoo" 
   }
   ];
   var answer;    
   
for(var i = 0; i < securityQuestions.length; i++) {
   answer = prompt(securityQuestions[i].question);
   if(answer !== securityQuestions[i].expectedAnswer) {
      alert("Wrong answer!");
      break;
   }
}