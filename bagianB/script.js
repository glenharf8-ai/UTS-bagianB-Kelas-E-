/**
 * Data array of object: 10 destinasi wisata Provinsi Gorontalo.
 * Gambar berupa ilustrasi SVG di folder img/ (dapat diganti foto asli
 * dengan mengubah nilai properti "gambar").
 */
const destinasiWisata = [
    {
        id: 1,
        nama: "Hiu Paus Botubarani",
        kategori: "Bahari",
        lokasi: "Kabila Bone, Bone Bolango",
        harga: "Rp 10.000 (dewasa) / Rp 5.000 (anak)",
        gambar: "hiu paus.webp",
        deskripsi: "Pantai Botubarani terkenal sebagai tempat berenang dan snorkeling bersama hiu paus (Rhincodon typus), ikan terbesar di dunia yang jinak dan dilindungi. Pengunjung dapat menyewa perahu (sekitar Rp 100.000 untuk maksimal tiga orang) untuk melihat dan memberi makan hiu paus dari dekat."
    },
    {
        id: 2,
        nama: "Taman Laut Olele",
        kategori: "Bahari",
        lokasi: "Suwawa Timur, Bone Bolango",
        harga: "Sesuai tarif di lokasi",
        gambar: "Laut Olele.jpg",
        deskripsi: "Taman Laut Olele di Desa Olele dikenal dengan air laut yang sangat jernih dan terumbu karang yang terjaga. Tersedia beberapa titik untuk snorkeling dan menyelam, serta sangat cocok untuk fotografi bawah laut."
    },
    {
        id: 3,
        nama: "Pulau Saronde",
        kategori: "Bahari",
        lokasi: "Kwandang, Gorontalo Utara",
        harga: "Sewa kapal Rp 250.000 - Rp 300.000 / rombongan",
        gambar: "pulau saronde.jpg",
        deskripsi: "Pulau mungil dengan pasir putih, deretan pohon cemara, dan air laut jernih untuk snorkeling. Pulau ini dicapai dengan perahu dari Pelabuhan Kwandang, dan di dekatnya terdapat Pulau Bogisa dengan jalur pasir sepanjang sekitar 450 meter yang muncul di tengah laut."
    },
    {
        id: 4,
        nama: "Pulau Cinta (Pulo Cinta)",
        kategori: "Bahari",
        lokasi: "Boalemo",
        harga: "Sesuai paket penginapan dan perahu",
        gambar: "pulau cinta.jpg",
        deskripsi: "Pulau yang dahulu tidak berpenghuni dan kini menjadi eco resort dengan 15 cottage di atas air. Jembatan kayu yang menghubungkan cottage membentuk hati jika dilihat dari atas. Pengunjung dapat mendayung, snorkeling, menyelam, atau menjelajahi hutan, dengan perjalanan perahu sekitar 25 menit."
    },
    {
        id: 5,
        nama: "Benteng Otanaha",
        kategori: "Budaya",
        lokasi: "Dembe I, Kota Gorontalo",
        harga: "Rp 10.000 / orang",
        gambar: "benteng otanaha.jpeg",
        deskripsi: "Benteng di perbukitan yang disebut sebagai bukti kedatangan bangsa Portugis, dibangun pada tahun 1522. Pengunjung menaiki 348 anak tangga dengan empat titik istirahat untuk menikmati pemandangan perbukitan hijau dan Danau Limboto dari atas."
    },
    {
        id: 6,
        nama: "Masjid Hunto Sultan Amai",
        kategori: "Budaya",
        lokasi: "Biawu, Kota Selatan, Kota Gorontalo",
        harga: "Gratis",
        gambar: "masjid hunto.jpg",
        deskripsi: "Didirikan pada tahun 1495 oleh Sultan Amai, penguasa pertama Kerajaan Gorontalo yang memeluk Islam, dan dikenal sebagai masjid tertua di Provinsi Gorontalo. Nama \"Hunto\" berasal dari kata \"Ilohuntungo\", yaitu pusat pertemuan keagamaan pada masa itu."
    },
    {
        id: 7,
        nama: "Kampung Laut Torosiaje",
        kategori: "Budaya",
        lokasi: "Pohuwato",
        harga: "Sesuai tarif di lokasi",
        gambar: "laut torosiaje.jpeg",
        deskripsi: "Perkampungan di atas laut yang dihuni lebih dari 400 kepala keluarga dan masih memegang adat istiadat. Rumah-rumah panggung dihubungkan jembatan kayu selebar dua meter. Pengunjung dapat melihat pasar terapung, pembuatan perahu, dan menikmati kuliner hasil tangkapan nelayan."
    },
    {
        id: 8,
        nama: "Danau Limboto",
        kategori: "Alam",
        lokasi: "Limboto, Kabupaten Gorontalo",
        harga: "Sesuai tarif di lokasi",
        gambar: "danau limboto.jpeg",
        deskripsi: "Danau terbesar di Gorontalo dengan kedalaman sekitar 5 sampai 8 meter dan dialiri sekitar 23 sungai. Waktu terbaik berkunjung adalah sore hari untuk menikmati matahari terbenam di tepi danau."
    },
    {
        id: 9,
        nama: "Wisata Alam Lombongo",
        kategori: "Alam",
        lokasi: "Suwawa Tengah, Bone Bolango",
        harga: "Rp 10.000 / orang",
        gambar: "wisata alam lombongo.jpeg",
        deskripsi: "Kawasan wisata dengan kolam air panas alami dan sungai jernih yang berhulu di Taman Nasional Bogani Nani Wartabone, dengan akses menuju air terjun. Tersedia gazebo, hammock, warung makan, dan tempat parkir. Hindari berkunjung saat musim hujan deras karena rawan banjir bandang."
    },
    {
        id: 10,
        nama: "Taman Nasional Bogani Nani Wartabone",
        kategori: "Pegunungan",
        lokasi: "Bone Bolango, Gorontalo",
        harga: "Sesuai tarif Balai Taman Nasional",
        gambar: "tamnas nani wartabone.jpeg",
        deskripsi: "Kawasan taman nasional hutan hujan pegunungan yang membentang di Provinsi Gorontalo dan Sulawesi Utara. Tempat ini menjadi habitat satwa endemik Sulawesi seperti burung maleo, anoa, dan babirusa."
    }
];

