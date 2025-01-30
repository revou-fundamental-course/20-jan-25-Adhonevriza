function reset_data() {
    document.getElementById('input-berat-badan').value = '';
    document.getElementById('input-tinggi-badan').value = '';
    document.getElementById('input-usia').value = '';
    document.getElementById('result-bmi').innerText = '0.00';
    document.querySelector('.nilai-hasil').innerText = '';
    document.querySelector('input[name="kelamin"]:checked').checked = false; // Menghapus pilihan jenis kelamin
    document.querySelector(".jenis-bmi").innerText = ``;

    // Mereset kategori dan penjelasan
    document.querySelector(".identitas-diri").innerText = ``;
    document.querySelector(".informasi-tambahan").innerText = ``;
    document.querySelector(".keterangan-hasil").innerText = `Hasil Perhitungan BMI Anda Akan Ditampilkan Di Sini`;
    document.querySelector(".informasi-hasil").innerText = ``;
    document.querySelector(".jenis-kelamin").innerText = ``;
    document.querySelector(".berat-badan").innerText   = ``;
    document.querySelector(".tinggi-badan").innerText  = ``;
    document.querySelector(".usia").innerText          = ``;
    document.querySelector(".nilai-hasil").innerText = ``;
    
    // Display Penyakit
    document.querySelector(".container-penyakit").style.display = 'none';

    // Mereset tombol konsultasi
    document.querySelector("#konsul-ahli-gizi").style.display = 'none';
    document.querySelector("#regis-online").style.display = 'none';
}

function calculate() {
    // Mendapatkan nilai dari input
    let genderElement = document.querySelector('input[name="kelamin"]:checked'); // Ambil elemen radio yang dipilih
    let weight = parseFloat(document.getElementById('input-berat-badan').value);
    let height = parseFloat(document.getElementById('input-tinggi-badan').value) / 100; // Mengonversi cm ke meter
    let age = parseFloat(document.getElementById('input-usia').value);

    // Memeriksa apakah semua input telah diisi
    if (!genderElement || isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Mohon isi semua bagian form yang tersedia");
        return; // Menghentikan eksekusi jika ada input yang tidak valid
    }

    if (height <= 0 || age <= 0 || weight <= 0) {
        alert("Mohon isi semua bagian form dengan data yang valid");
        return; // Menghentikan eksekusi jika ada input yang tidak valid
    }

    // Menghitung BMI
    const bmi = weight / (height * height);
    document.getElementById('result-bmi').innerText = bmi.toFixed(2);
    displayBMI(bmi, genderElement, weight, height, age);
}

function displayBMI(bmi, genderElement, weight, height, age) {
    let category, nilai, explanation;
    let gender = genderElement.value; // Ambil nilai dari input radio

    // Kategori BMI
    // Kurus
    if (bmi < 18.5) {
        document.querySelector(".container-penyakit").style.display = 'block';
        penyakit_1 = "Anemia";
        penyakit_2 = "Osteoporosis";
        penyakit_3 = "Masalah Kesuburan";
        penyakit_4 = "Penyakit Jantung";
        category = "Kekurangan Berat Badan";
        hasil = "Kekurangan Berat Badan";
        nilai = "Hasil BMI berada di bawah 18,5";
        explanation = "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk meningkatkan berat badan adalah meningkatkan pola makan dengan memilih makanan padat kalori dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk meningkatkan berat badan hingga batas ideal.";
    }
    
    // Ideal
    else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat Badan Ideal";
        nilai = "Hasil BMI berada di antara 18 dan 25";
        explanation = "Anda berada dalam kategori normal (ideal). Cara terbaik untuk mempertahankan berat badan adalah mengatur dan mempertahankan pola makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk mempertahankan berat badan yang ideal ini.";
    }
    
    // Kegemukan
    else if (bmi >= 25 && bmi < 29.9) {
        document.querySelector(".container-penyakit").style.display = 'block';
        penyakit_1 = "Diabetes";
        penyakit_2 = "Hipertensi";
        penyakit_3 = "Sakit Jantung";
        penyakit_4 = "Osteoarthritis";
        category = "Berat Badan Berlebih";
        hasil = "kegemukan";
        nilai = "Hasil BMI berada di antara 25 dan 30";
        explanation = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah mengatur kalori makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }
    
    // Obesitas
    else {
        document.querySelector(".container-penyakit").style.display = 'block';
        penyakit_1 = "Diabetes";
        penyakit_2 = "Hipertensi";
        penyakit_3 = "Sakit Jantung";
        penyakit_4 = "Osteoarthritis";
        category = "Obesitas";
        hasil = "Obesitas";
        nilai = "Hasil BMI berada di atas 30";
        explanation = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah mengatur kalori makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }

    // Menampilkan kategori dan penjelasan
    document.querySelector(".identitas-diri").innerText = `Identitas Diri :`;
    document.querySelector(".jenis-bmi").innerText = `BMI untuk ${gender}`;
    document.querySelector(".informasi-tambahan").innerText = `BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan risiko penyakit seseorang. Anda dapat berkonsultasi lebih lanjut mengenai risiko dan kekhawatiran Anda terkait dengan berat badan Anda.`;
    document.querySelector(".keterangan-hasil").innerText = `Anda Memiliki ${category}`;
    document.querySelector(".informasi-hasil").innerText = `${explanation}`;
    document.querySelector(".jenis-kelamin").innerText = `● Jenis Kelamin : ${gender}`;
    document.querySelector(".berat-badan").innerText   = `● Berat Badan   : ${weight} kg`;
    document.querySelector(".tinggi-badan").innerText  = `● Tinggi Badan  : ${height} m`;
    document.querySelector(".usia").innerText          = `● Usia          : ${age} tahun`;
    document.querySelector(".nilai-hasil").innerText = `${nilai}`;

    // Hasil Penyakit
    document.querySelector(".hasil-tingkat-gemuk").innerText = `Beberapa Penyakit yang Berasal dari ${hasil} :`;
    document.querySelector(".penyakit-1").innerText = `${penyakit_1}`;
    document.querySelector(".penyakit-2").innerText = `${penyakit_2}`;
    document.querySelector(".penyakit-3").innerText = `${penyakit_3}`;
    document.querySelector(".penyakit-4").innerText = `${penyakit_4}`;

    // Untuk tombol konsultasi
    document.querySelector("#konsul-ahli-gizi").innerText = `Konsultasi Ahli Gizi via Halodoc`;
    document.querySelector("#konsul-ahli-gizi").style.display = 'inline-block';
    document.querySelector("#regis-online").innerText = `Registrasi Online Sekarang`;
    document.querySelector("#regis-online").style.display = 'inline-block';
}