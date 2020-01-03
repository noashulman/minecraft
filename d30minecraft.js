{
    
    
        function minewood() {
            const axe = document.querySelector(".axe");
            axe.addEventListener("click", mine);
            
        }
        function mine() {
            console.log("hello");
            
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    World.this.canvasCubes[i][j].addEventListener("click", changeClass);
                    this.changeClass();
                    console.log ("hi")
                }
            }
        }

        function changeClass(){
            

        }
          
        minewood()
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    class Game {
        constructor() {
            this.world = new World();
        }
 
    }     

               

    class World {
        constructor() {
            this.canvas = document.querySelector(".canvas");
            this.canvasCubes = [];

            for (let i = 0; i < 20; i++) {
                this.canvasCubes.push([]);
                const row = document.createElement("div");
                row.classList.add("row")
                for (let j = 0; j < 20; j++) {
                    const cube = document.createElement("div");
                    cube.classList.add("cube");
                    cube.setAttribute("id", `${i}-${j}`);
                    row.appendChild(cube);
                    this.canvasCubes[i].push(cube);
                }

                this.canvas.appendChild(row);
            }

            for (let i = 15; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].classList.add("ground");
                }
            }

            for (let i = 14; i < 15; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].classList.add("grass");
                }
            }

            for (let i = 11; i < 14; i++) {
                for (let j = 16; j < 17; j++) {
                    this.canvasCubes[i][j].classList.add("wood");
                }

            }
            for (let i = 8; i < 11; i++) {
                for (let j = 15; j < 18; j++) {
                    this.canvasCubes[i][j].classList.add("tree");
                }

            }

            for (let i = 9; i < 10; i++) {
                for (let j = 14; j < 19; j++) {
                    this.canvasCubes[i][j].classList.add("tree");
                }

            }

            for (let i = 13; i < 14; i++) {
                for (let j = 0; j < 5; j++) {
                    this.canvasCubes[i][j].classList.add("rock");
                }
            }
            for (let i = 12; i < 13; i++) {
                for (let j = 0; j < 3; j++) {
                    this.canvasCubes[i][j].classList.add("rock");
                }
            }



        }

        someFunc(someParam) {

        }

    }
    new Game();
}