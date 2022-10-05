import numberA from './a.js'
import numberB from './b.js'
import numberC from './c.js'
console.log('numberA: ',numberA);
console.log('numberB: ',numberB);
console.log('numberC: ',numberC);

const $buttonA = document.querySelector('#button_a');
const $buttonB = document.querySelector('#button_b');
const $buttonC = document.querySelector('#button_c');
const $display = document.querySelector('#display');

$buttonA.addEventListener('click',function(){
    $display.textContent=numberA
})
$buttonB.addEventListener('click',function(){
    $display.textContent=numberB
})
$buttonC.addEventListener('click',function(){
    $display.textContent=numberC
})