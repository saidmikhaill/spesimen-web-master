// js/kuis.js

// Ambil parameter ID spesimen
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10) || 0;

// Ambil data soal dari quizData
const soalSpesimen = quizData[id] || [];

// Elemen UI
const btnBack      = document.getElementById("btn-back");
const btnNext      = document.getElementById("btn-next");
const quizArea     = document.getElementById("quiz-area");
const emptyMessage = document.getElementById("empty-message");
const container    = document.querySelector(".quiz-options");
const questionText = document.getElementById("quiz-question");
const progressText = document.getElementById("quiz-progress");

let currentIndex = 0;
let skor = 0;

// Setup tombol Kembali
if (btnBack) btnBack.href = `detail.html?id=${id}`;

// Tampilkan soal ke-<index>
function tampilkanSoal(index) {
  const q = soalSpesimen[index];
  questionText.textContent = q.soal;
  progressText.textContent = `Pertanyaan ${index+1} dari ${soalSpesimen.length}`;
  container.innerHTML = "";

  q.pilihan.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = `${String.fromCharCode(65+i)}. ${opt}`;
    div.addEventListener("click", () => pilihJawaban(i));
    container.appendChild(div);
  });

  // sembunyikan Next
  btnNext.classList.add("d-none");
  btnNext.onclick = null;
}

// Handler saat user klik jawaban
function pilihJawaban(pilihan) {
  const benarIndex = soalSpesimen[currentIndex].jawaban;
  const opsiDivs = document.querySelectorAll(".option");

  opsiDivs.forEach((div, i) => {
    div.classList.add("disabled");
    if (i === benarIndex) div.classList.add("benar");
    else if (i === pilihan) div.classList.add("salah-pilih");
    else div.classList.add("salah");
  });

  if (pilihan === benarIndex) skor++;

  // simpan jawaban user
  const key = `answers-${id}`;
  const arr = JSON.parse(localStorage.getItem(key))||[];
  arr[currentIndex] = pilihan;
  localStorage.setItem(key, JSON.stringify(arr));

  // tampilkan tombol Next
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

// Inisiasi quiz
if (soalSpesimen.length > 0) {
  tampilkanSoal(0);
} else {
  quizArea.classList.add("d-none");
  emptyMessage.classList.remove("d-none");
}
