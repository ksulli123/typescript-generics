import { Invoice } from './classes/Invoice.js';
const inv = new Invoice('mario', 'work on mario website', 250);
const inv2 = new Invoice('luigi', 'work on luigi website', 350);
let invoices = [];
invoices.push(inv);
invoices.push(inv2);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const anchor = document.querySelector('a');
// if (anchor?.href){
//     console.log(anchor?.href);
// }
console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
