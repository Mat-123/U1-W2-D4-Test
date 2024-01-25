/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
  const result = l1 * l2;

  return result;
}
console.log("Risposta 1:", area(5, 10), "mq");

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  let add = num1 + num2;
  if (num1 === num2) {
    result = add * 3;
  } else {
    result = add;
  }
  return result;
}

console.log("Risposta 2:", crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num3) {
  if (num3 > 19) {
    result = Math.abs(num3 - 19) * 3;
  } else {
    result = Math.abs(num3 - 19);
  }
  return result;
}

console.log("Esercizio 3:", crazyDiff(-21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(num4) {
  let num5 = parseInt(num4);
  if ((num5 <= 100 && num5 >= 20) || num5 === 400) {
    return true;
  } else {
    return false;
  }
}

console.log("Esercizio 4:", boundary(400.5));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(string) {
  const text1 = string.split(" ");
  text1[0];
  if (text1[0].toUpperCase() === "EPICODE") {
    return string;
  } else {
    return "EPICODE" + string;
  }
}

console.log("Esercizio 5;", epify(" è una scuola per informatici."));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num6) {
  if (num6 > 0 && (num6 % 3 === 0 || num6 % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}

console.log("Esercizio 6:", check3and7(3));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log("Esercizio 7:", reverseString("EDOCIPE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(string) {
  const words = string.split(" ");
  let finalString = "";
  for (let i = 0; i < words.lenght; i++) {
    const firstChar = words[i].charAt(0).toUpperCase();
    const lastChars = words[i].slice(1);
    const uppChars = firstChar + lastChars;
    finalString += uppChars + " ";
  }
  return finalString;
}
console.log("Esercizio 8:", upperFirst("a me me piace a nutella, o gelato con la panna"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
