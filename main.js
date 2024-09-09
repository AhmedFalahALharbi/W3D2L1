//  Q1
for (let index = 1; index < 26; index++) {
    if (index % 2 == 0) {
        console.log( "Even numbers",index);     
    }
}

// Q2
for (let index = 1; index < 11; index++) {
    
        console.log("Square is:",index * index);     

}
// Q3
for (let index = 1; index < 21; index++) {
    if (index % 2 == 1) {
        console.log( "Odd numbers",index);     
    }
}
// Q4
var sum =[0 , 1];
for (let i = 2; i < 10; i++) {
        sum[i] = sum[i-1] + sum[i-2]     
    }
    console.log(sum);
// Q5 
for (let index = 1; index < 4; index++) {
    for (let j = 1; j < 10; j++) {
        
        console.log(index, "x" ,j , "=",index*j);
    }
    
    
}
    