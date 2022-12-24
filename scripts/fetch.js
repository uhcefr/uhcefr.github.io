async function include_all() {
    await include("../views/include/head.html", "head");
    await include("../views/include/style.html", "head");
    await include("../views/include/anchor.html", "body");
    await include("../views/include/header.html", "body");

    await include("../pages/test.html", "body");

    await include("../views/include/footer.html", "body");

    include_script("../scripts/github-header.js");
}

async function include(link, query) {
    let response = await fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(query).innerHTML += data;
        })
        .catch(error => {
            console.log(error);
        });
}

function include_script(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

include_all();