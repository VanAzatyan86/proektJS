
let tabsUl= document.querySelectorAll(".tabsUl li");
let tabsImages=document.querySelectorAll(".tabsImages img");
let myText=document.querySelectorAll(".myText")
let tabsBtn=document.querySelectorAll(".tabsBtn .tabsDiv div");
let tabsDivBorder=document.querySelectorAll(".tabsBtn .tabsDiv");
let datesDays=document.getElementById("datesDays")
let datesHours=document.getElementById("datesHours");
let datesMinutes=document.getElementById("datesMinutes");
let datesSeconds=document.getElementById("datesSeconds");
let inputValid=document.querySelectorAll(".form-control")
let btn=document.getElementById("myBtn");
let footerBtnSpan =document.querySelectorAll(".footerBtnSpan");
let bigItem=document.querySelectorAll(".bigItem");
let footerDivs=document.querySelectorAll(".footerDivs")


for (let j = 0; j < tabsUl.length; j++) {
    tabsUl[j].addEventListener("click",()=>{
        for (let j = 0; j < tabsImages.length; j++) {
            tabsImages[j].classList.remove("activImg")
            tabsUl[j].style.color="white" 
            myText[j].style.display="none"
            tabsBtn[j].style. backgroundColor="white"
            tabsDivBorder[j].classList.remove("activeDiv")
        }
        tabsImages[j].classList.add("activImg")
        tabsUl[j].style.color=" #f5a425"
        myText[j].style.display="block"
        tabsBtn[j].style.backgroundColor="#f5a425"
        tabsDivBorder[j].classList.add("activeDiv")
    })
 
}

 window.onload=function(){
     window.setInterval(function(){
      let a = new Date()  
      let date=a.getDate();
      let newdays= 31-`${date}`;
      let hours =a.getHours();
      let newHours= 23-`${hours}`;
      let minutes=a.getMinutes();
      let newMinutes=59-`${minutes}`;
      let seconds=a.getSeconds();
      let newSeconds=59-`${seconds}`;
      datesDays.innerHTML=newdays;
      datesHours.innerHTML=newHours;
      datesMinutes.innerHTML=newMinutes;
      datesSeconds.innerHTML=newSeconds
    })
 }

 
 
 for (let j = 0; j < tabsUl.length; j++) {
     tabsUl[j].addEventListener("click",()=>{
         for (let j = 0; j < tabsImages.length; j++) {
             tabsImages[j].classList.remove("activImg")
             tabsUl[j].style.color="white" 
             myText[j].style.display="none"
             tabsBtn[j].style. backgroundColor="white"
             tabsDivBorder[j].classList.remove("activeDiv")
         }
         tabsImages[j].classList.add("activImg")
         tabsUl[j].style.color=" #f5a425"
         myText[j].style.display="block"
         tabsBtn[j].style.backgroundColor="#f5a425"
         tabsDivBorder[j].classList.add("activeDiv")
     })
  
 }
 
  window.onload=function(){
 
      window.setInterval(function(){
 
       let a = new Date()  
 
       let date=a.getDate();
       let newdays= 31-`${date}`;
       let hours =a.getHours();
       let newHours= 23-`${hours}`;
       let minutes=a.getMinutes();
       let newMinutes=59-`${minutes}`;
       let seconds=a.getSeconds();
       let newSeconds=59-`${seconds}`;
       datesDays.innerHTML=newdays;
       datesHours.innerHTML=newHours;
       datesMinutes.innerHTML=newMinutes;
       datesSeconds.innerHTML=newSeconds
     })
  }
 
  for (let i = 0; i < footerBtnSpan.length; i++) {
     footerBtnSpan[i].addEventListener("click",()=>{
         for (let i = 0; i < footerBtnSpan.length; i++) {
             footerBtnSpan[i].classList.remove("activeBtn"); 
         }
         footerBtnSpan[i].classList.add("activeBtn")   
  })
 }
  
for (let i = 0; i < bigItem.length; i++) {
    bigItem[i].addEventListener("click",()=>{
        for (let i = 0; i < footerBtnSpan.length; i++){
        bigItem[i].classList.remove("active")
        }
        bigItem[i].classList.add("activeNone")
    })
    
    
}


