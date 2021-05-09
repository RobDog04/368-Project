//pulling in variables from the html file.
//the rows and cells can be quickly pulled using the defined elements
var rowT = document.getElementsByTagName('tr');
var cellT = document.getElementsByTagName('td');
var holeT = document.querySelector('.hole');
//there are 2 players, one with red and one with blue cells
var crimsonPlayer = 'red';
var bluePlayer = 'blue';
var counter = 0;
var counter2 = 0;
//const reset = document.querySelector('.reset');

//first we need to set up a click event listener.
//in class we used a method that is hard to implement when there are many cells

//this is important to actually get coordinates for win detection
for (i = 0; i < 42; i ++){
    //passing in function as seen in class
    cellT[i].addEventListener('click', (f) =>{
        console.log(`${f.target.parentElement.rowIndex},${f.target.cellIndex}`)});
};


Array.prototype.forEach.call(cellT, (cell) => 
{
    cell.addEventListener('click', fillHole);
    cell.style.backgroundColor = 'white';
});

//to obtain victory the holes need to be filled, this function aims to do that
function fillHole(f)
{ 
  let col = f.target.cellIndex;//input from event listener
  let row = [];//general since we are pushing down to bottom row avaiable
  
  for(let i=5; i>= 0;i--)
  {
     if (rowT[i].children[col].style.backgroundColor == 'white')
     {
      row.push(rowT[i].children[col]);//pushes to bottom
      if(counter%2 == 0)
      {
        row[0].style.backgroundColor = 'red';
        return counter++;
      }
      else(counter%2 == 1)
      {
        row[0].style.backgroundColor = 'blue';
        return counter++;
      }
    const columnNum = f.target.cellIndex;
    //const rowNum = f.target.parentElement.rowIndex;
    const rowNum = row.push(rowT[i].children[col]);
    if (victoryDetection(columnNum, rowNum)) 
    {
      counter2++;
    }

    }
    if(counter2 = 2)
    {
      alert("someone won!")
    }
   
  }
}


function victoryDetection(col, row) {
  const element = rowT[row].children[col];
  const color = element.style.backgroundColor;

  // check the left
  let numSameColorLeft = 0;
  while (
    hole(row, col - (numSameColorLeft + 1)) &&
    hole(row, col - (numSameColorLeft + 1)).style.backgroundColor === color
  ) {
    numSameColorLeft += 1;
  }
  // check the right
  let numSameColorRight = 0;
  while (
    hole(row, col + (numSameColorRight + 1)) &&
    hole(row, col + (numSameColorRight + 1)).style.backgroundColor === color
  ) {
    numSameColorRight += 1;
  }
  if (numSameColorLeft + numSameColorRight + 1 >= 4) {
    return true;
  }

  // check above
  let numSameColorAbove = 0;
  while (
    hole(row - (numSameColorAbove + 1), col) &&
    hole(row - (numSameColorAbove + 1), col).style.backgroundColor === color
  ) {
    numSameColorAbove += 1;
  }
  // check below
  let numSameColorBelow = 0;
  while (
    hole(row + (numSameColorBelow + 1), col) &&
    hole(row + (numSameColorBelow + 1), col).style.backgroundColor === color
  ) {
    numSameColorBelow += 1;
  }
  if (numSameColorAbove + numSameColorBelow + 1 >= 4) {
    return true;
  }

  // check top left
  let numSameColorTopLeft = 0;
  while (
    hole(row - (numSameColorTopLeft + 1), col - (numSameColorTopLeft + 1)) &&
    hole(row - (numSameColorTopLeft + 1), col - (numSameColorTopLeft + 1)).style.backgroundColor === color
  ) {
    numSameColorTopLeft += 1;
  }
  // check bottom right
  let numSameColorBottomRight = 0;
  while (
    hole(row + (numSameColorBottomRight + 1), col + (numSameColorBottomRight + 1)) &&
    hole(row + (numSameColorBottomRight + 1), col + (numSameColorBottomRight + 1)).style.backgroundColor === color
  ) {
    numSameColorBottomRight += 1;
  }
  if (numSameColorTopLeft + numSameColorBottomRight + 1 >= 4) {
    return true;
  }

  // check top right
  let numSameColorTopRight = 0;
  while (
    hole(row - (numSameColorTopRight + 1), col + (numSameColorTopRight + 1)) &&
    hole(row - (numSameColorTopRight + 1), col + (numSameColorTopRight + 1)).style.backgroundColor === color
  ) {
    numSameColorTopRight += 1;
  }
  // check bottom left
  let numSameColorBottomLeft = 0;
  while (
    hole(row + (numSameColorBottomLeft + 1), col - (numSameColorBottomLeft + 1)) &&
    hole(row + (numSameColorBottomLeft + 1), col - (numSameColorBottomLeft + 1)).style.backgroundColor === color
  ) {
    numSameColorBottomLeft += 1;
  }
  if (numSameColorTopRight + numSameColorBottomLeft + 1 >= 4) {
    return true;
  }
  
  return false;
}

function hole(row, column) {
  return rowT[row].children[column];
}



 