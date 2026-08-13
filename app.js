const phrases = [
  { phrase:'Не откладывать в долгий ящик', type:'устойчивое выражение', level:'B1', meaning:'Не затягивать дело и взяться за него в ближайшее время.', example:'«Давай не будем откладывать разговор в долгий ящик и обсудим всё сегодня».' },
  { phrase:'Смотреть на вещи шире', type:'разговорная фраза', level:'B1', meaning:'Учитывать больше обстоятельств и не ограничиваться одним взглядом.', example:'«Попробуй посмотреть на вещи шире: эта перемена открывает новые возможности».' },
  { phrase:'Оставляет желать лучшего', type:'оценочное выражение', level:'B2', meaning:'Мягкий способ сказать, что качество чего-либо недостаточно хорошее.', example:'«Организация встречи оставляет желать лучшего, но сама идея отличная».' },
  { phrase:'Задать верное направление', type:'деловая фраза', level:'B2', meaning:'Определить полезный ориентир для дальнейших действий или размышлений.', example:'«Первый вопрос задал верное направление всей дискуссии».' },
  { phrase:'Найти точки соприкосновения', type:'устойчивое выражение', level:'C1', meaning:'Обнаружить общие интересы, взгляды или основания для договорённости.', example:'«Несмотря на разногласия, командам удалось найти точки соприкосновения».' },
  { phrase:'Внести ясность в вопрос', type:'деловая фраза', level:'B2', meaning:'Устранить неопределённость и сделать ситуацию понятнее.', example:'«Новые данные помогли внести ясность в вопрос о сроках запуска».' },
  { phrase:'Идти вразрез с ожиданиями', type:'книжное выражение', level:'C1', meaning:'Противоречить тому, чего ожидали окружающие или что считалось вероятным.', example:'«Результаты исследования идут вразрез с нашими первоначальными ожиданиями».' },
  { phrase:'Вальяжная походка', type:'выражение со словом', level:'C1', meaning:'Вальяжный — неторопливый и непринуждённый; так говорят о походке, позе или поведении человека.', example:'«Он вошёл в зал вальяжной походкой, словно никуда не спешил».' },
  { phrase:'Латентная угроза', type:'книжное выражение', level:'C1', meaning:'Латентный — скрытый, не проявляющийся явно.', example:'«Эксперты обнаружили латентную угрозу ещё до появления первых симптомов проблемы».' },
  { phrase:'Абьюзер нарушает личные границы', type:'социальная лексика', level:'B2', meaning:'Абьюзер — человек, который нарушает личные границы, унижает и допускает жестокость в общении.', example:'«Абьюзер часто нарушает личные границы, а затем обесценивает чувства другого человека».' },
  { phrase:'Превентивные меры', type:'деловое выражение', level:'C1', meaning:'Превентивный — предупреждающий возможные события и предпринимаемый заранее.', example:'«Команда приняла превентивные меры, чтобы не допустить утечки данных».' },
  { phrase:'Считать это моветоном', type:'оценочное выражение', level:'C1', meaning:'Моветон — дурной тон, неподобающее поведение или невоспитанность.', example:'«Перебивать собеседника здесь считается моветоном».' },
  { phrase:'Полный нонсенс', type:'оценочное выражение', level:'B2', meaning:'Нонсенс — абсурд или очевидная нелепость.', example:'«Требовать результат без времени на работу — полный нонсенс».' },
  { phrase:'Презентабельный внешний вид', type:'деловое выражение', level:'B2', meaning:'Презентабельный — хорошо и представительно выглядящий, производящий достойное впечатление.', example:'«Для встречи подготовили зал с презентабельным внешним видом».' },
  { phrase:'Фривольное замечание', type:'оценочное выражение', level:'C1', meaning:'Фривольный — нескромный, легкомысленный или излишне вольный.', example:'«Его фривольное замечание было неуместно на официальной встрече».' },
  { phrase:'Аутентичная атмосфера', type:'современное выражение', level:'B2', meaning:'Аутентичный — подлинный, достоверный, соответствующий оригиналу.', example:'«Старинная мебель помогла сохранить аутентичную атмосферу дома».' },
  { phrase:'Приватный разговор', type:'современное выражение', level:'B2', meaning:'Приватный — частный, личный, не предназначенный для посторонних.', example:'«Этот вопрос лучше обсудить в приватном разговоре».' },
  { phrase:'Выйти в неглиже', type:'устойчивое сочетание', level:'C1', meaning:'Неглиже — лёгкая домашняя одежда; также так говорят о небрежно или недостаточно одетом человеке.', example:'«Он не ожидал гостей и вышел в коридор в неглиже».' },
  { phrase:'Рандомный выбор', type:'разговорное выражение', level:'B1', meaning:'Рандомный — случайный или произвольный.', example:'«Сервис сделал рандомный выбор из всех предложенных вариантов».' },
  { phrase:'Эскалация конфликта', type:'общественно-политическое выражение', level:'C1', meaning:'Эскалация — постепенное усиление и разрастание конфликта или противостояния.', example:'«Резкое заявление привело к дальнейшей эскалации конфликта».' },
  { phrase:'Реновация старого здания', type:'архитектурное выражение', level:'C1', meaning:'Реновация — обновление или реконструкция с сохранением целостности основной структуры.', example:'«После реновации старого здания в нём открылось общественное пространство».' },
  { phrase:'Беспрецедентный случай', type:'книжное выражение', level:'C1', meaning:'Беспрецедентный — небывалый, не имеющий подобного примера в прошлом.', example:'«Для отрасли это беспрецедентный случай сотрудничества конкурентов».' },
  { phrase:'Краткий синопсис', type:'литературное выражение', level:'C1', meaning:'Синопсис — сжатое изложение сюжета, темы книги или другого произведения.', example:'«Редактор попросил прислать краткий синопсис будущего романа».' },
  { phrase:'Тремор рук', type:'медицинское выражение', level:'C1', meaning:'Тремор — непроизвольная дрожь, чаще всего заметная в конечностях.', example:'«При сильном волнении у него появился лёгкий тремор рук».' },
  { phrase:'Не стоит утрировать', type:'разговорная фраза', level:'B2', meaning:'Утрировать — намеренно преувеличивать и представлять что-либо в чрезмерном виде.', example:'«Не стоит утрировать: одна ошибка ещё не означает полного провала».' },
  { phrase:'Относиться с пиететом', type:'книжное выражение', level:'C1', meaning:'Пиетет — глубокое уважение и почтительное отношение к кому-либо или чему-либо.', example:'«Она с пиететом относится к трудам своих учителей».' },
  { phrase:'Нелицеприятная оценка', type:'книжное выражение', level:'C1', meaning:'Нелицеприятный — беспристрастный и справедливый, не основанный на желании угодить.', example:'«Эксперт дал проекту нелицеприятную, но аргументированную оценку».' },
  { phrase:'Одиозная фигура', type:'общественно-политическое выражение', level:'C1', meaning:'Одиозный — вызывающий крайне отрицательное отношение, очень неприятный.', example:'«Он приобрёл репутацию одиозной фигуры из-за своих резких высказываний».' },
  { phrase:'Завуалированный отказ', type:'книжное выражение', level:'C1', meaning:'Завуалированный — намеренно выраженный неясно или скрыто.', example:'«Вежливый ответ оказался завуалированным отказом».' },
  { phrase:'Кардинальные изменения', type:'деловое выражение', level:'B2', meaning:'Кардинальный — существенный, меняющий что-либо коренным образом.', example:'«Новая стратегия предполагает кардинальные изменения в работе команды».' },
  { phrase:'Достичь апогея', type:'книжное выражение', level:'C1', meaning:'Апогей — высшая точка или предельная степень развития и расцвета.', example:'«Напряжение достигло апогея к финалу спектакля».' },
  { phrase:'Какой-то сюр', type:'разговорная фраза', level:'B1', meaning:'Сюр — нечто настолько странное и необычное, что напоминает сюрреализм.', example:'«Встреча посреди пустого офиса выглядела как какой-то сюр».' },
  { phrase:'Тривиальное решение', type:'оценочное выражение', level:'C1', meaning:'Тривиальный — банальный, очевидный и лишённый новизны.', example:'«Мы отказались от тривиального решения и попробовали новый подход».' },
  { phrase:'Мой визави', type:'книжное выражение', level:'C1', meaning:'Визави — собеседник или человек, находящийся напротив.', example:'«Мой визави внимательно выслушал предложение и задал два вопроса».' },
  { phrase:'Полезный контент', type:'медиавыражение', level:'B1', meaning:'Контент — информационное наполнение сайта, приложения или другого медиаресурса.', example:'«Авторы регулярно публикуют полезный образовательный контент».' },
  { phrase:'Нелегитимное решение', type:'юридическое выражение', level:'C1', meaning:'Нелегитимный — не признанный законным или не обладающий законными основаниями.', example:'«Участники сочли это решение нелегитимным и потребовали пересмотра».' },
  { phrase:'Меркантильный интерес', type:'оценочное выражение', level:'C1', meaning:'Меркантильный — корыстный, расчётливый, ориентированный прежде всего на материальную выгоду.', example:'«За его участием стоял не энтузиазм, а меркантильный интерес».' },
  { phrase:'Я сегодня corporate girl', type:'зумерский офисный сленг', level:'офис', category:'office', meaning:'Ироничный способ романтизировать свой рабочий день: стильный образ, кофе, ноутбук, созвоны и ощущение деловой героини.', example:'«Надела жакет, взяла айс-латте — всё, я сегодня corporate girl».' },
  { phrase:'Тебе повезло: ты работаешь в офисе', type:'музыкальная отсылка', level:'мем', category:'office', meaning:'Ироничная отсылка к песне группы «Ленинград» об офисной жизни и её внешнем благополучии.', example:'«Опять кондиционер, пропуск и турникет — тебе повезло: ты работаешь в офисе».' },
  { phrase:'Ушла в режим офисной сирены', type:'модная фраза', level:'вайб', category:'office', meaning:'Office siren — эстетика эффектного корпоративного образа с приталенной одеждой, строгими деталями и очками.', example:'«Сегодня важная встреча, поэтому я ушла в режим офисной сирены».' },
  { phrase:'Закину инвайт в календарь', type:'офисный сленг', level:'офис', category:'office', meaning:'Отправлю приглашение на встречу через рабочий календарь.', example:'«Если всем удобно в три, я закину инвайт в календарь».' },
  { phrase:'Давайте засинкаемся', type:'офисный сленг', level:'офис', category:'office', meaning:'Давайте коротко сверим информацию, ожидания и текущее состояние работы.', example:'«Предлагаю засинкаться после обеда и решить, что берём в работу».' },
  { phrase:'Обсудим это на дейлике', type:'офисный сленг', level:'офис', category:'office', meaning:'Вернёмся к вопросу на короткой ежедневной встрече команды.', example:'«Сейчас не будем уходить в детали — обсудим это на дейлике».' },
  { phrase:'Возьму эту таску на себя', type:'офисный сленг', level:'офис', category:'office', meaning:'Я беру ответственность за выполнение этой задачи.', example:'«Возьму эту таску на себя и вернусь с результатом в пятницу».' },
  { phrase:'Это не в моём фокусе', type:'корпоративная фраза', level:'границы', category:'office', meaning:'Вежливый способ обозначить, что задача сейчас не относится к твоим приоритетам.', example:'«В этом квартале это не в моём фокусе, но могу подсказать нужного человека».' },
  { phrase:'Давайте припаркуем этот вопрос', type:'корпоративная фраза', level:'офис', category:'office', meaning:'Предложение временно отложить тему и вернуться к ней позже.', example:'«Мы уходим от повестки — давайте припаркуем этот вопрос».' },
  { phrase:'Вернусь с апдейтом', type:'офисный сленг', level:'офис', category:'office', meaning:'Позже сообщу свежую информацию о состоянии задачи.', example:'«Уточню сроки у команды и вернусь с апдейтом до конца дня».' },
  { phrase:'Нужен быстрый созвон', type:'рабочая фраза', level:'офис', category:'office', meaning:'Вопрос проще и быстрее решить голосом, чем продолжать переписку.', example:'«Кажется, мы по-разному поняли задачу — нужен быстрый созвон».' },
  { phrase:'Можно без митинга?', type:'зумерская офисная фраза', level:'мем', category:'office', meaning:'Ироничная просьба не назначать встречу, если вопрос можно решить одним сообщением.', example:'«Если ответ помещается в два предложения, можно без митинга?».' },
  { phrase:'Этот созвон мог быть письмом', type:'офисный мем', level:'мем', category:'office', meaning:'Так говорят о встрече, которая оказалась лишней и не требовала общего звонка.', example:'«Сорок минут слушали один статус — этот созвон мог быть письмом».' },
  { phrase:'Мой work-life balance вышел из чата', type:'офисный мем', level:'мем', category:'office', meaning:'Ироничное признание, что работа начала занимать слишком много личного времени.', example:'«Третий вечер с ноутбуком — мой work-life balance вышел из чата».' },
  { phrase:'Это мой корпоративный лор', type:'зумерский сленг', level:'мем', category:'office', meaning:'Личная история или внутренний сюжет, понятный коллегам и ставший частью офисной репутации.', example:'«Как я однажды отправила черновик директору — это мой корпоративный лор».' },
  { phrase:'У меня сегодня ноль ресурса', type:'зумерская фраза', level:'границы', category:'office', meaning:'Честный способ сказать, что сейчас мало энергии и возможностей брать дополнительную нагрузку.', example:'«У меня сегодня ноль ресурса на ещё один необязательный созвон».' },
  { phrase:'Я не вывожу этот дедлайн', type:'рабочая фраза', level:'границы', category:'office', meaning:'Прямое сообщение о том, что закончить работу в установленный срок не получается.', example:'«Я не вывожу этот дедлайн без помощи или пересмотра объёма задачи».' },
  { phrase:'Поставим реалистичный дедлайн', type:'рабочая фраза', level:'границы', category:'office', meaning:'Предложение договориться о сроке, который учитывает настоящий объём работы и доступные силы.', example:'«Давайте оценим зависимости и поставим реалистичный дедлайн».' },
  { phrase:'Не хочу быть героем переработок', type:'зумерская офисная фраза', level:'границы', category:'office', meaning:'Отказ считать постоянную сверхурочную работу признаком успеха или преданности компании.', example:'«Я закончу завтра: не хочу быть героем переработок».' },
  { phrase:'Пойду подумаю об увольнении у кофемашины', type:'офисный мем', level:'мем', category:'office', meaning:'Шутливая реакция на неприятную задачу, встречу или внезапную рабочую проблему.', example:'«После третьего срочного комментария пойду подумаю об увольнении у кофемашины».' },
  { phrase:'Главное — создать видимость бурной деятельности', type:'офисная ирония', level:'мем', category:'office', meaning:'Шутка о ситуации, когда внешние признаки занятости ценятся выше реального результата.', example:'«Открыла пять таблиц: главное — создать видимость бурной деятельности».' },
  { phrase:'Я в своей эре карьерного роста', type:'зумерская фраза', level:'вайб', category:'office', meaning:'Ироничное, но мотивирующее описание периода, когда человек особенно сосредоточен на карьере.', example:'«Записалась на курс и попросила повышение — я в своей эре карьерного роста».' }
];

