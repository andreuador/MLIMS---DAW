let op;

document.querySelector('#sum').addEventListener('click', () => {
    op = '+';
});
document.querySelector('#multiply').addEventListener('click', () => {
    op = '*';
});

document.querySelector('#divide').addEventListener('click', () => {
    op = '/';
});

document.querySelector('#calculate').addEventListener('click', () => {
    const n1 = parseInt(document.querySelector('#n1').value);
    const n2 = parseInt(document.querySelector('#n2').value);

    let r;
    
    if (op == '+') {
        r = n1 + n2;
    }
    else if (op == '*') {
        r = n1 * n2;
    } else if (op == '/') {
        r = n1 / n2;
    }
    document.querySelector('#r').innerHTML = r;
});

/*let unordered = document.createElement('ul');
unordered.innerHTML = #r + (n1 * n2);
divResult.append(unordered);*/
