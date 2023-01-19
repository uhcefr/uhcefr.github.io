var data = [];
var final = [];
start();

async function start() {
    display(await calcul("uhcefr"));
}

async function getuserData(repo, orgs) {
    var x = await gather('https://api.github.com/repos/' + orgs + '/' + repo + '/contributors');
    for (var i in x) {
        var login = getValue(x[i], "login");
        var id = getValue(x[i], "id");
        var html_url = getValue(x[i], "html_url");
        var contributions = getValue(x[i], "contributions");
        var avatar_url = getValue(x[i], "avatar_url");

        var dataIndex = data.length;
        var dataUser = [];
        dataUser["login"] = login;
        dataUser["html_url"] = html_url;
        dataUser["contributions"] = contributions;
        dataUser["avatar_url"] = avatar_url;
        dataUser["id"] = id;
        data.push(dataUser);
    }
}

async function getRepo(orgs) {
    var x = await gather('https://api.github.com/orgs/' + orgs + '/repos');
    var contributors = [];
    for (var i in x) {
        var repo = await getValue(x[i], "name");
        var userData = await getuserData(repo, orgs);
    }
}

async function calcul(orgs) {
    await getRepo(orgs);

    for (var i in data) {
        var login = getValue(data[i], "login");
        var found = false;
        for (var i2 in final) {
            var login2 = getValue(final[i2], "login");
            if (login == login2) {
                found = true;
                var contributions = getValue(data[i], "contributions");
                var contributions2 = getValue(final[i2], "contributions");
                var total = contributions + contributions2;
                final[i2]["contributions"] = total;
            }
        }

        if (!found) {
            final.push(data[i]);
        }
    }

    return final;
}

function display(array) {
    var root = document.getElementById("participants_github");
    for (var i in array) {
        var login = getValue(array[i], "login");
        var id = getValue(array[i], "id");
        var html_url = getValue(array[i], "html_url");
        var contributions = getValue(array[i], "contributions");
        var avatar_url = getValue(array[i], "avatar_url");

        var br = document.createElement('br');

        var div = document.createElement('div');
        div.style = "display: inline-block;margin:20px;"

        var img = document.createElement('img');
        img.src = avatar_url;
        img.style = "max-width: 100px;max-height:100px;border-radius:25px;";

        var a = document.createElement('a');
        a.textContent = login;
        a.href = html_url;

        var p = document.createElement('p');
        p.textContent = "Contributions : " + contributions;

        div.append(img);
        div.append(br);
        div.append(a);
        div.append(p);
        root.append(div);

        document.getElementById("loading").style = "display:none;";
    }

}