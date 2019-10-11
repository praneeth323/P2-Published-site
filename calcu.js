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