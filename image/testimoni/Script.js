let inputnama = document.getElementById("nama");
let inputtestimoni = document.getElementById("testimoni");
let btnSimpan = document.getElementById("btnSimpan");
let list = document.getElementById("list");

let data = [];

btnSimpan.addEventListener("click", function() {
    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    } else {
        data.push({
            nama: inputnama.value,
            testimoni: inputtestimoni.value,
        });
    }
    localStorage.setItem("testimoni", JSON.stringify(data));
    // panggil get data
    getData();
});

// tgl 16 04 2024 selasa
// tampilkan ke dalam localstorage
function getData(){
    // clear element list
    list.innerHTML ="list";

    if (localStorage.getItem("testimoni")) {
        data = JSON.parse(localStorage.getItem("testimoni"));
        for(const [index, row] of data.entries()){
            list.innerHTML += `<tr><td>${row.nama}<td><td> ${row.testimoni}</td></tr>`;
        }
    }
}   
