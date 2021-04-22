export function isItSummer(checkDate: Date): string {
    const month = checkDate.getMonth();
    const yesAnswer = 'Yes!☀️';
    const noAnswer = 'No...😞';

    const isJune = month === 5;
    const isJuly = month === 6;
    const isAugust = month == 7;

    if (isJune || isJuly || isAugust) {
        return yesAnswer;
    }

    return noAnswer;
}