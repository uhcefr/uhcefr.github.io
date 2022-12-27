badges();
function badges() {
    console.log("start badges");

    const svgns = "http://www.w3.org/2000/svg";

    var badges_uhcefr = document.getElementById("badges-uhcefr");
    var root = document.createElementNS(svgns, "svg");
    root.setAttributeNS(null, "id", "svgID");

    let a = document.createElementNS(svgns, "rect");
    a.setAttribute('x', 0);
    a.setAttribute('y', 0);
    a.setAttribute('width', 50);
    a.setAttribute('height', 50);
    a.setAttribute('fill', '#95B3D7');
    root.appendChild(a);

    let txt = document.createElementNS(svgns, "text");
    txt.setAttribute('x', 0);
    txt.setAttribute('y', 25);
    txt.setAttribute('fill', "#ff00ff");
    txt.setAttributeNS(null, 'class', "text-font text-extra text-bold text-underline");
    txt.textContent = "test";
    root.appendChild(txt);

    badges_uhcefr.appendChild(root);
}