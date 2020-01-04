{
    class Game {
        constructor() {
            this.world = new World();
            this.gameFunctionality = new GameFunctionality(this.world.canvasCubes);

            document.getElementById("btn").addEventListener("click", () => {
                const startShow = document.querySelector(".start-show");
                startShow.innerHTML = "ENJOY THE GAME";
                const imgDiv = document.querySelector(".img-div");
                imgDiv.style.visibility = "visible";
                setTimeout(() => {
                    startShow.innerHTML = "";
                    imgDiv.style.visibility = "hidden";
                }, 3000)
                this.world.clearWorld();
                this.world = new World();
            });
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

        clearWorld() {
            this.canvas.innerHTML = '';
        }
    }

    class GameFunctionality {
        constructor(canvasCubes) {
            this.canvasCubes = canvasCubes;
            // this.toolAxe = document.querySelector(".axe");
            // this.toolPickaxe = document.querySelector(".pickaxe");
            // this.toolShovel = document.querySelector(".shovel");
            this.inventory = document.querySelector(".inventory");
            this.board = document.querySelector(".board");
            this.tools = document.querySelectorAll(".toolbox");
            this.arrOfTools = [...this.tools];
            for (const tool of this.arrOfTools) {
                tool.addEventListener("mousedown", e => {
                    let classesOfBoard = this.board.className.split(" ");
                    if (classesOfBoard.length > 1) {
                        this.board.classList.remove(classesOfBoard.pop())
                    }
                    let classOfClickedTool = e.target.className.split(" ").pop();
                    this.board.classList.add(classOfClickedTool + "s");
                    switch (classOfClickedTool) {
                        case 'axe':
                            this.minewood();
                            break;
                        case 'pickaxe':
                            this.minerock();
                            break;
                        case 'shovel':
                            this.mineground();
                            break;
                    }
                    // this.mine(classOfClickedTool)
                });
            }

            this.axeboolean = false
            this.pickaxeboolean = false
            this.shovelboolean = false
                // this.bindOptions();
            this.inventory.addEventListener("click", this.takeFromInventory(event));
        }


        // mine() {

        // const axe = document.querySelector(".axe");
        // this.toolAxe.addEventListener("click", this.minewood());
        // const pickaxe = document.querySelector(".pickaxe");
        // this.toolPickaxe.addEventListener("click", this.minerock());
        // const shovel = document.querySelector(".shovel");
        // this.toolShovel.addEventListener("click", this.mineground());
        // const inventory = document.querySelector(".inventory");
        // }
        // bindOptions() {}

        minewood() {
            this.axeboolean = true;
            this.pickaxeboolean = false;
            this.shovelboolean = false;
            console.log(this.axeboolean);
            console.log(this.canvasCubes);



            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].addEventListener("click", this.changeClass(event));
                }
            }
        }

        minerock() {
            this.axeboolean = false;
            this.pickaxeboolean = true;
            this.shovelboolean = false;

            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].addEventListener("click", this.changeClass(event));
                }
            }
        }

        mineground() {
            this.axeboolean = false;
            this.pickaxeboolean = false;
            this.shovelboolean = true;

            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].addEventListener("click", this.changeClass(event));


                }
            }
        }

        changeClass(event) {

            this.inventory.setAttribute("class", "inventory");
            if (this.axeboolean === true) {
                event.target.classList.remove("wood");
                event.target.classList.remove("tree");
                // for (let i = 1; i < this.inventory.classList.length; i++) {
                // this.inventory.classList.remove("rock");
                // this.inventory.classList.remove("ground");
                // this.inventory.classList.remove("grass");
                // }
                this.inventory.classList.add("tree");
            } else if (this.pickaxeboolean === true) {
                event.target.classList.remove("rock");
                // for (let i = 1; i < this.inventory.classList.length; i++) {
                //     this.inventory.classList.remove("tree")
                //     this.inventory.classList.remove("ground")
                // }
                this.inventory.classList.add("rock")
            } else if (this.shovelboolean === true) {
                event.target.classList.remove("ground");
                event.target.classList.remove("grass");
                // for (let i = 1; i < this.inventory.classList.length; i++) {
                //     this.inventory.classList.remove("tree")
                //     this.inventory.classList.remove("rock")
                // }
                this.inventory.classList.add("ground")
            }
        }


        takeFromInventory(event) {
                // const inInventory = event.target.classList.value.split(" ")[1];
                // for (let i = 0; i < 20; i++) {
                //     for (let j = 0; j < 20; j++) {
                //         this.world.canvasCubes[i][j].addEventListener("click", build);


                //     }
                // }


            }
            // mine();
    }

    const clock = document.querySelector('.clock');
    window.setInterval(() => {
                const x = new Date();
                const hour = x.getHours();
                const minute = x.getMinutes();
                const second = x.getSeconds();
                clock.innerHTML = `${hour<10?`0${hour}`:hour}:${minute<10?`0${minute}`:minute}:${second<10?`0${second}`:second}`;
    }, 1000);

    const startGame = document.getElementById('main-start');
    const introDiv = document.querySelector('.intro-page');
    const gameDiv = document.querySelector('.game');
    startGame.addEventListener('click', () => {
        introDiv.classList.add('hide');
        gameDiv.classList.remove('hide');
        new Game();
    });
}