let learned = JSON.parse(localStorage.getItem('phrase-learned') || '[]');
let selectedTopic = localStorage.getItem('phrase-topic') || 'office';
const inTopic = item => selectedTopic === 'office' ? item.category === 'office' : item.category !== 'office';
let activePhrases = phrases.filter(item => inTopic(item) && !learned.some(saved => saved.phrase === item.phrase));
let index = activePhrases.length ? Number(localStorage.getItem('phrase-index') || 0) % activePhrases.length : 0;
const $ = id => document.getElementById(id);

function renderPhrase() {
  const item = activePhrases[index];
  if (!item) {
    $('wordLevel').textContent = '✓';
    $('wordPart').textContent = 'всё готово';
    $('wordTitle').textContent = 'Все фразы запомнены';
    $('wordMeaning').textContent = 'Изученные выражения остались в твоей коллекции.';
    $('wordExample').textContent = 'Новые карточки появятся здесь после следующего обновления.';
    $('wordCard').classList.add('revealed', 'complete');
    $('revealButton').hidden = true;
    $('knowButton').hidden = true;
    return;
  }
  $('wordLevel').textContent = item.level;
  $('wordPart').textContent = item.type;
  $('wordTitle').textContent = item.phrase;
  $('wordMeaning').textContent = item.meaning;
  $('wordExample').textContent = item.example;
  $('wordCard').classList.remove('revealed', 'complete');
  $('revealButton').hidden = false;
  $('knowButton').hidden = false;
}

