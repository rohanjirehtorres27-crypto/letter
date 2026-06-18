function goToPage(){
    const name = document.getElementById('input-button').value.toLowerCase();

    if (name=== "chloe"){
        window.location.href = "Chloe.html";
    }
    else if (name === "keysha"){
        window.location.href = "Keysha.html"
    }
    else{
        alert("User not found");
    }
}