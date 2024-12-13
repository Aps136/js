
var createCounter = function(n) {    
    return function() {
        return n++; // Increment n after returning the current value
    };
};

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
