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


    function minewood() {
        const axe = document.querySelector(".axe");
        axe.addEventListener("click", minewood2);

    }
    function minewood2() {
        console.log("hello");

        for (let i = 0; i < 20; i++) {
            for (let j = 0; j < 20; j++) {
                canvasCubes[i][j].addEventListener("click", changeClass);


            }
        }
    }

    function changeClass(event) {
            console.log(event.target.class);
        if (event.target.class ==="wood" || event.target.class==="tree"){
            
            
            event.target.classList.remove("wood")
            event.target.classList.remove("tree")
        }
    }

    minewood();
}



