const container = document.querySelector(".container");
const allDivs = document.querySelectorAll(".squere");
let counter = 0;
let flag = 0;


// renderuje gre oraz tworzy nam mechanizm dodawania znakow 
function renderGame () {
    
    allDivs.forEach((pool) => {
        pool.textContent = "";
        pool.id = `s+${counter}`;
        counter++;
        pool.addEventListener("click", () => {

            if(flag%2 === 0) {
                pool.textContent = "X";
                flag++
            } else {
                pool.textContent = "0";
                flag++
            }
        })
        
    });
}
document.getElementById("btn").addEventListener("click", renderGame);



// Do zrobienia logika gry tzn. kiedy sie wygrywa 
// Naprawic blad (mozna zmienic znak podczas gry);