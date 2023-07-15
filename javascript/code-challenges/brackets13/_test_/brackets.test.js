const brackets = require('../index');

describe('brackets  test ', () => {
    it('{} : TRUE', () => {
        expect(brackets('{}')).toBe(true);
    });
    it('{}(){}: TRUE', () => {
        expect(brackets('{}(){}')).toBe(true);
    });
    it('{}(){}: TRUE', () => {
        expect(brackets('{}(){}')).toBe(true);
    });
    it('()[[Extra Characters]]: TRUE', () => {
        expect(brackets('()[[Extra Characters]]')).toBe(true);
    });

    it('(){}[[]] : TRUE', () => {
        expect(brackets('(){}[[]]')).toBe(true);
    });
    it('{}{Code}[Fellows](()): TRUE', () => {
        expect(brackets('{}{Code}[Fellows](())')).toBe(true);
    });
    it('[({}]: FALSE', () => {
        expect(brackets('[({}]')).toBe(false);
    });
    it('(](	: FALSE', () => {
        expect(brackets('(](')).toBe(false);
    });
    it('{(}): FALSE', () => {
        expect(brackets('{(})')).toBe(false);
    });

    

});