function renderProgress() {
  const topicPhrases = phrases.filter(inTopic);
  const topicLearned = topicPhrases.filter(item => learned.some(saved => saved.phrase === item.phrase)).length;
  $('learnedCount').textContent = topicLearned;
  $('dailyGoal').textContent = topicPhrases.length;
  $('progressBar').style.width = `${topicPhrases.length ? topicLearned / topicPhrases.length * 100 : 0}%`;
  $('collectionCount').textContent = learned.length;
  $('wordList').innerHTML = learned.length
    ? learned.map(item => `<article><h3>${item.phrase}</h3><p>${item.meaning}</p></article>`).join('')
    : '<p class="empty">Здесь появятся фразы, которые ты запомнил.</p>';
}

function nextPhrase() {
  if (!activePhrases.length) return;
  $('wordCard').classList.add('swiping');
  index = (index + 1) % activePhrases.length;
  localStorage.setItem('phrase-index', index);
  window.setTimeout(() => {
    renderPhrase();
    $('wordCard').classList.remove('swiping');
  }, 140);
}

$('wordCard').addEventListener('click', () => $('wordCard').classList.add('revealed'));
$('revealButton').addEventListener('click', event => { event.stopPropagation(); $('wordCard').classList.add('revealed'); });
$('knowButton').addEventListener('click', () => {
  const item = activePhrases[index];
  if (!item) return;
  if (!learned.some(saved => saved.phrase === item.phrase)) learned.push(item);
  localStorage.setItem('phrase-learned', JSON.stringify(learned));
  activePhrases.splice(index, 1);
  if (index >= activePhrases.length) index = 0;
  localStorage.setItem('phrase-index', index);
  renderProgress();
  renderPhrase();
});
$('soundButton').addEventListener('click', event => {
  event.stopPropagation();
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    if (!activePhrases[index]) return;
    const speech = new SpeechSynthesisUtterance(activePhrases[index].phrase);
    speech.lang = 'ru-RU';
    speechSynthesis.speak(speech);
  }
});

document.addEventListener('keydown', event => {
  if (event.key !== 'ArrowRight' || !$('learn').classList.contains('active')) return;
  event.preventDefault();
  nextPhrase();
});

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => {
  document.querySelectorAll('.tab,.screen').forEach(element => element.classList.remove('active'));
  tab.classList.add('active');
  $(tab.dataset.screen).classList.add('active');
}));

document.querySelectorAll('.topic').forEach(button => button.addEventListener('click', () => {
  selectedTopic = button.dataset.topic;
  localStorage.setItem('phrase-topic', selectedTopic);
  document.querySelectorAll('.topic').forEach(topic => topic.classList.toggle('active', topic === button));
  activePhrases = phrases.filter(item => inTopic(item) && !learned.some(saved => saved.phrase === item.phrase));
  index = 0;
  localStorage.setItem('phrase-index', index);
  renderProgress();
  renderPhrase();
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

document.querySelectorAll('.topic').forEach(topic => topic.classList.toggle('active', topic.dataset.topic === selectedTopic));
renderPhrase();
renderProgress();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
