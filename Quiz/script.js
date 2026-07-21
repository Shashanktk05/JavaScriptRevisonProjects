const questions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["int", "var", "string", "float"],
    answer: "var"
  },
  {
    question: "Which method is used to print something in the browser console?",
    options: ["print()", "console.log()", "document.write()", "alert.log()"],
    answer: "console.log()"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Google", "Netscape", "Oracle"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["<!-- -->", "/* */", "//", "#"],
    answer: "//"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "let arr = (1,2,3);",
      "let arr = [1,2,3];",
      "let arr = {1,2,3};",
      "let arr = <1,2,3>;"
    ],
    answer: "let arr = [1,2,3];"
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "=", "===", "!="],
    answer: "==="
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do...while", "forEach"],
    answer: "do...while"
  },
  {
    question: "Which function converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toObject()"],
    answer: "JSON.parse()"
  },{
    question: "Which event occurs when a user clicks an HTML element?",
    options: ["onchange", "onmouseover", "onclick", "onload"],
    answer: "onclick"
  }

];


let score=0;
let selectedAnswer = "";

const a=(i)=>{
   document.getElementById("id").innerText = `Question ${i+1}`;
    document.getElementById("qes").innerText=`${questions[i].question}`;
    document.getElementById("one").innerText=`${questions[i].options[0]}`;
    document.getElementById("two").innerText=`${questions[i].options[1]}`;
    document.getElementById("three").innerText=`${questions[i].options[2]}`;
    document.getElementById("four").innerText=`${questions[i].options[3]}`;
}
let i=0;
let sk=0;
a(i);


const buttons = document.querySelectorAll(".option button");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        buttons.forEach(btn => btn.classList.remove("selected"));
        this.classList.add("selected");
        selectedAnswer = this.innerText;
          document.getElementById("warn").innerText = "";

    });
});
function nextQuestion(){
if(selectedAnswer===questions[i].answer){
    score++;
}
if(selectedAnswer===""){
     document.getElementById("warn").innerText="Please select an option before continuing.";
        return;
}
    if(i<questions.length-1){
        selectedAnswer = "";
        buttons.forEach(btn => btn.classList.remove("selected"));
        i=i+1;
        a(i);
    }else{
        showResult();
    }
}

function reset(){
     location.reload();
}

function skip(){
    sk++;
     selectedAnswer = "";
        buttons.forEach(btn => btn.classList.remove("selected"));
    if(i<questions.length-1){
        i=i+1;
        a(i);
    }else{
       showResult()
    }

}



function showResult() {
    document.getElementById("main").innerHTML = `
        <div class="result-box">
            <h1>🎉 Quiz Completed</h1>
            <h2>Your Score: ${score} / ${questions.length}</h2>
            <h3>Skipped: ${sk}</h3>
            <button onclick="location.reload()">Restart Quiz</button>
        </div>
    `;
}