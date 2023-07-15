function brackets(str) {
    const valid = [];
    const open = ['(', '[', '{'];
    const close = [')', ']', '}'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (open.includes(char)) {
            valid.push(char);
        } else if (close.includes(char)) {
            const matchingopen = open[close.indexOf(char)];
            if (valid.length === 0 || valid.pop() !== matchingopen) {
                return false;
            }
        }
    }

    return valid.length === 0;
}

module.exports = brackets;