let button = document.getElementById('button');
let factoutput = document.getElementById("fact")
let random_cat_facts = "https:/meowfacts.herokuapp.com";


function fetchRandomcatFacts() {
    button.textContent="Loading..."
    fetch(random_cat_facts).then(res=>res.json()).then
    (data=>{
        factoutput.textContent=data.data[0];
        button.innerHTML ="New Fact"
        

    })
}
fetchRandomcatFacts();


function speak(){
    let uttrance = new SpeechSynthesisUtterance
    (factoutput.textContent)
    speechSynthesis.speak(uttrance)
}

 function copyfact(){
    navigator.clipboard.writeText(factoutput.textContent)
 }

 function sharefact(){
    navigator.share({
        title: "cat fact",
        text: factoutput.textContent
    })
 }
