"use strict";console.log("Hello World.");var languageButtons=document.querySelectorAll(".language");languageButtons.forEach(function(e){e.addEventListener("click",function(){console.log("lang picked",this.dataset.language),document.cookie="language="+this.dataset.language,document.location="swearing.html"})});var nextButton=document.querySelector(".next");nextButton.style.display="none";var italianSwearWords=[{question:"I hope you mangia merde e morte!",answers:{a:"eat shit and die",b:"break your bones",c:"grow a new brain"},correct:"a"},{question:"Why don't you vaffanculo?",answers:{a:"piss off",b:"go to hell",c:"go fuck yourself"},correct:"c"}],japaneseSwearWords=[{question:"Could you shi'ne kutabare?",answers:{a:"go fuck yourself",b:"go to hell",c:"please die"},correct:"c"},{question:"Why don't you damare?",answers:{a:"dig yourself a grave",b:"shut your fucking face",c:"go eat ramen"},correct:"b"}],germanSwearWords=[{question:"You're such a drscksnest!",answers:{a:"armpit of the universe",b:"pair of sweaty balls",c:"dickhead"},correct:"a"},{question:"Stop bothering me. Verpiss dich!",answers:{a:"die in a ditch",b:"suck a dick",c:"piss off"},correct:"c"}],chineseSwearWords=[{question:"You can't be any more Èr bǎi wǔ than you already are.",answers:{a:"420",b:"250",c:"fugly"},correct:"b"},{question:"cào nǐ zǔzōng shíbā dài",answers:{a:"kiss an elephant's ass",b:"take your shit and shove it in your face",c:"fuck your ancestors to an innumerable generation"},correct:"c"}],options=document.querySelector(".options"),question=document.querySelector(".question"),currentQuestion=0,swearingOwl=document.createElement("div");document.querySelector(".learn-to-swear").appendChild(swearingOwl);var quiz=function(t){question.innerText=t[currentQuestion].question;var e=function(e){var n=document.createElement("button");n.innerText=t[currentQuestion].answers[e],options.appendChild(n),n.setAttribute("id",e),n.addEventListener("click",function(){n.id!==t[currentQuestion].correct?(n.setAttribute("class","wrong"),document.querySelector(".wrong").style.backgroundColor="red"):(n.setAttribute("id","right"),document.querySelector("#right").style.backgroundColor="green"),nextButton.style.display="block",nextButton.style.backgroundColor="#fff"})};for(var n in t[currentQuestion].answers)e(n)},nextQuestion=function(e){nextButton.addEventListener("click",function(){options.innerHTML=" ",2===(currentQuestion+=1)?document.querySelector(".learn-to-swear").innerHTML="Quiz Over":quiz(e),nextButton.style.display="none"})};document.cookie.includes("language=italian")?(quiz(italianSwearWords),nextQuestion(italianSwearWords)):document.cookie.includes("language=japanese")?(quiz(japaneseSwearWords),nextQuestion(japaneseSwearWords)):document.cookie.includes("language=german")?(quiz(germanSwearWords),nextQuestion(germanSwearWords)):document.cookie.includes("language=chinese")&&(quiz(chineseSwearWords),nextQuestion(chineseSwearWords));
//# sourceMappingURL=main.js.map