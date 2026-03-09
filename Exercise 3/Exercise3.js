let counter = 0;
let choice = 0;

do {

    let menu = "Current counter: " + counter + "\n";
    menu += "1. Increment counter\n";
    menu += "2. Decrement counter\n";
    menu += "4. Exit\n";
    menu += "Select an option:";

    choice = parseInt(prompt(menu));

    switch (choice) {

        case 1:
            counter = counter + 1;
            alert("Counter increased. Value: " + counter);
            break;

        case 2:
            counter = counter - 1;
            alert("Counter decreased. Value: " + counter);
            break;

        case 4:
            alert("Program finished.");
            break;

        default:
            alert("Option not valid.");
    }

} while (choice != 4);