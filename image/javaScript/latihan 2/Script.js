let data = ["Eric","Nabila","Puspita","angelica","slevin","yuan","dimas"]
let listmhs = document.getElementById("listmhs")

data.forEach(showMahasiswa);

function showMahasiswa(velue, index){
    console.log(velue);
    listmhs.innerHTML += "<li>" + velue + "</li>";
}




let npm = document.getElementById("npm");
// tampilkan data localstrorage ke dalam elemen <p id="npm">
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
// tampilkan data localstrorage ke dalam elemen <p id="nama">
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke localstorage
localStorage.setItem("email","eric@test.com");

// data array
let hobi = ["baca","game","coding"];
localStorage.setItem("hobi", hobi);
localStorage.setItem("myhobi", JSON.stringify (hobi));

// data objeck
let mhs = {"npm": 2226240059, nama: "Eric Candra"};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {"kode_mk": "SI001", "nama_mk": "Pemrograman web"},
    {"kode_mk": "SI002", "nama_mk": "PAB"},
];
// tampilkan nama_mk pemrograman web
console.log(nilai[0].nama_mk);
console.log(nilai[1].nama_mk);

// simpan nilai ke dalam localstorage
localStorage.setItem("nilai", JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = JSON.parse(localStorage.getItem("nilai"));
for (const [index,data] of lsNilai.entries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);
    // tampilkan data mk ke dalam <ul id="listMk">
    document.getElementById("listMk").innerHTML += `<li>${data.kode_mk}${data.nama_mk}</li>`;
}