const quiz_data = [
    {
        questions : "Who is the player who played more than 653 matches in the English Premier League?",
        a: "Mohamed Salah" ,
        b: "Ronaldo" ,
        c: "Gareth Barry" , 
        d: "Hary Ken" ,
        corect: "c" ,
    },

    {
        questions : "Who is the player who scored the fastest hat-trick in the English Premier League?",
        a: "Mohamed Salah" ,
        b: "Sadio Mane" ,
        c: "Palmer" , 
        d: "Halland" ,
        corect: "b" ,
    },

    {
        questions : "How many clubs competed in the inaugural Premier League season?",
        a: "20" ,
        b: "21" ,
        c: "22" , 
        d: "23" ,
        corect: "c" ,
    },

    {
        questions : "Two English players won the World Cup Golden Boot. Who are these?",
        a: "James Madison and Foden" ,
        b: "Callum Wilson and Saka" ,
        c: "Wayne Rooney and Marcus Rashford" , 
        d: "Gary Lineker and Harry Kane" ,
        corect: "d" ,
    },
];

const quiz = document.getElementById('quiz')
const AnswerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const Submit = document.getElementById('Submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuizData = quiz_data[currentQuiz]
    questionEl.innerText = currentQuizData.questions
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    AnswerEls.forEach( AnswerEl => AnswerEl.checked = false )
}

function getSelected(){
    let Answer
    AnswerEls.forEach(AnswerEl => {
        if(AnswerEl.checked){
            Answer = AnswerEl.id
        }
    })
    return Answer;
}

Submit.addEventListener('click' , () => {
    const Answer = getSelected();
    if(Answer)
        if(Answer ===  quiz_data[currentQuiz].corect){
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quiz_data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quiz_data.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
        
    

})