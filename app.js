const phrases = [
  { phrase:'Не откладывать в долгий ящик', type:'устойчивое выражение', level:'B1', meaning:'Не затягивать дело и взяться за него в ближайшее время.', example:'«Давай не будем откладывать разговор в долгий ящик и обсудим всё сегодня».' },
  { phrase:'Смотреть на вещи шире', type:'разговорная фраза', level:'B1', meaning:'Учитывать больше обстоятельств и не ограничиваться одним взглядом.', example:'«Попробуй посмотреть на вещи шире: эта перемена открывает новые возможности».' },
  { phrase:'Оставляет желать лучшего', type:'оценочное выражение', level:'B2', meaning:'Мягкий способ сказать, что качество чего-либо недостаточно хорошее.', example:'«Организация встречи оставляет желать лучшего, но сама идея отличная».' },
  { phrase:'Задать верное направление', type:'деловая фраза', level:'B2', meaning:'Определить полезный ориентир для дальнейших действий или размышлений.', example:'«Первый вопрос задал верное направление всей дискуссии».' },
  { phrase:'Найти точки соприкосновения', type:'устойчивое выражение', level:'C1', meaning:'Обнаружить общие интересы, взгляды или основания для договорённости.', example:'«Несмотря на разногласия, командам удалось найти точки соприкосновения».' },
  { phrase:'Внести ясность в вопрос', type:'деловая фраза', level:'B2', meaning:'Устранить неопределённость и сделать ситуацию понятнее.', example:'«Новые данные помогли внести ясность в вопрос о сроках запуска».' },
  { phrase:'Идти вразрез с ожиданиями', type:'книжное выражение', level:'C1', meaning:'Противоречить тому, чего ожидали окружающие или что считалось вероятным.', example:'«Результаты исследования идут вразрез с нашими первоначальными ожиданиями».' }
];

let index = Number(localStorage.getItem('phrase-index') || 0) % phrases.length;
let learned = JSON.parse(localStorage.getItem('phrase-learned') || '[]');
const $ = id => document.getElementById(id);

function renderPhrase() {
  const item = phrases[index];
  $('wordLevel').textContent = item.level;
  $('wordPart').textContent = item.type;
  $('wordTitle').textContent = item.phrase;
  $('wordMeaning').textContent = item.meaning;
  $('wordExample').textContent = item.example;
  $('wordCard').classList.remove('revealed');
}

function renderProgress() {
  $('learnedCount').textContent = learned.length;
  $('progressBar').style.width = `${Math.min(learned.length / 5 * 100, 100)}%`;
  $('collectionCount').textContent = learned.length;
  $('wordList').innerHTML = learned.length
    ? learned.map(item => `<article><h3>${item.phrase}</h3><p>${item.meaning}</p></article>`).join('')
    : '<p class="empty">Здесь появятся фразы, которые ты запомнил.</p>';
}

function nextPhrase() {
  index = (index + 1) % phrases.length;
  localStorage.setItem('phrase-index', index);
  renderPhrase();
}

$('wordCard').addEventListener('click', () => $('wordCard').classList.add('revealed'));
$('revealButton').addEventListener('click', event => { event.stopPropagation(); $('wordCard').classList.add('revealed'); });
$('skipButton').addEventListener('click', nextPhrase);
$('knowButton').addEventListener('click', () => {
  const item = phrases[index];
  if (!learned.some(saved => saved.phrase === item.phrase)) learned.push(item);
  localStorage.setItem('phrase-learned', JSON.stringify(learned));
  renderProgress();
  nextPhrase();
});
$('soundButton').addEventListener('click', event => {
  event.stopPropagation();
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(phrases[index].phrase);
    speech.lang = 'ru-RU';
    speechSynthesis.speak(speech);
  }
});

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab,.screen').forEach(element => element.classList.remove('active'));
  tab.classList.add('active');
  $(tab.dataset.screen).classList.add('active');
}));

const options = ['Учитывать больше обстоятельств','Сосредоточиться на мелочах','Не менять своего мнения'];
$('quizOptions').innerHTML = options.map(option => `<button class="quiz-option">${option}</button>`).join('');
document.querySelectorAll('.quiz-option').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.quiz-option').forEach(option => { option.disabled = true; });
  const isCorrect = button.textContent === options[0];
  button.classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) document.querySelectorAll('.quiz-option')[0].classList.add('correct');
  $('quizFeedback').textContent = isCorrect ? 'Верно! Именно так.' : 'Почти. Правильный смысл подсвечен.';
}));

renderPhrase();
renderProgress();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
