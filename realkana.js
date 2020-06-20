// Words
// JP, English
var words = [
    ['えんぴつ', 'pencil', false],
    ['かさ', 'umbrella', false],
    ['かばん', 'bag', false],
    ['くつ', 'shoes', false],
    ['さいふ', 'wallet', false],
    ['ジーンズ', 'jeans', false],
    ['じしょ', 'dictionary', false],
    ['じてんしゃ', 'bicycle', false],
    ['しんぶん', 'newspaper', false],
    ['Tシャツ', 'tshirt', false],
    ['とけえ', 'clock', false],
    ['ノート', 'notebook', false],
    ['ペン', 'pen', false],
    ['ぼうし', 'hat', false],
    ['ほん', 'book', false]
];
var wordsShown = 0;
var score = 0;
var unique = 1;
var word;
var question = 0;
var answer = 1;

function onLoad() {
    word = words[Math.floor(Math.random() * words.length)];
    word[2] = true;
    document.getElementById('word').innerHTML = word[question];
}

function keyPress() {
    if (event.key === 'Enter') {
        next();
    }
}

function next() {
    wordsShown++;
    var input = document.getElementById('input').value;
    if (input === word[answer]) {
        document.getElementById('answer').innerHTML = '✓';
        score++;
    } else {
        document.getElementById('answer').innerHTML = `✘ Answer was ${word[answer]}`;
    }
    document.getElementById('score').innerHTML = `Score: ${score}/${wordsShown}`;
    word = words[Math.floor(Math.random() * words.length)];
    if (word[2] === false) unique++;
    word[2] = true;
    document.getElementById('word').innerHTML = word[question];
    document.getElementById('input').value = '';
    document.getElementById('uniques').innerHTML = `${unique}/${words.length} Unique Words Shown`;
}

function swapLang() {
    if (question === 1) {
        question = 0;
        answer = 1;
    } else {
        question = 1;
        answer = 0;
    }
    wordsShown = 0;
    score = 0;
    unique = 1;
    for (var i = 0; i < words.length; i++) {
        words[i][2] = false;
    }
    onLoad();
}