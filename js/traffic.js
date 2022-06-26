const card = document.getElementById('card')
const cardone = document.getElementById('cardone')
const cardtwo = document.getElementById('cardtwo')
const cardthree = document.getElementById('cardthree')
const cardfour = document.getElementById('cardfour')
const cardfifte = document.getElementById('cardfifte')
const cardsex = document.getElementById('cardsex')
const oneBtn = document.getElementById('changeone')
const twoBtn = document.getElementById('changetwo')
const threeBtn = document.getElementById('changethree')
const fourBtn = document.getElementById('changefour')
const fifteBtn = document.getElementById('changefifte')
const sexBtn = document.getElementById('changesex')
const sevenBtn = document.getElementById('changeseven')
const eightBtn = document.getElementById('changeeight')
const nineBtn = document.getElementById('changenine')
const tenBtn = document.getElementById('changeten')
const elevenBtn = document.getElementById('changeeleven')
const twelveBtn = document.getElementById('changetwelve')
const threetenBtn = document.getElementById('changethreeten')
const fourtenBtn = document.getElementById('changefourten')


oneBtn.addEventListener('click', ()=>{
    card.classList.toggle('card--flipped') 
})
twoBtn.addEventListener('click', ()=>{
    card.classList.toggle('card--flipped')
})
threeBtn.addEventListener('click', ()=>{
    cardone.classList.toggle('card--flipped')
   
})
fourBtn.addEventListener('click', ()=>{
    cardone.classList.toggle('card--flipped')
})
fifteBtn.addEventListener('click', ()=>{
    cardtwo.classList.toggle('card--flipped')
   
})
sexBtn.addEventListener('click', ()=>{
    cardtwo.classList.toggle('card--flipped')
})
sevenBtn.addEventListener('click', ()=>{
    cardthree.classList.toggle('card--flipped')
   
})
eightBtn.addEventListener('click', ()=>{
    cardthree.classList.toggle('card--flipped')
})
nineBtn.addEventListener('click', ()=>{
    cardfour.classList.toggle('card--flipped')
   
})
tenBtn.addEventListener('click', ()=>{
    cardfour.classList.toggle('card--flipped')
})
elevenBtn.addEventListener('click', ()=>{
    cardfifte.classList.toggle('card--flipped')  
})
twelveBtn.addEventListener('click', ()=>{
    cardfifte.classList.toggle('card--flipped')
})
threetenBtn.addEventListener('click', ()=>{
    cardsex.classList.toggle('card--flipped')  
})
fourtenBtn.addEventListener('click', ()=>{
    cardsex.classList.toggle('card--flipped')
})