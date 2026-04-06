function matrix(numero){
    let num = "";
    for(let i=0; i<=numero; i++){
        for (let j=0; j<=numero; j++){
            num = num + '[${i},${j}]'
        }
        num = num + "\n"
} 
console.log(num)   
}
matrix(2)