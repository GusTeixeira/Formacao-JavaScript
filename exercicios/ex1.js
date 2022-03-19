
let a = [3, 2, 3];
let b = [3, 3, 3];
let points = [0,0];


for(let i = 0; i < 3; i++){
    if(a[i] > b[i]){
        points[0]++;
    }
    else if(b[i] > a[i]){
        points[1]++;
    }
    else if(b[i] === a[i]){
        points[0,1] = points[0,1];
    }
}

console.log(points.join(' '));