function one() {
    console.log("One\n");
    two();
}

function two() {
    console.log("Two\n");
    three();
}

function three() {
    console.log("Three\n");
}

one();