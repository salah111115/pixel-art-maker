
// When size is submitted by the user, call makeGrid()
document.getElementById("sizePicker").addEventListener("submit", function(e){ 
    //do something
   e.preventDefault();
   makeGrid();
});
function makeGrid() {
const oldTable = document.getElementById('pixelCanvas').firstElementChild;
if(oldTable != null)
    oldTable.remove();

const fragment = document.createDocumentFragment();
// Select size input
let height   =    document.getElementById('inputHeight').value;
let Width    =    document.getElementById('inputWidth').value;
let table    =    document.getElementById('pixelCanvas');

fragment.appendChild(table); 
let tbody = document.createElement('tbody'); 
for (let i = 0; i<height; i++) { 
    let tr = document.createElement('tr'); 
    tbody.appendChild(tr);
    for (let j = 0; j<Width; j++) {
        let tdElement = document.createElement('td');
        tdElement.setAttribute("onclick", "addColor(this)"); 
        tdElement.setAttribute("ondblclick", "removeColor(this)"); 
        tr.appendChild(tdElement); 
    }
}
table.appendChild(tbody); 
document.body.appendChild(fragment); // reflow and repaint here -- once!


}

// Select color input
function addColor(myColor) {
    myColor.style.backgroundColor = document.getElementById('colorPicker').value;    
}
function removeColor(myColor) {
    myColor.style.backgroundColor = "white";    
}