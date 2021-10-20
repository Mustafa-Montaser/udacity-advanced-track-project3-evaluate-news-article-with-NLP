function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let url = document.getElementById('name').value
    if (Client.isURL(url)) {

        fetch("http://localhost:8081/test", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        }).then(res => res.json()).then(post => {
            console.log(post)
            document.getElementById("title").innerHTML = post.title
            document.getElementById("body").innerHTML = post.body
            document.getElementById("resultsSection").className = ""
        })
    }
    else {
        alert("please enter a valid url")
        document.getElementById("resultsSection").className = "hidden"

    }
}

export { handleSubmit }
