{

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


    let axeboolean = false
    let pickaxeboolean = false
    let shovelboolean = false
    
    const inventory = document.querySelector(".inventory");
    inventory.addEventListener("click", build)
    
    function mine() {
        const axe = document.querySelector(".axe");
        axe.addEventListener("click", minewood);

        const pickaxe = document.querySelector(".pickaxe");
        pickaxe.addEventListener("click", minerock);

        const shovel = document.querySelector(".shovel");
        shovel.addEventListener("click", mineground);

        

    }
    function minewood() {
        axeboolean = true;
        pickaxeboolean = false;
        shovelboolean = false;

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].addEventListener("click", changeClass);


            }
        }
    }

    function minerock() {
        axeboolean = false;
        pickaxeboolean = true;
        shovelboolean = false;

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].addEventListener("click", changeClass);


            }
        }
    }

    function mineground() {
        axeboolean = false;
        pickaxeboolean = false;
        shovelboolean = true;

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].addEventListener("click", changeClass);


            }
        }
    }

    function changeClass(event) {

        if (axeboolean === true) {
                event.target.classList.remove("wood");
                event.target.classList.remove("tree");
                for (i=1; i<inventory.classList.length;i++){
                    inventory.classList.remove ("rock")
                    inventory.classList.remove ("ground")
                }
                inventory.classList.add ("tree")
        }

        else if (pickaxeboolean === true) {
                event.target.classList.remove("rock");
                for (i=1; i<inventory.classList.length;i++){
                    inventory.classList.remove ("tree")
                    inventory.classList.remove ("ground")
                }

                inventory.classList.add ("rock")
        }
        else if (shovelboolean === true) {
                event.target.classList.remove("ground");
                event.target.classList.remove("grass");
                for (i=1; i<inventory.classList.length;i++){
                    inventory.classList.remove ("tree")
                    inventory.classList.remove ("rock")
                }
                inventory.classList.add ("ground")
        }
    }


    function build (event) {
        console.log(event.target.classList.value.split(" ")[1]);
        
    }
    mine();
}



