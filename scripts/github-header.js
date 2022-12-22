var pathname = window.location.pathname;
if (pathname == "/") {
    pathname += "index.html";
}

function githubHeader() {
    pageName();
    pageEdit();
    pageCommit();
}
function pageName() {
    document.getElementById("pageName").innerText += pathname;
    document.getElementById("pageName").href += pathname;
}

function pageEdit() {
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
//https://api.github.com/repos/uhcefr/uhcefr.github.io/commits
