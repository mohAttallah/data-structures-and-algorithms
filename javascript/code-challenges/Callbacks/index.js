function isEven(value, callback) {
    value % 2 === 0 ? callback(true) : console.log(false);
}

function callback(value) {
    console.log(value);
}

isEven(12,callback);
