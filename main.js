function generator() {
  var x = Math.floor(Math.random() * 5 + 1);
  document.getElementById("lunch").innerHTML = `
  <img/src="lunch${x}.jpg" style="width: 300px;" >
  `;
}
