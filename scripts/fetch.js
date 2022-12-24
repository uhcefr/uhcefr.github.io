include_all();
async function include_all() {
    await include("../views/include/head.html", "head", false);
    await include("../views/include/style.html", "head", false);
    await include("../views/include/anchor.html", "body", false);
    await include("../views/include/header.html", "body", false);

    await include("../pages/content.html", "body");

    await include("../views/include/footer.html", "body", false);

    include_script("../scripts/github-header.js", "body", false);

    custom_pages_include();
}

async function include(link, query, queryOrIndex) {
    let response = await fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            if (queryOrIndex) {
                document.getElementById(query).innerHTML += data;
            } else {
                document.querySelector(query).innerHTML += data;
            }
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

function custom_pages_include() {
    var pathname = window.location.pathname;
    if (pathname == "/") {
        pathname += "index.html";
    }

    if (pathname === "/index.html") {
        include("../pages/home.html", "content", true);
    }

    if (pathname === "/pages/giscus.html") {
        include_script("../scripts/giscus.js", "content", true);
    }
}
