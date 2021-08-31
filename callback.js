function welcomemassage(name, greetHandler) {
    console.log(greetHandler);
    greetHandler(name);
}
// const names = ['Tom hanks', 'Tom holland', 'tom cruise']
// const myObj = { name: 'Tom Hardy', age: 30 };

function greetMorning(name) {
    console.log('Good Afternoon', name);
}
function greetEvening(name) {
    console.log('Good Evening', name);
}
function greetAfternoon(name) {
    console.log('Good Morning', name);
}
welcomemassage('Tom Hardy', greetMorning);
welcomemassage('Tom Holland', greetAfternoon);
welcomemassage('Tom Cruise', greetEvening);

document.getElementById('my-btn').addEventListener('click', handleClick);