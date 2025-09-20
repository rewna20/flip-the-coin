const randombtn=document.getElementById("random-btn")
const result=document.getElementById("result-p")
const resultArr=["Heads","Tails"]


randombtn.addEventListener("click",function(){

    result.textContent="generating answer..."
    randombtn.disabled=true // prevent multiple clicks
    setTimeout(function(){

    let randomNumber=Math.floor(Math.random()*2)
    result.textContent=resultArr[randomNumber]
    console.log(resultArr[randomNumber])
    randombtn.disabled=false
    },1000)
})
