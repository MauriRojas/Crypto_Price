var json = new XMLHttpRequest();
json.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var object = JSON.parse(this.responseText);
    var found = object.filter(function(item) { return item.id === "bitcoin"; });
    document.getElementById("valor").innerHTML = "$" + found[0].price_usd;
  }
};
json.open(
  "GET",
  "https://api.coinmarketcap.com/v1/ticker/?convert=USD&limit=10",
  true
);
json.send();
