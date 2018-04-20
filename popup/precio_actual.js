function getValue() {
  document.getElementById("valor").innerHTML = "Loading";
  var json = new XMLHttpRequest();
  json.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var object = JSON.parse(this.responseText);

      var coinId = loadChosenCoin();

      var found = object.filter(function(item) { return item.id === coinId; });

      document.getElementById("coinName").innerHTML = found[0].name;
      document.getElementById("valor").innerHTML = "$" + found[0].price_usd;
    }
  };
  json.open(
    "GET",
    "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10",
    true
  );
  json.send();
}

function chooseCoin(){
  window.location.href = "choose_currency.html";
}

function loadChosenCoin(){
    var searchString = window.location.search.substr(1);
    var pair = searchString.split("=");
    var coinId = pair[1];
    return coinId;
}

getValue();
document.getElementById("valor").addEventListener("click", function() {getValue()});
document.getElementById("coinName").addEventListener("click", function(){chooseCoin()});
