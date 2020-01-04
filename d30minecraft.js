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
                this.gameFunctionality = new GameFunctionality(this.world.canvasCubes);
                this.gameFunctionality.inventory.setAttribute('class', 'inventory');
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
            this.inventory = document.querySelector(".inventory");
            this.board = document.querySelector(".board");
            this.tools = document.querySelectorAll(".toolbox");
            this.invStore = [];
            this.arrOfTools = [...this.tools];
            for (const tool of this.arrOfTools) {
                tool.addEventListener("mousedown", e => {
                    for (let i = 0; i < 20; i++) {
                        for (let j = 0; j < 20; j++) {
                            this.canvasCubes[i][j].removeEventListener('mousedown', this.buildCube);
                        }
                    }
                    let classesOfBoard = this.board.className.split(" ");
                    if (classesOfBoard.length > 1) {
                        this.board.classList.remove(classesOfBoard.pop())
                    }
                    let classOfClickedTool = e.target.className.split(" ").pop();
                    this.board.classList.add(classOfClickedTool + "s");
                    switch (classOfClickedTool) {
                        case 'axe':
                            this.mineWood();
                            break;
                        case 'pickaxe':
                            this.mineRock();
                            break;
                        case 'shovel':
                            this.mineGround();
                            break;
                    }
                });
                this.inventory.addEventListener("mousedown", this.takeFromInventory);
            }
        }


        mineCube = (event) => {
            console.log(event.target);
            console.log(this.inventory);
            this.inventory.setAttribute('class', 'inventory');
            let classOfCube = [...event.target.classList].pop();
            classOfCube === 'wood' ? classOfCube = 'tree' : classOfCube === 'grass' ? classOfCube = 'ground' : null;
            this.invStore.push(classOfCube);
            console.log(this.invStore);
            event.target.setAttribute('class', 'cube');
            this.inventory.classList.add(classOfCube);
        }

        mineWood() {
            let cubesNotWood = [];
            let woodCubes = [];
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    const classesOfCube = [...this.canvasCubes[i][j].classList]
                    if (classesOfCube.includes('wood') || classesOfCube.includes('tree')) {
                        woodCubes.push(this.canvasCubes[i][j]);
                    } else {
                        cubesNotWood.push(this.canvasCubes[i][j]);
                    }
                }
            }

            cubesNotWood.map(cube => {
                cube.removeEventListener('mousedown', this.mineCube);
            });

            woodCubes.map(woodCube => {
                woodCube.addEventListener('mousedown', this.mineCube);
            });
        }

        mineRock() {
            let cubesNotRock = [];
            let rockCubes = [];
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    const classesOfCube = [...this.canvasCubes[i][j].classList]
                    if (classesOfCube.includes('rock')) {
                        rockCubes.push(this.canvasCubes[i][j]);
                    } else {
                        cubesNotRock.push(this.canvasCubes[i][j]);
                    }
                }
            }

            cubesNotRock.map(cube => {
                cube.removeEventListener('mousedown', this.mineCube);
            });

            rockCubes.map(rockCube => {
                rockCube.addEventListener('mousedown', this.mineCube);
            });
        }

        mineGround() {
            let cubesNotGround = [];
            let groundCubes = [];
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    const classesOfCube = [...this.canvasCubes[i][j].classList]
                    if (classesOfCube.includes('ground') || classesOfCube.includes('grass')) {
                        groundCubes.push(this.canvasCubes[i][j]);
                    } else {
                        cubesNotGround.push(this.canvasCubes[i][j]);
                    }
                }
            }

            cubesNotGround.map(cube => {
                cube.removeEventListener('mousedown', this.mineCube);
            });

            groundCubes.map(groundCube => {
                groundCube.addEventListener('mousedown', this.mineCube);
            });
        }

        takeFromInventory = () => {
            this.inventory.setAttribute('class', `inventory ${this.invStore[this.invStore.length-1]}`);
            console.log(this.invStore);

            const freeCubes = [];
            const occupiedCubes = [];
            for (let i = 0; i < 20; i++) {
                for (let j = 0; j < 20; j++) {
                    this.canvasCubes[i][j].removeEventListener('mousedown', this.mineCube);
                    const classesOfCube = [...this.canvasCubes[i][j].classList]
                    if (classesOfCube.includes('wood') || classesOfCube.includes('tree') || classesOfCube.includes('ground') || classesOfCube.includes('grass') || classesOfCube.includes('rock')) {
                        occupiedCubes.push(this.canvasCubes[i][j]);
                    } else {
                        freeCubes.push(this.canvasCubes[i][j]);
                    }
                }
            }
            console.log(freeCubes);

            freeCubes.map(freeCube => {
                freeCube.addEventListener('mousedown', this.buildCube);
            });
        }

        buildCube = (event) => {
            while ([...this.inventory.classList].length > 1) {
                console.log(this.invStore);
                if ([...event.target.classList].length === 1) {
                    const classToCube = this.invStore.pop();
                    event.target.classList.add(classToCube);
                    this.inventory.setAttribute('class', `inventory ${this.invStore[this.invStore.length-1]}`);
                    console.log(this.invStore);
                    break;
                }
            }
            if (this.invStore.length == 0) {
                this.inventory.setAttribute('class', 'inventory');
            }
        }
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