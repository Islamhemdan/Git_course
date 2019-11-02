var examObj = {
    name: "C Exam",
    time: 30,
    Questions: [
    {
        head: "which of the following tag is used to mark a begining of paragraph ?",
        answers: ["a: <TD>", "b: <br>", "c: <P>", "d: <TR>"],
        correctAnswer: 2,
        grade: 1
    },
    {
        head: "What does HTML stand for?",
        answers: ["a: HiTech Meaningful Language", "b: HyperText Meaningful Language", "c: HiTech Markup Language", "d: HyperText Markup Language"],
        correctAnswer: 3,
        grade: 1
    },
    {
        head: "Correct HTML tag for the largest heading is________?",
        answers: ["a: <head>", "b: <h6>", "c: <heading>", "d: <h1>"],
        correctAnswer: 3,
        grade: 1
    },
    {
        head: "Markup tags tell the web browser",
        answers: ["a: How to organise the page", "b: How to display the page", "c: How to display message box on page", "d: None of these"],
        correctAnswer: 1,
        grade: 1
    },
    {
        head: "Web pages starts with which of the following tag?",
        answers: ["a. <Body>", "b. <head>", "c. <html>", "d. <body>"],
        correctAnswer: 2,
        grade: 1
    },
    {
        head: "FTP is an abbreviation for?",
        answers: ["a: File Transfer Position", "b: File Transfer Protection", "c: File Transfer Protocol", "d: File Transfer Possibility"],
        correctAnswer: 2,
        grade: 1
    },
    {
        head: "In which of the following form, data is stored in computer ?",
        answers: ["a: Decimal", "b: Binary", "c: HexaDecimal", "d: Octal"],
        correctAnswer: 1,
        grade: 1
    },
   
    {
        head: "Correct HTML to left align the content inside a table cell is",
        answers: ["a: <tdleft>", "b: <td raligh = left >", "c: <td align =left>", "d: <td leftalign>"],
        correctAnswer: 2,
        grade: 1
    }
    ]
};



var questionsArray = [];

//console.log(questionsArray.indexOf(0))

function randomQuestion(obj, _NumberOfQuestions) {
    var i = 0;
    while (i < _NumberOfQuestions) {
        
        var temp = Math.floor(Math.random() * obj.Questions.length);
       // console.log(temp)
        
        if (questionsArray.indexOf(temp) == -1)
        {
            questionsArray.push(temp);
            i++;
        }
        
    }
}




