function ChoseNames(a) {
    let b = Math.floor(Math.random() * (a.length));
    document.write(a[b]);
}

var names = ['a', 'c', 'd', 'e', 'f'];
ChoseNames(names);