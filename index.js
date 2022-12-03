// All varieable.....

const Start = document.querySelector(".start");
const Stop = document.querySelector(".stop");
const Body = document.body;
const para = document.querySelector('.timeEvent')

// Autometic color Changing event

let intervalId;
let intervalId2;
let timerId;
let num = 0;
let timerNumber = 0
let timer = 0;
let clicked = 0;

    Start.addEventListener('click',()=>{
        if(timerNumber === 0 ){
            timerId = setInterval(() => {
                para.innerHTML = `${timer}`
                if(timer===4){
                    para.innerHTML = `Start.....`
                }
                if(num < 1 && timer === 4){
                    intervalId = setInterval(()=>{
                   const red = Math.floor(Math.random()*256);
                   const green = Math.floor(Math.random()*256);
                   const blue = Math.floor(Math.random()*256);
                   const colorCode = `rgb(${red},${green},${blue})`;
                   Body.style.backgroundColor = colorCode;
                       },1000) ;num++
                    }
                    if(timer===5){
                    clearInterval(timerId);
                    para.innerHTML = ""
                    timer = -1;
                    timerNumber--
                    };
                    timer++
          
            }, 1000);

             timerNumber++ 
        };clicked++
        
        
       }); 

Start.addEventListener('click',()=>{
    if(clicked===2){
        para.innerHTML = `Start again`
        timer = 0;
        Body.style.backgroundColor="white";
        clearInterval(intervalId);
        if(num===1){
            num--
        }
        if(clicked === 2){
            clicked--
        }

    }
})       
  


Stop.addEventListener('click',()=>{
    if(timerNumber === 1 ){
        clearInterval(timerId);
        para.innerHTML = "";
        timer = 0;
        timerNumber--;
    }
   

    if(num=== 1 ){
        clearInterval(intervalId);
        Body.style.backgroundColor="white";
        num--
    }; clicked--
   
})

// let num = 0;
// Body.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("start") ){
//         var intervalId =  setInterval(()=>{
//             const red = Math.floor(Math.random()*256);
//             const green = Math.floor(Math.random()*256);
//             const blue = Math.floor(Math.random()*256);
//             const colorCode = `rgb(${red},${green},${blue})`;
//             Body.style.backgroundColor = colorCode;
            
//         },1000); num++
//     }
//    if(e.target.classList.contains("stop") ){
//         clearInterval(intervalId);
        
        
//     }
// }
// )


