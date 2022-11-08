window.onload = function(){
    const btn = document.getElementById("btn");
    const search = document.getElementById("superhero");
    var httpRequest;
    var result = document.getElementById("result");

    btn.addEventListener("click",function(element){
        element.preventDefault();
        httpRequest = new XMLHttpRequest();
        var url = "superheroes.php?superhero="+ search.value;
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState === XMLHttpRequest.DONE){
                if (httpRequest.status === 200){
                    var response = httpRequest.responseText;
                    result.innerHTML = response;
                }
                else {
                    alert('There was a problem with the request.');
                }
            }
        };

        httpRequest.open('GET', url);
        httpRequest.send();
    })
}