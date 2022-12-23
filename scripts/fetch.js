include_all();

function include_all() {
    include("../views/include/head.html", "head");
    include("../views/include/style.html", "head");
    include("../views/include/anchor.html", "body");
    include("../views/include/header.html", "body");

    //Test
    include("../pages/test.html", "body");

    include("../views/include/footer.html", "body");

    include_script("../scripts/github-header.js");
}

function include(link, query) {
    fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(query).innerHTML += data;
        })
}

function include_script(url) {
    var script = document.createElement("script");
    script.src = url;

    document.head.appendChild(script);
}