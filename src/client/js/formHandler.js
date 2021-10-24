function handleSubmit(event) {
    event.preventDefault();
    let url = document.getElementById('url').value;
    if (Client.isURL(url)) {
        fetch("http://localhost:3000/test", {  
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url })
        }).then(res => res.json()).then(post => {
            // console.log(post);
            document.getElementById("agreement").innerHTML = `Agreement: ${post.agreement}`;
            document.getElementById("subjectivity").innerHTML = `Subjectivity: ${post.subjectivity}`;
            document.getElementById("confidence").innerHTML = `Confidence: ${post.confidence}`;
            document.getElementById("irony").innerHTML = `Irony: ${post.irony}`;
            document.getElementById("score_tag").innerHTML = `Score Tag: ${post.score_tag}`;
            document.getElementById("resultsSection").className = "";
        }).catch(err => console.log(err))
    }
    else {
        alert("please enter a valid url");
        document.getElementById("resultsSection").className = "hidden";

    }
}

export { handleSubmit }
