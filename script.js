// =========================
// FILE : script.js
// =========================


// Fungsi untuk menghitung total biaya saat tombol "Hitung Total Harga" diklik
function hitungTotal() {

    // Mengambil nilai paket yang dipilih dari dropdown
    let hargaPaket =
    parseInt(
        document.getElementById("paketInternet").value
    );

    // Biaya pemasangan ditambahkan ke harga paket
    let biayaInstalasi = 150000;

    // Menjumlahkan biaya paket dan biaya pemasangan
    let total = hargaPaket + biayaInstalasi;

    // Menampilkan total biaya dalam format rupiah di elemen HTML
    document.getElementById("totalBiaya").innerHTML =
    "Total Biaya: Rp " + formatRupiah(total);
}

// Fungsi pembantu untuk merubah angka menjadi format mata uang Indonesia
function formatRupiah(angka) {
    return angka.toLocaleString('id-ID');
}


// Event listener pada form: ketika tombol submit ditekan
// Kita mencegah refresh halaman dan menampilkan pesan konfirmasi
document.getElementById("formPemesanan")

.addEventListener("submit", function(event) {

    // Mencegah halaman refresh saat submit
    event.preventDefault();

    // Ambil nama dan alamat dari input form
    let nama =
    document.getElementById("nama").value;
    let alamat =
    document.getElementById("alamat").value;

    // Ambil teks paket yang dipilih untuk ditampilkan di pesan
    let paket =
    document.getElementById("paketInternet")
    .options[
        document.getElementById("paketInternet")
        .selectedIndex
    ].text;

    // Jika nama atau alamat kosong, tampilkan peringatan
    if (nama === "" || alamat === "") {
        alert(
        "Mohon lengkapi data diri dan alamat pemasangan!"
        );
    }
    // Jika data lengkap, tampilkan pesan sukses dan reset form
    else {
        alert(
        "Terima kasih, " + nama +
        ". Pesanan layanan " + paket +
        " Anda sedang kami proses."
        );

        document.getElementById("formPemesanan")
        .reset();

        document.getElementById("totalBiaya")
        .innerHTML =
        "Total Biaya: Rp 0";
    }

});
