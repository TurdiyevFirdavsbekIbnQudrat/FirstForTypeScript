// function sum (x: number, y: number): number {
//     return x + y;
// };
// function multiply (a: number, b: number): number {
//     return a * b;
// };
var IsmAndJins = [
    { name: "Firdavs", jinsi: "male" },
    { name: "Quvvat", jinsi: "male" },
    { name: "Azizbek", jinsi: "male" },
    { name: "Axror", jinsi: "male" },
    { name: "Sardor", jinsi: "male" },
    { name: "Saida", jinsi: "female" },
    { name: "Aziza", jinsi: "female" },
    { name: "Oygul", jinsi: "female" },
];
function ismlar() {
    var sd = document.getElementById("txt");
    var s = sd.value;
    var str = "";
    for (var i = 0; i < IsmAndJins.length; i++) {
        if (s === IsmAndJins[i].jinsi)
            str += IsmAndJins[i].name + "<br>";
    }
    document.getElementById("yozilsin").innerHTML = str;
}
