function include_giscus_script() {
    var script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "uhcefr/.github");
    script.setAttribute("data-repo-id", "R_kgDOIpOjWQ");
    script.setAttribute("data-category", "Giscus");
    script.setAttribute("data-category-id", "DIC_kwDOIpOjWc4CTPqF");
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "Livre d'or");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "1");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "transparent_dark");
    script.setAttribute("data-lang", "fr");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("crossorigin", "anonymous");
    document.head.appendChild(script);
}

function include_giscus_html() {
    var div1 = document.createElement("div");
    div1.className = "card";
    div1.id = "giscus-card";
    document.getElementById("content").appendChild(div1);

    var div2 = document.createElement("div");
    div2.className = "container";
    div1.appendChild(div2);

    var div3 = document.createElement("div");
    div3.className = "giscus giscus-frame";
    div2.appendChild(div3);
}

include_giscus_html();
include_giscus_script();