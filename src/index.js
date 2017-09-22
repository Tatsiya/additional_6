module.exports = function zeros(expression) {
    factor = expression.split("*"); 
    
    var multiply = 0;
    var twosContainer = 0;
    var fivesContainer = 0;

    for (i = 0; i < factor.length; i++) { 
        var numberOffact = factor[i].replace(/[^!]/g, "").length;
        var number = parseInt(factor[i], 10);
        var numberOfFives = 0;
        var numberOfTwos = 0;
        var zeros = 0;
        
        if (numberOffact === 1) {
            numberOfFives = Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number / 125) + Math.floor(number / 625); 
            numberOfTwos =  Math.floor(number / 2) + Math.floor(number / 4) + Math.floor(number / 8) + Math.floor(number / 16) + Math.floor(number / 32) + Math.floor(number / 64) + Math.floor(number / 128); 
            zeros = Math.min(numberOfFives, numberOfTwos);

        } else if (number % 2 === 0) {
            zeros = Math.floor(number / 10) + Math.floor(number / 50) + Math.floor(number / 250); // 11
            twosContainer += Math.floor(number / 2) + Math.floor(number / 4) + Math.floor(number / 8) + Math.floor(number / 16) + Math.floor(number / 32) + Math.floor(number / 64) + Math.floor(number / 128) - zeros;
            numberOfFives = 0;

        } else {
            numberOfFives = Math.floor(number / 5) + Math.floor(number / 25) + Math.floor(number / 125) + Math.floor(number / 625) - Math.floor(number / 10) - Math.floor(number / 50) -  Math.floor(number / 250) -  Math.floor(number / 1250); 
            zeros = Math.min(numberOfFives, numberOfTwos);
            numberOfTwos = 0;
        }

        if (numberOfFives > numberOfTwos) {
            fivesContainer += numberOfFives - zeros;
        } else {
            twosContainer += numberOfTwos - zeros;
        }
        
        multiply += zeros; 
    }  

    if (fivesContainer > 0 && twosContainer > 0) {
        multiply += Math.min(fivesContainer, twosContainer);
    }
        
    return multiply; 
}