// start of time
window.addEventListener("load", function () {

                randomQuestion(examObj, 5);

        function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        console.log(t)
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);

        return {
            'total': t,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);

        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

        function updateClock() {
            var t = getTimeRemaining(endtime);


            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    var deadline = new Date(Date.parse(new Date()) + 15 * 24  * 1000);
    initializeClock('clockdiv', deadline);
// end of time






var divdata = document.getElementById("data");    //divdata...........
var x=0;
viewQuestion(x)  

var next = document.getElementById("next");
 

var countskipped = 0;
// var skip = document.getElementById("skip");
next.addEventListener("click", function (event) {



    var labelSkipped = document.getElementById(x+"  s");
    var answerAnswer = examObj.Questions[questionsArray[x]].userAnswer;

    if (!(labelSkipped || answerAnswer)) {
        var label = document.createElement("label");
        label.textContent = "question" + (x + 1) + " ...skipped";
        label.id = x + "  s";
        label.className = "skippedClass";
        
        label.addEventListener("click", function (event) {
            x = Number(this.id.slice(0, 2).trim());
            viewQuestion(x);
            countskipped--;

        });
        skippedList.appendChild(label);
        //skippedList.appendChild(document.createElement("br"));
    }
    

    x++;

    if (x == questionsArray.length)
    {
        con =  confirm('Did you answerd all questions and want to know the result of exam ?');
        if (con == true) {
        finishButton.click();  
        
        }
     x = questionsArray.length - 1;
        

    }
    
       
    viewQuestion(x);
    if (answerAnswer) {
        labelSkipped.remove();
    }
 
});





var prev = document.getElementById("previous");
prev.addEventListener("click", function (event) {
    x--;
    if (x ==-1)
        x = 0;
    viewQuestion(x);
});

var first = document.getElementById("firtquestion");
first.addEventListener("click", function (event) {
    x = 0;
    viewQuestion(x);
});

var last = document.getElementById("lastquestion");
last.addEventListener("click", function (event) {
   x = questionsArray.length - 1;
   viewQuestion(x);
});

 

var no_of_answered_ques = 0;
function viewQuestion(x)
{
    divdata.innerHTML = '';
   
    var currentquestion = examObj.Questions[questionsArray[x]];
    var qnum = document.createElement("h2");            //question number...........
            
    qnum.textContent = "Question " + (x+1 + " of "+ questionsArray.length);
  
    divdata.appendChild(qnum);
    qnum.style.color = "#9bd5e0";
    qnum.style.marginTop = "10px";

    var qheader = document.createElement("p");          //question header.......
    qheader.textContent = ">> "+currentquestion.head;

    divdata.appendChild(qheader);
    qheader.style.color = 'white';
    var check=-1;
    if(currentquestion.userAnswer)
       {
         check= currentquestion.userAnswer;
          
       }
   else
             
    var table = document.createElement("table");       //table...........
    var tbody = document.createElement("tbody");
    for (var i = 0; i < currentquestion.answers.length; i++) 
    {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var radio = document.createElement("input");        //radio......
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", "q" + x);
        radio.setAttribute("value", i);
       
        radio.addEventListener("click", function (event) {
            currentquestion.userAnswer=this.value;
            
        });     
        if( check == i)
            radio.checked=true;
   
        td.appendChild(radio);

        var label = document.createElement("label");      //label...
        label.textContent = currentquestion.answers[i];
        td.appendChild(label);
        tr.appendChild(td);
        tbody.appendChild(tr);
        tr.style.color = '#adcac5';
    }
    table.appendChild(tbody);
    divdata.appendChild(table);
    table.style.fontSize = "25px";
    table.style.color = "black";
    table.style.borderSpacing = "15px";
    
    
}

var skippedList = document.getElementById("skippedList");
var mark = document.getElementById("mark");
mark.addEventListener("click", function (event) {
    var labelMark = document.getElementById(x+"  m");
    if (!labelMark) {
        var label = document.createElement("label")
        label.textContent = "question" + (x + 1) + " ...marked";
        label.id = x + "  m";
        label.className = "markedClass";
        label.addEventListener("click", function (event) {
            x = Number(this.id.slice(0, 2).trim());
            viewQuestion(x);
        });
        skippedList.appendChild(label);
    }
    else
        labelMark.remove();
});


var finishButton = document.getElementById("finish")
finishButton.addEventListener("click", function (event) {
    var result = 0;
    var corrCounter = 0;
    var fCounter = 0;
   // alert("finish");

   
       
       

    var un_answered_quest;
    for (var x = 0; x < questionsArray.length; x++) {

        var currentquestion = examObj.Questions[questionsArray[x]];
        if (currentquestion.correctAnswer == currentquestion.userAnswer) {
            result += currentquestion.grade;
            corrCounter++;
        }

        else
            fCounter++;

        if (currentquestion.userAnswer)
            no_of_answered_ques++;



    }
    var status = (corrCounter / questionsArray.length) * 100;
    if (status >= 60)
        var s = "passed";
    else
        s = "failed";
    un_answered_quest = questionsArray.length - no_of_answered_ques;

   
    var container = document.getElementById("container2");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    var br = document.createElement("br");
    container.appendChild(br);

    var gradedd = document.createElement("h1");
    gradedd.textContent = "Exam Over";
    gradedd.style.textAlign = "center";
    container.appendChild(gradedd);

    var p1 = document.createElement("h2");
    p1.textContent = "Grade: " + result;
    container.appendChild(p1);

    var p2 = document.createElement("h2");
    p2.textContent = "Correct answers: " + corrCounter;
    container.appendChild(p2);

    var p3 = document.createElement("h2");
    p3.textContent = "False answers: " + fCounter;
    container.appendChild(p3);

    var p4 = document.createElement("h2");
    p4.textContent = "Number Of Answered Questions: " + no_of_answered_ques;
    container.appendChild(p4);

    var p5 = document.createElement("h2");
    p5.textContent = "Number Of Unnswered Questions: " + un_answered_quest;
    container.appendChild(p5);

   /*var p6 = document.createElement("h2");
    p6.textContent = "Number Of Skipped Questions: " + countskipped;
    container.appendChild(p6);*/

    var p7 = document.createElement("h2");
    p7.textContent = "Your status : " + s;
    container.appendChild(p7);


}


);

});

