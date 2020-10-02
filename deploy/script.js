function ageInDays() {
    var birthYear = prompt('What year were you born....');
    var ageindayss = (2020  -  birthYear) * 365;
    var h1 = document.createElement('hi');
    var textAnswer = document.createTextNode('You are' + ageindayss+ ' days old ')
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
}

function reset() {
document.getElementById("ageInDays").remove();
}