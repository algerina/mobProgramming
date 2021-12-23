
function birthdayCakeCandles(candles) {
    let max = 0;
    let number = 0;
    for ( let i= 0; i < candles.length; i++) {
        if ( max < candles[i]) {
            max = candles[i];
        } 
    }
    for (let i = 0; i < candles.length; i ++) {
        if ( max == candles[i])
        number ++;
    }
    return number;
    // Write your code here

}


console.log(birthdayCakeCandles([3, 2, 1, 3]));