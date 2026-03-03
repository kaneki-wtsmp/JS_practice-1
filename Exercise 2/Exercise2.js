let numbers = [];

let i = 1;

while (i <= 20) {
    numbers.push(i);
    i++;
}


// Part 1
for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[j]);
}


// Part 2
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 2 === 0) {
        continue;
    }
    console.log(numbers[j]);
}


// Part 3
for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] === 10) {
        break;
    }
    console.log(numbers[j]);
}