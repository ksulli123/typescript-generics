//classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const inv = new Invoice('mario', 'work on mario website', 250);
const inv2 = new Invoice('luigi', 'work on luigi website', 350);

let invoices: Invoice[] = [];
invoices.push(inv);
invoices.push(inv2);

inv.client = 'yoshi';
inv2.amount = 400;

const anchor = document.querySelector('a')!;

// if (anchor?.href){
//     console.log(anchor?.href);
// }

console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})