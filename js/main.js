function dzialania(num1, num2) {

    let x;
    let dodawanie = num1 + num2;
    let odejmowanie = num1 - num2;
    let mnozenie = num1 * num2;

    if (dodawanie >= 0) {
        x = dodawanie;
        console.log('Wynik dodawania wynosi: ' + x);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (odejmowanie >= 0) {
        x = odejmowanie;
        console.log('Wynik dodawania wynosi: ' + x);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (mnozenie >= 0) {
        x = mnozenie;
        console.log('Wynik dodawania wynosi: ' + x);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

   return x;

}

dzialania(3,5);