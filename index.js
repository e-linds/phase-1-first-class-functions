function receivesAFunction(function1) {
    return function1()

}

function thisIsAFunction() {
    console.log("hello")
}

function returnsANamedFunction() {
    return thisIsAFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("hello")
    }}
    