// Status filter yang sedang aktif (dipakai bersama oleh pencarian dan filter)
let kategoriAktif = "Semua";
let kataKunci = "";

/**
 * Memotong teks menjadi maksimal "batas" karakter tanpa memenggal kata,
 * lalu menambahkan tanda titik tiga.
 * @param {string} teks - teks asli
 * @param {number} batas - jumlah karakter maksimum
 * @returns {string} teks yang sudah dipotong
 */
function ringkasTeks(teks, batas) {
    if (teks.length <= batas) {
        return teks;
    }
    const potong = teks.substring(0, batas);
    const spasiTerakhir = potong.lastIndexOf(" ");
    return potong.substring(0, spasiTerakhir) + "...";
}

/**
 * Membuat string HTML satu kartu destinasi.
 * @param {Object} item - object destinasi
 * @returns {string} HTML kartu
 */
function buatKartu(item) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card kartu-destinasi h-100">
                <div class="overflow-hidden">
                    <img src="${item.gambar}" class="card-img-top" alt="${item.nama}">
                </div>
                <div class="card-body d-flex flex-column p-4">
                    <div class="mb-2 d-flex justify-content-between align-items-center gap-2">
                        <span class="badge badge-kat kat-${item.kategori} px-3 py-2 rounded-pill">${item.kategori}</span>
                        <small class="text-muted text-end"><i class="fas fa-map-marker-alt text-danger me-1"></i>${item.lokasi}</small>
                    </div>
                    <h4 class="card-title nama-destinasi mt-2">${item.nama}</h4>
                    <p class="card-text text-muted small flex-grow-1">${ringkasTeks(item.deskripsi, 110)}</p>
                    <button type="button" class="btn btn-outline-hijau btn-sm mt-3 w-100 py-2 rounded-pill fw-semibold btn-detail" data-id="${item.id}">
                        <i class="fas fa-info-circle me-1"></i> Lihat Detail
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Menampilkan kartu destinasi ke dalam DOM.
 * Jika data kosong, tampilkan pesan "tidak ditemukan".
 * @param {Array} data - array object destinasi
 */
