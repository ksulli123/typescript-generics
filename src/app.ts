//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){}

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}

const inv = new Invoice('mario', 'work on mario website', 250);
const inv2 = new Invoice('luigi', 'work on luigi website', 350);

let invoices: Invoice[] = [];
invoices.push(inv);
invoices.push(inv2);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
})

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