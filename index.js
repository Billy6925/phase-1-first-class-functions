 function receivesAFunction(callBack) {
    callBack();
}

function namedFunction() {
    console.log("This is my named function");
}
function returnsANamedFunction() {
    return namedFunction;
}


function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous functio");
    }
}
