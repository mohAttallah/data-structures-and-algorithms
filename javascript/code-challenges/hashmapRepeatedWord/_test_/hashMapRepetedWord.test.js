const repeatedWord = require('../index');

describe('repeatedWord function', () => {
    it('return the most repeated word', () => {
        const input = "Once upon a time, there was a brave princess who...";
        const result = repeatedWord(input);
        expect(result).toBe('a');
    });

    it('handle an empty string', () => {
        const input = "";
        const result = repeatedWord(input);
        expect(result).toBe('');
    });

    it('handle a single word', () => {
        const input = "hello";
        const result = repeatedWord(input);
        expect(result).toBe('hello');
    });
});
