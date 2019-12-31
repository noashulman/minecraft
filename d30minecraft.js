const canvas = document.querySelector(".canvas");
const canvasCubes = [];
for (let i=0; i<20; i++){
    canvasCubes.push([]);
    const row = document.createElement("div");
    row.classList.add("row")
    for (let j=0;j<20; j++){
        const cube = document.createElement("div");
        cube.classList.add("cube");
        cube.setAttribute("id", `${i}-${j}`);
        row.appendChild(cube);
        canvasCubes[i].push(cube);
    } 
    
    canvas.appendChild(row);
}   

console.log(canvasCubes);