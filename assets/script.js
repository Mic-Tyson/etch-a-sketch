const GRID_LENGTH = 16;

const gridContainer = document.querySelector(".grid-container");

const grid = new Array(GRID_LENGTH);
for(let i=0; i<GRID_LENGTH; ++i) {
    const rowSquare = document.createElement("div");
    rowSquare.id = `row-${i}`
    for(let j =0; j<GRID_LENGTH;++j) {
        const gridSquare = document.createElement("div");
        gridSquare.id = `square-(${i},${j})`;
        gridSquare.textContent=`(${i},${j})`;
        console.log(`${i}`);
        rowSquare.appendChild(gridSquare);
    }
    gridContainer.appendChild(rowSquare);
}
