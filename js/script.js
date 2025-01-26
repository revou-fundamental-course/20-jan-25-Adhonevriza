function calculate() {
    // Mengambil nilai dari input
    const weight = parseFloat(document.getElementById("input-berat-badan").value);
    const height = parseFloat(document.getElementById("input-tinggi-badan").value) / 100; // Konversi cm ke m

    // Menghitung BMI
    const bmi = weight / (height * height);
    document.getElementById("result-bmi").innerText = bmi.toFixed(2); // Menampilkan hasil BMI dengan 2 digit desimal

    // Menentukan kategori BMI dan penjelasan
    let category;
    let explanation;

    if (bmi < 18.5) {
        category = "kekurangan berat badan";
        nilai = "Hasil BMI berada di bawah 18,5";
        explanation = "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk meningkatkan berat badan adalah meningkatkan pola makan dengan memilih makanan padat kalori dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk meningkatkan berat badan hingga batas ideal.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "berat badan ideal";
        nilai = "Hasil BMI berada di antara 18 dan 25";
        explanation = "Anda berada dalam kategori normal (ideal). Cara terbaik untuk mempertahankan berat badan adalah mengatur dan mempertahankan pola makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk mempertahankan berat badan yang ideal ini.";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "berat badan berlebih";
        nilai = "Hasil BMI berada di antara 25 dan 30";
        explanation = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah kengatur kalor makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        category = "obesitas";
        nilai = "Hasil BMI berada di atas 30";
        explanation = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah mengatur kalor makanan yang dikonsumsi dan melakukan kegiatan olahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    }

    // Menampilkan kategori dan penjelasan
    document.querySelector(".keterangan-hasil").innerText = `Anda memiliki ${category}`;
    document.querySelector(".informasi-hasil").innerText = `${explanation}`;
    document.querySelector(".nilai-hasil").innerText = `${nilai}`;
}