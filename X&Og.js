var P1 = "X";
var P2 = "O";

$(document).ready(function() {
  const b = [ [" ", " ", " "], 
              [" ", " ", " "], 
              [" ", " ", " "]];

function isGameOver() {
  for (var i = 0; i < 3; i++) {
    if ((b[i][0] !== " ") && 
      (b[i][0] === b[i][1]) && 
      (b[i][0] === b[i][2])) {
      return b[i][0];
    }
  } //row

  for (var j = 0; j < 3; j++) {
    if ((b[0][j] !== " ") && 
      (b[0][j] === b[1][j]) && 
      (b[0][j] === b[2][j])) {
      return b[0][j];
    }
  } //col

  if ((b[0][0] !== " " )&& 
    (b[0][0] === b[1][1]) && 
    (b[0][0] === b[2][2])) {
    return b[0][0]/*dgp*/
  } else if ((b[0][2] !== " ") && 
    (b[0][2] === b[1][1]) &&
    ( b[0][2] === b[2][0])) {
    return b[0][2];
  } //dgs

  
  for(var i=0;i<3;i++)
  {
  	for(var j=0;j<3;j++)
  	{
  		if (b[i][j]===" ")
  		{
  			return false;
  		}
  	}
  }

  return null;
}


function AI()
{
for(var i=0;i<3;i++)
  {
    for(var j=0;j<3;j++)
    {
      if (b[i][j]===" ")
      {
        return {

          i: i,
          j: j

        };
      }
    }
  }
  return null;
}

function gameOver()
{
    alert(isGameOver() + "-won");
}

function playComputerTurn()
{
  var coordinates = AI();
  b[coordinates.i][coordinates.j]=P2;
  $(".col[data-i=" + coordinates.i + "][data-j=" + coordinates.j + "]").html(P2);
  // play the move
}

  $(".col").click(function() {
    $(this).html(P1);
    const i = $(this).data('i');
    const j = $(this).data('j');
    b[i][j] = P1;

    if(!isGameOver())
    {
      playComputerTurn();
      if(isGameOver())
        {
          gameOver();
        }
    }
    else {
       gameOver();
    }
  });
});

