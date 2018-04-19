var json = new XMLHttpRequest(); // start a new variable to store the JSON in
json.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
    var coins = JSON.parse(this.responseText);

    coins.forEach(function(currency) {addCoinItems(currency)});
  }
};

function addCoinItems(currency) {
  var ul = document.getElementById("coinlist");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(currency.name));
  li.setAttribute("id", currency.name);
  ul.appendChild(li);
  //alert(li.id);
}

json.open(
  "GET",
  "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10",
  true
);
json.send();
