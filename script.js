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
    let i = 0;

    while (i < arr.length) {

        if (arr[i] > valorMax) {

            valorMax = arr[i];
        }

        if (valorMin == 0 && valorMin != arr[i]) {

            valorMin = arr[i];
        } else if (arr[i] < valorMin) {

            valorMin = arr[i];
        }
        i++;
    }
    arrayRetorno = [valorMin, valorMax];
    return arrayRetorno;
}
