// js/kuis.js


// Ambil ID spesimen & data soal
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'), 10);
const soalSpesimen = quizData[id] || [];

let currentIndex = 0;
let skor = 0;

// Elemen-elemen UI
const container   = document.querySelector(".quiz-options");
const questionText= document.getElementById("quiz-question");
const progressText= document.getElementById("quiz-progress");
const btnNext     = document.getElementById("btn-next");
const btnBack     = document.getElementById("btn-back");

// Setup tombol Kembali
if (btnBack) {
  btnBack.href = `detail.html?id=${id}`;
}

// Tampilkan satu soal
function tampilkanSoal(index) {
  const q = soalSpesimen[index];
  questionText.textContent = q.soal;
  progressText.textContent = `Pertanyaan ${index + 1} dari ${soalSpesimen.length}`;
  container.innerHTML = "";

  q.pilihan.forEach((opsi, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = `${String.fromCharCode(65 + i)}. ${opsi}`;
    div.addEventListener("click", () => pilihJawaban(i));
    container.appendChild(div);
  });

  // Sembunyikan tombol Next
  if (btnNext) {
    btnNext.classList.add("d-none");
    btnNext.onclick = null;
  }
}

// Saat pengguna memilih jawaban
function pilihJawaban(pilihan) {
  const benarIndex = soalSpesimen[currentIndex].jawaban;
  const opsiDivs = document.querySelectorAll(".option");

  // Tandai benar/salah
  opsiDivs.forEach((div, i) => {
    div.classList.add("disabled");
    if (i === benarIndex) div.classList.add("benar");
    else if (i === pilihan) div.classList.add("salah-pilih");
    else div.classList.add("salah");
  });

  // Hitung skor
  if (pilihan === benarIndex) skor++;

  // **Simpan jawaban** setelah memilih
  const answersKey = `answers-${id}`;
  let existing = JSON.parse(localStorage.getItem(answersKey)) || [];
  existing[currentIndex] = pilihan;
  localStorage.setItem(answersKey, JSON.stringify(existing));

  // Tampilkan tombol Next
  if (btnNext) {
    btnNext.classList.remove("d-none");
    btnNext.onclick = () => {
      currentIndex++;
      if (currentIndex < soalSpesimen.length) {
        tampilkanSoal(currentIndex);
      } else {
        window.location.href = `hasil.html?score=${skor}&total=${soalSpesimen.length}&id=${id}`;
      }
    };
  }
}

// Mulai kuis atau tampilkan pesan kalau kosong
if (soalSpesimen.length > 0) {
  tampilkanSoal(currentIndex);
} else {
  document.getElementById("quiz-area").classList.add("d-none");
  document.getElementById("empty-message").classList.remove("d-none");
}
