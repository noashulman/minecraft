class Game {
    constructor() {
        this.world = new World();

        this.toolAxe = document.querySelector(".axe");
        this.toolPickaxe = document.querySelector(".pickaxe");
        this.toolShovel = document.querySelector(".shovel");
        const board = document.querySelector(".board");
        this.tools = document.querySelectorAll(".toolbox");
        this.arrOfTools = [...this.tools];
        this.arrOfTools.map(tool => {
            tool.addEventListener("mousedown", function(e) {
                let classesOfBoard = board.className.split(" ");
                if (classesOfBoard.length > 1) {
                    board.classList.remove(classesOfBoard.pop())
                }
                let classOfClickedTool = e.target.className.split(" ").pop();
                board.classList.add(classOfClickedTool + "s");
                let minableCubes = [];
            });
        });
    }

    mineResource(event) {
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {

            }

        }
    }

}


class World {
    constructor() {
        this.canvas = document.querySelector(".canvas");
        this.canvasCubes = [];

        const canvas = document.querySelector(".canvas");
        const canvasCubes = [];
        for (let i = 0; i < 20; i++) {
            canvasCubes.push([]);
            const row = document.createElement("div");
            row.classList.add("row")
            for (let j = 0; j < 20; j++) {
                const cube = document.createElement("div");
                cube.classList.add("cube");
                cube.setAttribute("id", `${i}-${j}`);
                row.appendChild(cube);
                canvasCubes[i].push(cube);
            }

            canvas.appendChild(row);
        }

        for (let i = 15; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].classList.add("ground");
            }
        }

        for (let i = 14; i < 15; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].classList.add("grass");
            }
        }

        for (let i = 11; i < 14; i++) {
            for (let j = 16; j < 17; j++) {
                canvasCubes[i][j].classList.add("wood");
            }

        }
        for (let i = 8; i < 11; i++) {
            for (let j = 15; j < 18; j++) {
                canvasCubes[i][j].classList.add("tree");
            }

        }

        for (let i = 9; i < 10; i++) {
            for (let j = 14; j < 19; j++) {
                canvasCubes[i][j].classList.add("tree");
            }

        }

        for (let i = 13; i < 14; i++) {
            for (let j = 0; j < 5; j++) {
                canvasCubes[i][j].classList.add("rock");
            }
        }
        for (let i = 12; i < 13; i++) {
            for (let j = 0; j < 3; j++) {
                canvasCubes[i][j].classList.add("rock");
            }
        }
    }
}


const startGame = document.getElementById('main-start');
const introDiv = document.querySelector('.intro-page');
const gameDiv = document.querySelector('.game');
startGame.addEventListener('click', () => {
    introDiv.classList.add('hide');
    gameDiv.classList.remove('hide');
    new Game();
});