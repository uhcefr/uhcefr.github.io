async function include_all() {
    await include("../views/include/head.html", "head", false);
    await include("../views/include/style.html", "head", false);
    await include("../views/include/anchor.html", "body", false);
    await include("../views/include/header.html", "body", false);

    await include("../pages/test.html", "body");

    await include("../views/include/footer.html", "body", false);

    include_script("../scripts/github-header.js", "body", false);
    
    include_script("../scripts/giscus.js", "content", true);

    /*
    Faire si lien = / (index)
    Ajouter Test.html (rename home)

    Si lien = /pages/giscus.html
    Add Giscus HTML (separated as Gisucs script)
    Add include_giscus_script();
    */


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

include_all();