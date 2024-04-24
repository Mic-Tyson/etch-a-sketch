let GRID_LENGTH = 64;
const PADDING_RATIO = 3;
const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
let paddingHeight = `${Math.round((viewportHeight/PADDING_RATIO)/GRID_LENGTH)}px`;
const gridContainerLength = (viewportHeight - paddingHeight)+ "px";

//-----------------------------------------------------------
// all slider values
const slider = document.querySelector(".slider");
const sliderText = document.querySelector(".slider-container > p");

gridSlider.addEventListener("input", () =>{
    sliderValue = parseInt(gridSlider.value);
    redrawBoard(sliderValue);
    
});
function updateSlider(){
    sliderText.textContent = `Resolution: (${GRID_LENGTH}x${GRID_LENGTH})`;
}
//-----------------------------------------------------------
//bounds within with grid will live
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.height = gridContainerLength;
gridContainer.style.width = gridContainerLength;
//-----------------------------------------------------------
// to allow the user to choose when they want to draw on the board
let mouseDown = false;
document.addEventListener("mousedown", () => mouseDown = true );
document.addEventListener("mouseup", () => mouseDown = false );

gridContainer.addEventListener("mouseover", (event) => {
    if (mouseDown && event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "black";
    }
});
//-----------------------------------------------------------
// create a 2d array within grid container to house the board
function drawBoard(GRID_LENGTH){
for(let i=0; i<GRID_LENGTH; ++i) {
    const rowSquare = document.createElement("div");
    rowSquare.classList.add("row");

    for(let j =0; j<GRID_LENGTH;++j) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        gridSquare.style.padding = paddingHeight;
        rowSquare.appendChild(gridSquare);
    }

    gridContainer.appendChild(rowSquare);
}
}
//-----------------------------------------------------------
function clearBoard(){
    gridContainer.innerHTML = "";
}

//-----------------------------------------------------------
function updatePadding(){
    paddingHeight = `${((viewportHeight/PADDING_RATIO)/GRID_LENGTH)}px`;
}
function redrawBoard(input){
    GRID_LENGTH = input;
    clearBoard();
    updatePadding();
    drawBoard(input);
    updateSlider();
}
//-----------------------------------------------------------
//int main(){
    redrawBoard(GRID_LENGTH);
//  return 0;
//}
