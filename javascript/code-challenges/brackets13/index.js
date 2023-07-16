
function pair(open, close) {

    if (open === '(' && close === ')') return true
    else if (open === '{' && close === '}') return true
    else if (open === '[' && close === ']') return true

    return false;
}

function brackets(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[')
            stack.push(str[i]);
            
        else if (str[i] === ')' || str[i] === '}' || str[i] === ']') {
            if (stack.length === 0 || !pair(stack[stack.length - 1], str[i]))
                return false;
            else
                stack.pop();
        }
    }
    return stack.length === 0;
}

console.log(('{}(){}'))

module.exports = brackets;