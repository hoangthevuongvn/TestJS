var names = ['a', 'c', 'd', 'e', 'f'];

function random(a) {
    return Math.floor(Math.random() * (a.length));
}
let num = random(names);

function ChooseNames(b, num) {
    return b[num];
}
document.write(ChooseNames(names, num));