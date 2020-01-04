{
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
    })

    const canvas = document.querySelector(".canvas");
    let canvasCubes = [];

    function createWorld() {
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
    createWorld();

    document.getElementById("btn").addEventListener("click", () => {
        const startShow = document.querySelector(".start-show");
        startShow.innerHTML = "ENJOY THE GAME";
        const imgDiv = document.querySelector(".img-div");
        imgDiv.style.visibility = "visible";
        setTimeout(() => {
            startShow.innerHTML = "";
            imgDiv.style.visibility = "hidden";
        }, 3000)
        canvas.innerHTML = '';
        canvasCubes = [];
        inventory.setAttribute("class", "inventory");
        board.setAttribute("class", "board");
        createWorld();
    });

    const board = document.querySelector(".board");
    const tools = document.querySelectorAll(".toolbox");
    const arrOfTools = [...tools];

    function initToolsListeners() {
        for (const tool of arrOfTools) {
            tool.addEventListener("mousedown", e => {
                let classesOfBoard = board.className.split(" ");
                if (classesOfBoard.length > 1) {
                    board.classList.remove(classesOfBoard.pop())
                }
                let classOfClickedTool = e.target.className.split(" ").pop();
                board.classList.add(classOfClickedTool + "s");
                switch (classOfClickedTool) {
                    case 'axe':
                        minewood();
                        break;
                    case 'pickaxe':
                        minerock();
                        break;
                    case 'shovel':
                        mineground();
                        break;
                }
                for (let i = 0; i < 20; i++) {
                    for (let j = 0; j < 20; j++) {
                        canvasCubes[i][j].addEventListener("click", changeClass);
                    }
                }
            });
        }
    }
    initToolsListeners();

    let axeboolean = false
    let pickaxeboolean = false
    let shovelboolean = false

    const inventory = document.querySelector(".inventory");
    inventory.addEventListener("click", takeFromInventory);

    // function mine() {
    //     const axe = document.querySelector(".axe");
    //     axe.addEventListener("click", minewood);

    //     const pickaxe = document.querySelector(".pickaxe");
    //     pickaxe.addEventListener("click", minerock);

    //     const shovel = document.querySelector(".shovel");
    //     shovel.addEventListener("click", mineground);
    // }

    function minewood() {
        axeboolean = true;
        pickaxeboolean = false;
        shovelboolean = false;

        // for (let i = 0; i < 20; i++) {
        //     for (let j = 0; j < 20; j++) {
        //         canvasCubes[i][j].addEventListener("click", changeClass);


        //     }
        // }
    }

    function minerock() {
        axeboolean = false;
        pickaxeboolean = true;
        shovelboolean = false;

        // for (let i = 0; i < 20; i++) {
        //     for (let j = 0; j < 20; j++) {
        //         canvasCubes[i][j].addEventListener("click", changeClass);


        //     }
        // }
    }

    function mineground() {
        axeboolean = false;
        pickaxeboolean = false;
        shovelboolean = true;

        // for (let i = 0; i < 20; i++) {
        //     for (let j = 0; j < 20; j++) {
        //         canvasCubes[i][j].addEventListener("click", changeClass);


        //     }
        // }
    }

    function changeClass(event) {
        inventory.setAttribute("class", "inventory");
        if (axeboolean === true) {
            event.target.classList.remove("wood");
            event.target.classList.remove("tree");
            // for (i = 1; i < inventory.classList.length; i++) {
            //     inventory.classList.remove("rock")
            //     inventory.classList.remove("ground")
            // }
            inventory.classList.add("tree")
        } else if (pickaxeboolean === true) {
            event.target.classList.remove("rock");
            // for (i = 1; i < inventory.classList.length; i++) {
            //     inventory.classList.remove("tree")
            //     inventory.classList.remove("ground")
            // }
            inventory.classList.add("rock")
        } else if (shovelboolean === true) {
            event.target.classList.remove("ground");
            event.target.classList.remove("grass");
            // for (i = 1; i < inventory.classList.length; i++) {
            //     inventory.classList.remove("tree")
            //     inventory.classList.remove("rock")
            // }
            inventory.classList.add("ground")
        }
    }


    function takeFromInventory(event) {
        // const inInventory = event.target.classList.value.split(" ")[1];
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].addEventListener("click", build);


            }
        }
        

    }
    
    function build (event){
        for (let i=0; i<1; i++){
        event.target.classList.add (`${inventory.classList.value.split(" ")[1]}`);
        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].removeEventListener("click", build);


            }
        }
        }
    }
}