function changeSubscribePage() {
    let input = document.getElementById("nome").value;
    let subscribeButton = document.getElementById("tastoSubscribe");
    if (input == "") {
        subscribeButton.disabled = true
    }
    else {
        subscribeButton.disabled = false
    }
}

function salva() {
    let nome = document.getElementById("nome").value;
    localStorage.setItem('nome', nome);
}

function nascondiForm() {
    let formSubscribe = document.getElementById("formSubscribe");
    formSubscribe.style.display = "none";
    let subscribeButton = document.getElementById("tastoSubscribe");
    subscribeButton.style.display = "none";
    let unsubscribeButton = document.getElementById("unsubscribeButton");
    unsubscribeButton.style.display = "inline";
}

function CheckLoggedUsers() {
    let storedname = localStorage.getItem('nome');
    if (storedname != null) {
        nascondiForm();
    }
}

function Unsubscribe() {
    localStorage.clear();
    let unsubscribeButton = document.getElementById("unsubscribeButton");
    unsubscribeButton.style.display = "none";
    let subscribeButton = document.getElementById("tastoSubscribe");
    subscribeButton.style.display = "inline";
    subscribeButton.disabled = true;
    let formSubscribe = document.getElementById("formSubscribe");
    formSubscribe.style.display = "inline";

}

function welcome() {
    let storedname = localStorage.getItem('nome');
    if (storedname != null) {
        alert("Benvenuto " + storedname)
    }
}