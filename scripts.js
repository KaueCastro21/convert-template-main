//cotação da moeda do dia.
const USD = 5.07;
const EUR = 5.69;
const GBP = 6.75;

//Obtendo elementos do formúlario.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//Manipulando o input amount para receber apenas números.
amount .addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

//Captando o evento de submit do formúlario.
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$"); break; 
        case "EUR":
            convertCurrency(amount.value, EUR, "€"); break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£"); break;
    }
}

//função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try{
    //exibindo cotaçao da moeda np footer.
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    //Calcula o valor total.
    let total = amount * price;

    //formatando valor total.
    total = formatCurrencyBRL(total).replace("R$", "");
     
    //Exibindo resultado total.
    result.textContent = `${total} Reais`;

    //Exibe o resultado da conversão no footer.
    footer.classList.add("show-result");
  } 
  catch (error) {
    //Remove a classe footer.

    console.log(error);
    footer.classList.remove("show-result");
    console.error("Erro ao converter a moeda.", error);
  } 
};

//formata a moeda para o padrão brasileiro.
function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}