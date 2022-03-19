let arr =[[1,2,1], 
          [4,1,6], 
          [2,1,9]];

let sumLeft = 0;
let sumRight = 0;
let a = 0;

for(let i=0;i<3;i++){
    sumLeft = arr[i][i] + sumLeft;
 }

for(let c=2;c>-1;c--)
{
    sumRight = arr[c][a] + sumRight;
    a++;
}
console.log(sumLeft - sumRight)