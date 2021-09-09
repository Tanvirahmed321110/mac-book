
 //memory
document.getElementById('memory8-btn').addEventListener('click',function(){
    const displayMemory8=document.getElementById('display-memory').innerText+'0'
    const displayMemory8Amount=parseInt(displayMemory8)
    displayMemory8.innerText=displayMemory8Amount
    // console.log(displayMemory8)
})

 document.getElementById('memory-btn').addEventListener('click',function(){
    const displayMemory=document.getElementById('display-memory').innerText+'22'
    const displayAmount=parseInt(displayMemory)
    displayMemory.innerHtml=displayAmount
    // console.log(displayMemory)
 })