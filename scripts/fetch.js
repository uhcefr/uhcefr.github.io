include_all();

function include_all() {
    include_head();
    include_styles();
    include_anchor();
    include_header();
    include_footer();
}

function include(link, query) {
    fetch(link)
        .then(response => {
            return response.text()
        })
        .then(data => {
            document.querySelector(query).innerHTML += data;
        })

        .then(githublink => {
            if (link === "../views/include/header.html")
                githubHeader();
        });
}

function include_head() {
    include("../views/include/head.html", "head");
}
function include_styles() {
    include("../views/include/style.html", "head");
}
function include_anchor() {
    include("../views/include/anchor.html", "body");
}
function include_header() {
    include("../views/include/header.html", "body");
}
function include_footer() {
    include("../views/include/footer.html", "body");
}

function gather(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    resolve(data);
                    return;
                })
                .catch(error => console.error(error))
        }, 1000);
    });
}

function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

function getValue(obj, key) {
    var value;
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (i == key) {
            value = obj[i];
            break;
        }
    }
    return value;
}