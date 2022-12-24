githubHeader();

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

function githubHeader() {
    pageName();
    pageCommit();
}
function pageName() {
    var pathname = window.location.pathname;
    if (pathname == "/") {
        pathname += "index.html";
    }

    /*
    If pages/ + pathname.html
        exist, add it to header to edit purpose
        if scripts/ + pathname.js 
        same thing, add text to do it
    */

    document.getElementById("pageName").innerText += pathname;
    document.getElementById("pageName").href += pathname;
    document.getElementById("pageEdit").href += pathname;
}

async function pageCommit() {
    var x = await gather('https://api.github.com/repos/uhcefr/uhcefr.github.io/commits');
    var y = getValue(x[0], "sha");

    document.getElementById("pageCommit").href += y;
    document.getElementById("pageCommit").innerText += y;

    var z = getValue(x[0], "commit")
    var z2 = getValue(z, "author");

    var name = getValue(z2, "name");
    document.getElementById("pageAuthor").href += name;
    document.getElementById("pageAuthor").innerText += name;

    var date = getValue(z2, "date");
    const date1 = new Date(date);
    var date2 = date1.toLocaleString();
    document.getElementById("pageDate").innerText += date2;

    var message = getValue(z, "message")
    document.getElementById("pageMessage").innerText += message;
}
