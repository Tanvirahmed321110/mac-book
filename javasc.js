
 //memory
document.getElementById('memory8-btn').addEventListener('click',function(){
    const displayMemory8=document.getElementById('display-memory')
    const displayMemory8InnerText=displayMemory8.innerText
    const displayMemory8Amount=parseInt(displayMemory8InnerText)
    displayMemory8.innerText='0$'
    // console.log(displayMemory8)
   
    subTotal('sub-total','display-stroage','display-memory','display-delivary',00)
})

 document.getElementById('memory-btn').addEventListener('click',function(){
    const displayMemory=document.getElementById('display-memory')
    const displayMemoryInnerText=displayMemory.innerText 
    const displayAmount=parseInt(displayMemoryInnerText)
    displayMemory.innerText=20
    
    subTotal('sub-total','display-stroage','display-memory','display-delivary',20)
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
     subTotal('sub-total','display-stroage','display-memory','display-delivary',25)

 })
 //stroage btn1tb
 document.getElementById('stroage-btn1tb').addEventListener('click',function(){
     stroage('display-stroage',35)
     // subtotal add
     subTotal('sub-total','display-stroage','display-memory','display-delivary',25)
 })


 //delivary free
 document.getElementById('delivary-free-btn').addEventListener('click',function(){
     stroage('display-delivary',00)
     subTotal('sub-total','display-stroage','display-memory','display-delivary', 00 )
 })
 //delivary charge
 document.getElementById('delivary-charge-btn').addEventListener('click',function(){
     stroage('display-delivary',10)
     //subtotal-add
     subTotal('sub-total','display-stroage','display-memory','display-delivary', 10 )

 })


 // subtotal total add
 function subTotal(idsubTotal,addId,addId2,addId3){
     const add=document.getElementById(addId)
     const addInnerText=add.innerText
     const addParseInt=parseInt(addInnerText)
     add.innerText=addParseInt

     
     const addid2=document.getElementById(addId2)
     const addid2InnerText=addId2.innerText
     const addid2ParseInt=parseInt(addid2InnerText)
     addId2.innerText=addid2ParseInt

     const addid3=document.getElementById(addId3)
     const addid3InnerText=addId3.innerText
     const addid3ParseInt=parseInt(addid3InnerText)
     addId3.innerText=addid3ParseInt

     
     const subTotal=document.getElementById(idsubTotal)
     const totalInnerText=subTotal.innerText
     let totalParseInt=parseInt(totalInnerText)
    //  subTotal.innerText=totalParseInt
    
     return     subTotal.innerText=subTotal+addId2+addId+addId3
 }





 //copon code
 document.getElementById('copon-code-btn').addEventListener('click',function(){
     const coponCodeInput=document.getElementById('copon-code')
     const coponCodeInnerText=coponCodeInput.value
     if(coponCodeInnerText=='tanvir'){
         const finalTotal=document.getElementById('final-total')
         const finalTotalInnerText=finalTotal.innerText
         const finalTotalParseInt=parseInt(finalTotalInnerText)
         finalTotal.innerText=finalTotalParseInt-100
     }  
 })

