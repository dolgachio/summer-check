import { isItSummer as sut } from './isItSummer';

describe('isItSummer', () => {
    let yesAnswer: string;
    let noAnswer: string;

    beforeEach(() => {
        yesAnswer = 'Yes!☀️';
        noAnswer = 'No...😞';
    });

    it('should return Yes answer for June', () => {
        const checkDate = new Date(2021, 5, 1)

        expect(sut(checkDate)).toEqual(yesAnswer);
    });

    it('should return Yes answer for July', () => {
        const checkDate = new Date(2021, 6, 1)

        expect(sut(checkDate)).toEqual(yesAnswer);
    });

    it('should return Yes answer for July', () => {
        const checkDate = new Date(2021, 7, 1)

        expect(sut(checkDate)).toEqual(yesAnswer);
    });

    it('should return no answer for not summer monthes', () => {
        const checkDate = new Date(2021, 0, 1)

        expect(sut(checkDate)).toEqual(noAnswer);
    });

    it('should fail', () => {
        expect(true).toBe(false);        
    })
});