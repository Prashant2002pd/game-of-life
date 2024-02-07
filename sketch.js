
function Make2D(col,row){
  let arr=new Array(col);
  for (let i = 0; i < col ; i++) {
    arr[i]=new Array(row);
  }
  return arr;
}
let grid;
let col;
let row;
let resolution=10;

function countones(i,j){
  let  cnt=0;
  // for(let k=i-1;k<=i+1;k++){
  //    for(let l=j-1;l<=j+1;l++){
  //       cnt+=grid[k][l];
  //    }
  //   }
  //   cnt-=grid[i][j];

  for(let k=i-1;k<=i+1;k++){
    for(let l=j-1;l<=j+1;l++){
      if(k<0 || l<0 || k>grid.length-1 || l>grid[0].length-1){
        continue;
    }else if(grid[k][l]==1 && (k!=i || l!=j)){
        cnt++;
    }
    }
  }
  return cnt;
}

function change(grid){
  let temp=Make2D(col,row)
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
     
          let count=countones(i,j);
      
      if((count<2 || count>3) && grid[i][j]==1){
        temp[i][j]==0;
      }else if(count==3){
        temp[i][j]=1;
      }else{
        temp[i][j]=grid[i][j];
      }

        

      
    }

  }
  return temp;
  
}


function setup() {
  frameRate(5);
  createCanvas(600, 600);
  col=width/resolution;
  row=height/resolution;
  grid=Make2D(col, row);
  for(let i=0;i<col;i++){
    for(let j=0;j<row;j++){
      grid[i][j]=floor(random(2));

    }
  }
  
}

function draw() {
  background(0);
  for(let i=0;i<col;i++){
    for(let j=0;j<row;j++){
      let x=i*resolution;
      let y=j*resolution;
      if(grid[i][j]==1){//white
      rect(x,y,resolution-1,resolution-1);
      fill(255);
      stroke(0)
      }
    }
  }
  
 grid=change(grid);
 
}
