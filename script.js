function isPalindrome(str) {

    let palavraSemEspacos = "";
    let palavraAoContrario = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            palavraSemEspacos = palavraSemEspacos + str[i];
        }
    }

    for (let i = palavraSemEspacos.length - 1; i >= 0; i--) {

        palavraAoContrario = palavraAoContrario + palavraSemEspacos[i];
    }

    palavraSemEspacos = palavraSemEspacos.toLowerCase();
    palavraAoContrario = palavraAoContrario.toLowerCase();

    if (palavraSemEspacos === palavraAoContrario) {
        return true;
    }
    return false;
}

function arrayMaxMin(arr) {

    let valorMax = 0;
    let valorMin = 0;
    let arrayRetorno = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > valorMax) {

            valorMax = arr[i];
        }
    }

    valorMin = valorMax;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < valorMin) {

            valorMin = arr[i];
        }
    }

    arrayRetorno = [valorMin, valorMax];

    return arrayRetorno;
}
