const randombtn=document.getElementById("random-btn")
const result=document.getElementById("result-p")
const resultArr=["Heads","Tails"]
const imgEl=document.getElementById("coin-img")


randombtn.addEventListener("click",function(){

    result.textContent="generating answer..."
    randombtn.disabled=true // prevent multiple clicks
    setTimeout(function(){

    let randomNumber=Math.floor(Math.random()*2)
    result.textContent=resultArr[randomNumber]
    console.log(resultArr[randomNumber])
    randombtn.disabled=false
    if (randomNumber===0) {
        imgEl.src="images/heads.svg"
    } else {
        imgEl.src="images/tails.svg"
    }
    },1000)
})
