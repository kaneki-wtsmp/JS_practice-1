//no1
function esPalindromo(num) {
    if (num < 0 || (num % 10 === 0 && num !== 0)) {
        return false;
    }

    let original = num;
    let invertido = 0;

    while (num > 0) {
        invertido = (invertido * 10) + (num%10);
        num = Math.floor(num / 10);
    }
    return original === invertido;
}

console.log(esPalindromo(12321)); // true
console.log(esPalindromo(12345)); //false

//no2
function matrixx(numero){
  let num = "";
  for(let i=0; i<=numero; i++){
    for(let j=0; j<=numero; j++){
      
      num = num + `#`
    }
    num = num+"\n";
  }
  console.log(num);
}
matrixx(2);

//no3
function matrix(numero){
  let num = "";
  for(let i=0; i<=numero; i++){
    for(let j=0; j<=numero; j++){
      
      num = num + `[${i} + ${j}]`
    }
    num = num+"\n";
  }
  console.log(num);
}
matrix(2);
