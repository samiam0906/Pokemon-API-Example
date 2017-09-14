1// When submit is clicked we want to make an API call
// We will need an event listener on the submit button

var searchForm = document.querySelector("#pokeSearch");

searchForm.addEventListener('submit', function(event) {
  // default behavior of form is to reload
  event.preventDefault();
  var searchTerm = document.querySelector("input").value;
  // console.log(searchTerm);
  $.get("https://pokeapi.co/api/v2/pokemon/" + searchTerm + "/", function(data) {
    // data will contain the reponse data from the server
    console.log(data.abilities[0].ability.name);
    document.querySelector("#pokeName").innerText = data.forms[0].name;
    for (var i = 0; i < data.abilities.length; i++) {
      var newLi = document.createElement("li");
      newLi.innerText = data.abilities[i].ability.name;
      console.log(newLi);
      // document.querySelector("#abilities").appendChild(newLi);
      $("#abilities").append(newLi)
    }
    var statsResult = "";
    for (var i = 0; i < data.stats.length; i++) {
      statsResult = statsResult+ "<li>" + data.stats[i].stat.name + "</li>";
    }
    document.querySelector("#stats").innerHTML = statsResult;
    // console.log(statsResult);
  })
})



// $("#pokeSearch").on('click', 'submit', function() {
//   $.get()
// })
