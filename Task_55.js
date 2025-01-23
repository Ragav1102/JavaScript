const myObject = {
    value: 10,
    multiplyTraditional: function(factor) {
        console.log("Inside traditional function:");
        console.log("this.value:", this.value);  
        return this.value * factor;
    },
    multiplyArrow: (factor) => {
        console.log("Inside arrow function:");
        console.log("this.value:", this.value);  
        return this.value * factor;
    }
};
console.log(myObject.multiplyTraditional(2));  
console.log(myObject.multiplyArrow(2));       
