//To get access of the div
const billtotal =document.getElementById('amount')
const tiptotal =document.getElementById('tip')
const totalpeople=document.getElementById('people')
const totalperperson = document.getElementById('final')

//Converting the divtext into number
let numberofpeople = Number(totalpeople.innerText)
let finalamt = Number(totalperperson.innerText)

const CalculateBill = () => {
    let billamt = Number(billtotal.value)
    let tippercent = Number(tiptotal.value)
    tippercent = tippercent/100
    const tipAmount = billamt *tippercent
    const total = billamt + tipAmount
    totalperperson.innerText = (total / numberofpeople).toFixed(2)
}

const increasePeople =() =>{
    numberofpeople+=1
    totalpeople.innerText=numberofpeople
    CalculateBill()
}
const decreasePeople =() =>{
    if(numberofpeople > 1){
        numberofpeople-=1
        totalpeople.innerText=numberofpeople
        CalculateBill()
    }
}