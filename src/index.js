function warmup(temp) {
    return (temp * ( 9/5 * 1000 ) / 1000 ) + 32
}

var a = warmup(5);
console.log(' 5C in Farenheit is ' + a + 'F');