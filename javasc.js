
 //memory
document.getElementById('memory8-btn').addEventListener('click',function(){
    const displayMemory8=document.getElementById('display-memory')
    const displayMemory8InnerText=displayMemory8.innerText
    const displayMemory8Amount=parseInt(displayMemory8InnerText)
    displayMemory8.innerText='0$'
    // console.log(displayMemory8)
   
    subTotalMinus('sub-total','display-memory')
})

 document.getElementById('memory-btn').addEventListener('click',function(){
    const displayMemory=document.getElementById('display-memory')
    const displayMemoryInnerText=displayMemory.innerText 
    const displayAmount=parseInt(displayMemoryInnerText)
    displayMemory.innerText=20
    
    subTotal('sub-total','display-memory',20)
 })

 //stroage
 function stroage(giveId,price){
     const stroageDisplay=document.getElementById(giveId)
     const stroageDisplayInnerText=giveId.innerText
     const idNumber=parseInt(stroageDisplayInnerText)
     return stroageDisplay.innerText=price
 }

 //stroage btn212
 document.getElementById('stroage-btn212').addEventListener('click',function(){
    stroage('display-stroage',0)
 })
 //stroage btn556
 document.getElementById('stroage-btn556').addEventListener('click',function(){
     stroage('display-stroage',25)
     //subtotal add
     subTotal('sub-total','display-stroage',25)
 })
 //stroage btn1tb
 document.getElementById('stroage-btn1tb').addEventListener('click',function(){
     stroage('display-stroage',35)
     // subtotal add
     subTotal('sub-total','display-stroage',35)
 })


 //delivary free
 document.getElementById('delivary-free-btn').addEventListener('click',function(){
     stroage('display-delivary',00)
 })
 //delivary charge
 document.getElementById('delivary-charge-btn').addEventListener('click',function(){
     stroage('display-delivary',10)
     //subtotal-add
     subTotal('sub-total','display-delivary',8)

 })


 // subtotal total add
 function subTotal(idsubTotal,addId,price){
     const add=document.getElementById(addId)
     const addInnerText=add.innerText
     const addParseInt=parseInt(addInnerText)
     add.innerText=addParseInt

     const subTotal=document.getElementById(idsubTotal)
     const totalInnerText=subTotal.innerText
     let totalParseInt=parseInt(totalInnerText)
     totalParseInt=price+totalParseInt
    //  const addTotal=addParseInt+totalParseInt
     return   subTotal.innerText=totalParseInt


 }


 // minus 
 function subTotalMinus(idsubTotal,displayMemory){
    const add=document.getElementById(displayMemory)
    const addInnerText=add.innerText
    const addParseInt=parseInt(addInnerText)
    add.innerText=addParseInt

    
    const subTotal=document.getElementById(idsubTotal)
    const totalInnerText=subTotal.innerText
    let totalParseInt=parseInt(totalInnerText)
    totalParseInt=totalParseInt-addParseInt
   //  const addTotal=addParseInt+totalParseInt
    return   subTotal.innerText=totalParseInt
 }


 //final total


 //copon code
//  document.getElementById('copon-code-btn').addEventListener('click',function(){
//      const coponCodeInput=document.getElementById('copon-code')
//      const coponCodeInnerText=coponCodeInput.value
//      if(coponCodeInnerText==tanvir){
//          const finalTotal=document.getElementById('final-total')
//          const finalTotalInnerText=finalTotal.innerText
//          const finalTotalParseInt=parseInt(finalTotalInnerText)
//          finalTotal.innerText=finalTotalParseInt-100
//      }  
//  })