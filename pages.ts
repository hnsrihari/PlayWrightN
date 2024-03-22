// Defining class
class Inventory
{
    title:string;//declaring title as string
    author:string;
    id: number;
    category: string;
    price:number;
    quantity: number;

    constructor(title: string, author:string, id:number, category:string, price: number, quantity:number)
    {
        this.title=title;//assigning the values to constructor defined in the class
        this.author=author;
        this.id=id;
        this.category=category;
        this.price=price;
        this.quantity=quantity;
    };
};
const inven:Inventory[]=[//giving array of constructor vlues 
    new Inventory("Gullivers travells","xyx",25,"advanture",400,5),
    new Inventory("Time Travels","xyx",25,"advanture",400,8)
];
inven.push(new Inventory("Gullivers travells","xyx",26,"History",400,5));//adding a new array
inven.pop();//closing the latest given array
//Update
const id=25;//updating a value equal to 25
for(let i=0;i<inven.length;i++)

{
    if(inven[i].id==id)
    {
        inven[i].quantity=200;
    }
};
const cat="fantasy";
let j=0;
for(let i=0;i<inven.length;i++)
{
    if(inven[i].category==cat)
    {
        console.log(inven[i]);
        j++;
    }
    
};
if(j==0)
{
    console.log('Category not exists');
}
const title="Time Travels";
for (let i=0;i<inven.length;i++)
{
    if(inven[i].title==title)
    {
        inven[i].quantity+=1;
    }
}
console.log(inven);
