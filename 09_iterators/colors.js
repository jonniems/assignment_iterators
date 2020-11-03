let colorArr = ['yellow', 'blue', 'red', 'orange'];

//Oude stijl -- While Loop

let i = 0;
while (i < colorArr.length) {
    console.log(colorArr[i]);
    i++;
}

//Oude stijl -- For Loop

for (let i = 0; i < colorArr.length; i++) {
    console.log(colorArr[i]);
}

// Nieuwe stijl -- For Each Method

colorArr.forEach(color => console.log(color));

// Antwoorden op Vragen

/* 
1.  Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
    De while loop neemt 5 regels in beslag, de for loop 3.
2.  Hoeveel regels neemt mijn forEach method in beslag?
    De for each methode neemt slecht 1 regel in beslag.
3.  Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
    Geen kans op infinite loop, geen onduidelijkheid met 'i' en forEach is duidelijk wat er gebeurt.
*/

let colorObj = {
    colorSun: 'yellow',
    colorSky: 'blue',
    colorFire: 'red',
    colorLava: 'orange'
};

for (i in colorObj) {
    console.log(colorObj[i]);
}

/*
4.  Ben je nu aan het itereren?
    Ja, itereren gaat nu over een object.
*/