function tampilkanDestinasi(data) {
    const container = document.getElementById("containerDestinasi");
    const infoJumlah = document.getElementById("infoJumlah");
    let htmlContent = "";

    if (data.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-4 bg-white rounded-4 shadow-sm d-inline-block">
                    <i class="fas fa-search-minus fa-3x text-muted mb-3"></i>
                    <p class="text-muted fs-5 mb-0">Destinasi wisata tidak ditemukan.</p>
                </div>
            </div>
        `;
        infoJumlah.textContent = "Tidak ada destinasi yang cocok.";
        return;
    }

    // Perulangan untuk membangun seluruh kartu
    for (let i = 0; i < data.length; i++) {
        htmlContent += buatKartu(data[i]);
    }

    container.innerHTML = htmlContent;
    infoJumlah.textContent = "Menampilkan " + data.length + " dari " + destinasiWisata.length + " destinasi";
}

/**
 * Menyaring destinasi berdasarkan kategori aktif dan kata kunci pencarian
 * (nama, lokasi, atau kategori), lalu menampilkan hasilnya.
 */
function terapkanFilter() {
    const hasil = destinasiWisata.filter(function (item) {
        const cocokKategori = (kategoriAktif === "Semua") || (item.kategori === kategoriAktif);
        const cocokKata = item.nama.toLowerCase().includes(kataKunci) ||
                          item.lokasi.toLowerCase().includes(kataKunci);
        return cocokKategori && cocokKata;
    });

    tampilkanDestinasi(hasil);
}

/**
 * Mengisi dan membuka modal detail destinasi.
 * @param {number} id - ID destinasi
 */
function bukaModalDetail(id) {
    const destinasi = destinasiWisata.find(function (item) {
        return item.id === id;
    });

    if (destinasi) {
        const gambar = document.getElementById("modalGambar");
        const badge = document.getElementById("modalKategori");

        document.getElementById("modalJudul").textContent = destinasi.nama;
        gambar.src = destinasi.gambar;
        gambar.alt = destinasi.nama;
        badge.textContent = destinasi.kategori;
        badge.className = "badge badge-kategori kat-" + destinasi.kategori + " mb-2 px-3 py-2 rounded-pill";
        document.getElementById("modalLokasi").textContent = destinasi.lokasi;
        document.getElementById("modalHarga").textContent = destinasi.harga;
        document.getElementById("modalDeskripsi").textContent = destinasi.deskripsi;

        // Tampilkan modal dengan Bootstrap 5 Modal API
        const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modalDetail"));
        modal.show();
    }
}

/**
 * Menandai kolom form sebagai valid atau tidak valid.
 * Kolom yang salah diberi class is-invalid beserta pesan kesalahan.
 * @param {HTMLElement} kolom - elemen input/textarea
 * @param {string} idPesan - id elemen invalid-feedback
 * @param {string} pesan - isi pesan kesalahan (kosong jika valid)
 * @returns {boolean} true jika kolom valid
 */
function tandaiKolom(kolom, idPesan, pesan) {
    if (pesan !== "") {
        kolom.classList.add("is-invalid");
        kolom.classList.remove("is-valid");
        document.getElementById(idPesan).textContent = pesan;
        return false;
    }

    kolom.classList.remove("is-invalid");
    kolom.classList.add("is-valid");
    return true;
}

/**
 * Memvalidasi seluruh isian form buku tamu.
 * @returns {boolean} true jika semua kolom valid
 */
function validasiForm() {
    const inputNama = document.getElementById("namaLengkap");
    const inputEmail = document.getElementById("emailTamu");
    const inputPesan = document.getElementById("pesanTamu");
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let pesanNama = "";
    let pesanEmail = "";
    let pesanUlasan = "";

    // Validasi nama: wajib diisi, minimal 3 karakter
    if (inputNama.value.trim() === "") {
        pesanNama = "Nama lengkap wajib diisi.";
    } else if (inputNama.value.trim().length < 3) {
        pesanNama = "Nama minimal 3 karakter.";
    }

    // Validasi email: wajib diisi dan berformat benar
    if (inputEmail.value.trim() === "") {
        pesanEmail = "Alamat email wajib diisi.";
    } else if (!polaEmail.test(inputEmail.value.trim())) {
        pesanEmail = "Masukkan format alamat email yang valid.";
    }

    // Validasi ulasan: wajib diisi, minimal 5 karakter
    if (inputPesan.value.trim() === "") {
        pesanUlasan = "Ulasan atau usulan wajib diisi.";
    } else if (inputPesan.value.trim().length < 5) {
        pesanUlasan = "Ulasan minimal 5 karakter.";
    }

    const validNama = tandaiKolom(inputNama, "pesanNama", pesanNama);
    const validEmail = tandaiKolom(inputEmail, "pesanEmail", pesanEmail);
    const validPesan = tandaiKolom(inputPesan, "pesanUlasan", pesanUlasan);

    return validNama && validEmail && validPesan;
}

/**
 * Menampilkan alert Bootstrap berhasil di atas form.
 * @param {string} nama - nama pengirim yang disapa pada alert
 */
function tampilkanAlertSukses(nama) {
    const areaAlert = document.getElementById("areaAlert");
    const namaAman = nama.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    areaAlert.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <i class="fas fa-check-circle me-2"></i><strong>Terima kasih, ${namaAman}!</strong>
            Ulasan atau rekomendasi Anda berhasil dikirim.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Tutup"></button>
        </div>
    `;
}

/* ==========================================
   Inisialisasi saat halaman dimuat
   ========================================== */
document.addEventListener("DOMContentLoaded", function () {
    tampilkanDestinasi(destinasiWisata);
});

/* ==========================================
   EVENT 1 (input): pencarian nama / lokasi destinasi
   ========================================== */
document.getElementById("inputPencarian").addEventListener("input", function () {
    kataKunci = this.value.toLowerCase().trim();
    terapkanFilter();
});

/* ==========================================
   EVENT 2 (click): filter kategori dan tombol detail
   ========================================== */
const tombolFilterList = document.querySelectorAll(".filter-btn");

for (let i = 0; i < tombolFilterList.length; i++) {
    tombolFilterList[i].addEventListener("click", function () {
        // Pindahkan class active ke tombol yang diklik
        tombolFilterList.forEach(function (tombol) {
            tombol.classList.remove("active");
        });
        this.classList.add("active");

        kategoriAktif = this.getAttribute("data-kategori");
        terapkanFilter();
    });
}

// Tombol "Lihat Detail" dibuat dinamis, sehingga memakai event delegation
document.getElementById("containerDestinasi").addEventListener("click", function (event) {
    const tombol = event.target.closest(".btn-detail");

    if (tombol) {
        bukaModalDetail(parseInt(tombol.getAttribute("data-id"), 10));
    }
});

/* ==========================================
   EVENT 3 (submit): validasi form buku tamu
   ========================================== */
const formBukuTamu = document.getElementById("formBukuTamu");

formBukuTamu.addEventListener("submit", function (event) {
    event.preventDefault(); // cegah halaman dimuat ulang
    document.getElementById("areaAlert").innerHTML = "";

    if (validasiForm()) {
        tampilkanAlertSukses(document.getElementById("namaLengkap").value.trim());
        this.reset();

        // Bersihkan penanda valid setelah form dikosongkan
        this.querySelectorAll(".is-valid, .is-invalid").forEach(function (kolom) {
            kolom.classList.remove("is-valid", "is-invalid");
        });
    }
});