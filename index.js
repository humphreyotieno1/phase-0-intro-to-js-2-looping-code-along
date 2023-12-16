function writeCards (names, events) {
    let eventCards = [];
    let count = 0;
    for (count = 0; count < names.length; count++) {
        let message = `Thank you, ${names[count]}, for the wonderful ${events} gift!`;
        eventCards.push(message);
    }
    return eventCards
}
const listNames = ['Guadalupe', 'Ollie', 'Aki'];
const myEvents = 'surprise';
const MyCards = writeCards(listNames, myEvents);
console.log(MyCards);

function countDown (number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);