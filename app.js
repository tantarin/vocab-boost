const words = [
  { word:'Самобытный', part:'прилагательное', level:'B2', meaning:'Своеобразный, идущий своим путём, не похожий на других.', example:'«У режиссёра самобытный взгляд на знакомые истории».' },
  { word:'Лаконичный', part:'прилагательное', level:'B1', meaning:'Краткий, ясный и выразительный.', example:'«Она дала лаконичный, но исчерпывающий ответ».' },
  { word:'Щепетильный', part:'прилагательное', level:'C1', meaning:'Строго и принципиально относящийся к тонкостям поведения.', example:'«Он щепетилен в вопросах профессиональной этики».' },
  { word:'Предвосхитить', part:'глагол', level:'C1', meaning:'Заранее угадать или сделать раньше ожидаемого.', example:'«Эта идея предвосхитила своё время».' },
  { word:'Иносказательный', part:'прилагательное', level:'C1', meaning:'Выражающий мысль не прямо, а через образ или намёк.', example:'«Притча имеет иносказательный смысл».' }
];

let index = Number(localStorage.getItem('vocab-index') || 0) % words.length;
let learned = JSON.parse(localStorage.getItem('vocab-learned') || '[]');
const $ = id => document.getElementById(id);

function renderWord() {
  const item = words[index];
  $('wordLevel').textContent = item.level; $('wordPart').textContent = item.part;
  $('wordTitle').textContent = item.word; $('wordMeaning').textContent = item.meaning;
  $('wordExample').textContent = item.example; $('wordCard').classList.remove('revealed');
}
function renderProgress() {
  $('learnedCount').textContent = learned.length; $('progressBar').style.width = `${Math.min(learned.length / 5 * 100, 100)}%`;
  $('collectionCount').textContent = learned.length;
  $('wordList').innerHTML = learned.length ? learned.map(word => `<article><h3>${word.word}</h3><p>${word.meaning}</p></article>`).join('') : '<p class="empty">Здесь появятся слова, которые ты запомнил.</p>';
}
function nextWord() { index = (index + 1) % words.length; localStorage.setItem('vocab-index', index); renderWord(); }

$('wordCard').addEventListener('click', () => $('wordCard').classList.add('revealed'));
$('revealButton').addEventListener('click', e => { e.stopPropagation(); $('wordCard').classList.add('revealed'); });
$('skipButton').addEventListener('click', nextWord);
$('knowButton').addEventListener('click', () => { const item=words[index]; if(!learned.some(x=>x.word===item.word)) learned.push(item); localStorage.setItem('vocab-learned',JSON.stringify(learned)); renderProgress(); nextWord(); });
$('soundButton').addEventListener('click', e => { e.stopPropagation(); if ('speechSynthesis' in window) { speechSynthesis.cancel(); speechSynthesis.speak(new SpeechSynthesisUtterance(words[index].word)); } });

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab,.screen').forEach(el => el.classList.remove('active'));
  tab.classList.add('active'); $(tab.dataset.screen).classList.add('active');
}));

const quiz = words[1];
const options = ['Краткий и выразительный','Очень подробный','Скрытый и двусмысленный'];
$('quizOptions').innerHTML = options.map(option => `<button class="quiz-option">${option}</button>`).join('');
document.querySelectorAll('.quiz-option').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.quiz-option').forEach(x => x.disabled=true);
  const ok=button.textContent===options[0]; button.classList.add(ok?'correct':'wrong');
  if(!ok) document.querySelectorAll('.quiz-option')[0].classList.add('correct');
  $('quizFeedback').textContent=ok?'Верно! Отличное начало.':'Почти. Правильный ответ подсвечен.';
}));

renderWord(); renderProgress();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
