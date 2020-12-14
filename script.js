const container = document.querySelector(".container");
const allDivs = document.querySelectorAll(".squere");
// const createSquare =  document.createElement('div');
let counter = 0;

console.log(container);
// iteruje nam wszystkie divy trzeba dodac data
allDivs.forEach((pool) => {
    pool.id = `s+${counter}`;
    counter++;
});

function writeSign(){
    console.log('dziala')
}

allDivs.forEach.addEventListener("click", writeSign);
//1 Zrobic funkcjie ktora ta data base z id zeby mozna bylo identyfikowac pola 

//2 Zrobic obsluge tych pol za pomoca eventListener i ustwic go na click

//3 zroobic logike ktora raz jest x a raz 0 

// 4 Zrobic logike aby ten kto da 3 x albo 3 0 ten wygrywa zza pomoca instrukcji warunkowych 
