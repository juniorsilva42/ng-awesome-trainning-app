var p = document.createElement('p');
var hello: string = 'Olá mundo!';
p.textContent = hello;
document.appendChild(p);

// Tipos de variáveis
var num: number = 10;
var bool: boolean = true;
var texto: string = 'olá';
var texto2: string = "olá";
var text3: string = `${texto}, hehehe`;

// Funções
function myfunc():void {
}

function add(v1: number, v2: number, v3?:number): number {

    if(v3 !== undefined)
        return v1+v2+v3;
    
    return v1 + v2; 
}

function add2(value1: any, value2: any, value3?: string): any {
}

let sum = (x,y) => {
    return x + y;
};

let load = () => {
    return 'load';
}

// Estruturas de controle
if (bool !== null){
}

if (bool !== undefined){
}

// Escopo (let vs var) 
if (bool){
    let i: number;
    for(i = 0; i < 3; i++){
        console.log(i);
    }
}

// Listas
let list: number[] = [1,2,3]; // Comum 
let list2: Array<number> = [1,2,3]; // Generic
let list3: [string, number]; // Tuple
list3 = ['junior', 18];

// Enumerações. Tipos "próprios, especias". Semelhante ao Struct em C
enum Day{Monday = 2, Tuesday = 3}
let day: Day = Day.Monday;
console.log(`day: ${day} | ${Day.Tuesday}`);
console.log(`key value of enum: ${Day[0]} | ${Day[1]}`);

// ----------------------------------------------------------------------------------

// Interfaces
function printName (person: {name: string}){
    console.log(person.name);
}

let obj = {name: "Jr Silva", age: 19};
let obj12 = {age: 20};

printName(obj);

interface PersonInterface {
    name: string;
}
interface EmployeeInterface extends PersonInterface {
    salario: number;
}

let person2: PersonInterface = {name: "Jr"};
let employee: EmployeeInterface = {name: "Jr", salario: 1500};
printName(person2);
printName(employee);

// Interfaces
function printName2 (person: PersonInterface){
    console.log(person.name);
}