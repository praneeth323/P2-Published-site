function conversion(){
    const x= document.getElementById("name").value
    const y = parseFloat(x)/1000
    document.getElementById("message").value=y
}

function conversiontest(x){
    //const x= document.getElementById("name").value
    let y = parseFloat(x)/1000
    return y
}

function aj() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("aj").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax.txt", true);
    xhttp.send();
  }
  function count() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("lresult").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
      document.getElementById("lresult").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }