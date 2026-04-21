async function sendText(){
    const text = document.getElementById("textInput").value;

    const res = await fetch('/api/text', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({text})
    })

    const data = await res.json();

    const div = document.getElementById("result");
    div.innerHTML = `<p>${data.message}</p>`

}
