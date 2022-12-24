async function include_all() {
    await include("../views/include/head.html", "head", false);
    await include("../views/include/style.html", "head", false);
    await include("../views/include/anchor.html", "body", false);
    await include("../views/include/header.html", "body", false);

    await include("../pages/test.html", "body");

    await include("../pages/giscus.html", "content", true);

    await include("../views/include/footer.html", "body", false);

    include_giscus_script();
    include_script("../scripts/github-header.js", "body", false);
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

function include_giscus_script() {
    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "lx78WyY0J5/lx78WyY0J5.github.io");
    script.setAttribute("data-repo-id", "R_kgDOIZqQtA");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDOIZqQtM4CTCoa");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "lx78wyy0j5.github.io");
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "transparent_dark");
    script.setAttribute("data-lang", "fr");
    script.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(script);
}

include_all();