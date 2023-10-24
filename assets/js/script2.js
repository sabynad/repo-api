console.log("test script 2 ");

const getPokemons = async () => {
    try {
        const reponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1292");
        const pokemons = await reponse.json();
        return pokemons;
    } catch (error) {
        console.log("Echec de la rcupération de la liste des pokemons");
    }
}

const displayPokemons = async () => {
    const pokemons = await getPokemons();
    console.log("Pokemons : ", pokemons);
    console.log("Results : ", pokemons.results);
}

displayPokemons();

//methode ajax
const resultAjax = await ajaxTest('https://pokeapi.co/api/v2/pokemon?limit=1292');
console.log("résultat pokemon avec ajax", resultAjax);
 function ajaxTest (url) {
    return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    if (!xhr) {
        alert('abandon :( Impossible de créer une instance de XMLHTTP');
        return false;
    }
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                return resolve(JSON.parse(this.response));
            }
        }
    };
    xhr.send(); 
    }); 
}

//methode avec axios
let datasAxios = await axiosTest();
console.log("résultat pokemon avec Axios: ", datasAxios);
async function axiosTest (){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1292')
    return response.data;
}
//idem avec une promesse explicite
let datasAxiosBis = await axiosTestAvecPromesseExplicite();
console.log("Datas via Axios et une promesse explicite: ", datasAxiosBis.data);
function axiosTestAvecPromesseExplicite () {
    return new Promise((resolve) => {
        return resolve(axios.get("data.json"));
    });
}



//methode avec fetch
let datasFetch
const urlApi = ('https://pokeapi.co/api/v2/pokemon?limit=1292');
await getDataFetch();
async function getDataFetch (){
    const res = await fetch(urlApi);
    datasFetch = await res.json();
}
console.log("donne methode fetch", datasFetch);
//idem avec une promesse explicite
let dataFetchTer = await getDataAvecPromesseExplicite();
console.log("Voici les données via fetch avec promesse explicite: ", dataFetchTer);

function getDataAvecPromesseExplicite () {
    return new Promise((resolve) => {
        return resolve(
            fetch("data.json", {
                method: 'GET',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-type': 'application/json'
                }
            }).then(function(response) {
                return response.json();
            })
        );
    });
}


















