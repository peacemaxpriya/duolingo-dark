"use strict";console.log("Hello World.");var languageButtons=document.querySelectorAll(".language");languageButtons.forEach(function(e){e.addEventListener("click",function(){console.log("lang picked",this.dataset.language),document.cookie="language="+this.dataset.language,document.location="swearing.html"})});var italianSwearWords=[{question:"I hope you mangia merde e morte!",answers:{a:"eat shit and die",b:"break your bones",c:"grow a new brain"},correct:"a"},{question:"Why don't you vaffanculo?",answers:{a:"piss off",b:"go to hell",c:"go fuck yourself"},correct:"c"},{question:"Faccia di culo",answers:{a:"your face looks like your butt",b:"shut your fucking face",c:"you face look like a cow's face"},correct:"a"},{question:"Ti corro in culo",answers:{a:"you're a shitface",b:"you look like shit",c:"i run into your ass"},correct:"c"},{question:"Porco cane",answers:{a:"pig's shit",b:"pig dog",c:"dog dick"},correct:"b"}],japaneseSwearWords=[{question:"Could you shi'ne kutabare?",answers:{a:"go fuck yourself",b:"go to hell",c:"please die"},correct:"c"},{question:"Why don't you damare?",answers:{a:"dig yourself a grave",b:"shut your fucking face",c:"go eat ramen"},correct:"b"},{question:"Kuso kurae",answers:{a:"fuck a donkey",b:"eat shit",c:"piss off"},correct:"b"},{question:"fuzakeru na",answers:{a:"fuck off",b:"suck a dick",c:"fuck face"},correct:"a"},{question:"shinjimae",answers:{a:"shithead",b:"dumbass",c:"go to hell"},correct:"c"}],germanSwearWords=[{question:"You're such a drscksnest!",answers:{a:"armpit of the universe",b:"pair of sweaty balls",c:"dickhead"},correct:"a"},{question:"Stop bothering me. Verpiss dich!",answers:{a:"die in a ditch",b:"suck a dick",c:"piss off"},correct:"c"},{question:"Arschgeige",answers:{a:"piece of shit",b:"pee hole dandruf",c:"ass violin"},correct:"c"},{question:"dummkopf",answers:{a:"burn in hell",b:"shithead",c:"asshole"},correct:"b"},{question:"mongo",answers:{a:"dumbass",b:"wanker",c:"fucker"},correct:"a"}],chineseSwearWords=[{question:"You can't be any more Èr bǎi wǔ than you already are.",answers:{a:"420",b:"250",c:"fugly"},correct:"b"},{question:"cào nǐ zǔzōng shíbā dài",answers:{a:"kiss an elephant's ass",b:"take your shit and shove it in your face",c:"fuck your ancestors to an innumerable generation"},correct:"c"},{question:"gǔn dàn",answers:{a:"go to hell",b:"piss off",c:"fuck you"},correct:"b"},{question:"gàn?",answers:{a:"fuck",b:"shit",c:"crap"},correct:"a"},{question:"lājī",answers:{a:"trash",b:"a rolling egg",c:"bastard"},correct:"a"}],options=document.querySelector(".options"),question=document.querySelector(".question"),currentQuestion=0,nextButton=document.querySelector("button.next");nextButton.style.display="none";var swearingOwl=document.querySelector(".swearing-owl span");swearingOwl.style.display="none";var happyOwl=function(){document.querySelector(".inside-pages-owl").setAttribute("id","owl-happy")},disappointedOwl=function(){document.querySelector(".inside-pages-owl").setAttribute("id","owl-disappointed"),swearingOwl.style.display="block",swearingOwl.innerText="It's "+document.querySelector("#right").innerText+", you idiot."},quiz=function(e){for(var t in question.innerText=e[currentQuestion].question,document.querySelector(".inside-pages-owl").removeAttribute("id","owl-disappointed"),document.querySelector(".inside-pages-owl").removeAttribute("id","owl-happy"),e[currentQuestion].answers){var r=document.createElement("button");r.innerText=e[currentQuestion].answers[t],options.appendChild(r),r.setAttribute("id",t),r.id===e[currentQuestion].correct?r.setAttribute("id","right"):r.setAttribute("class","wrong"),r.addEventListener("click",function(e){e.target===document.querySelector("#right")?(e.target.style.backgroundColor="green",setTimeout(happyOwl,500)):(e.target.style.backgroundColor="red",setTimeout(disappointedOwl,500)),document.querySelector("button:nth-child(1)").disabled=!0,document.querySelector("button:nth-child(2)").disabled=!0,document.querySelector("button:nth-child(3)").disabled=!0,nextButton.style.display="block",nextButton.disabled=!1})}},nextQuestion=function(e){nextButton.addEventListener("click",function(){swearingOwl.style.display="none",options.innerHTML=" ",5===(currentQuestion+=1)?(document.querySelector(".certificate").style.display="flex",document.querySelector(".another-language").style.display="block",document.querySelector(".learn-to-swear").style.display="none"):quiz(e),nextButton.style.display="none"})},certificateToShare=document.createElement("meta");certificateToShare.setAttribute("property","og:image"),certificateToShare.setAttribute("content"," "),document.querySelector("head").appendChild(certificateToShare),document.cookie.includes("language=italian")?(quiz(italianSwearWords),nextQuestion(italianSwearWords),document.querySelector(".cert").setAttribute("src","dist/img/certificates/italian-cert.png"),document.querySelector(".cert-to-share").setAttribute("content","dist/img/certificates/italian-cert.png")):document.cookie.includes("language=japanese")?(quiz(japaneseSwearWords),nextQuestion(japaneseSwearWords),document.querySelector(".cert").setAttribute("src","dist/img/certificates/japanese-cert.png"),document.querySelector(".cert-to-share").setAttribute("content","dist/img/certificates/japanese-cert.png")):document.cookie.includes("language=german")?(quiz(germanSwearWords),nextQuestion(germanSwearWords),document.querySelector(".cert").setAttribute("src","dist/img/certificates/german-cert.png"),document.querySelector(".cert-to-share").setAttribute("content","dist/img/certificates/german-cert.png")):document.cookie.includes("language=chinese")&&(quiz(chineseSwearWords),nextQuestion(chineseSwearWords),document.querySelector(".cert").setAttribute("src","dist/img/certificates/chinese-cert.png"),document.querySelector(".cert-to-share").setAttribute("content","dist/img/certificates/chinese-cert.png"));
//# sourceMappingURL=main.js.map