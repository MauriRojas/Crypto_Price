function loadIconList(){
  var json = new XMLHttpRequest();
  json.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var coins = JSON.parse(this.responseText);
      coins.forEach(function(currency) {addCoinItem(currency)});
    }
  };

json.open(
  "GET",
  "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10",
  true
);
json.send();
}

function addCoinItem(currency) {
  var ul = document.getElementById("coinlist");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(currency.name));
  li.setAttribute("id", currency.id);
  li.addEventListener("click", function(){precioActual(li.id)});
  ul.appendChild(li);
}

function precioActual(coinId) {
    window.location.href = "precio_actual.html?chosenCoin=" + coinId;
}

loadIconList();
