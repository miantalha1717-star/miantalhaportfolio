let count = 12458;
function sendDurood() {
    count++;
    document.getElementById('count').textContent = count;
    alert('Durood sent! ﷺ');
}

const verses = [
    { arabic: "﴿إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ﴾", trans: "Indeed, Allah and His angels send blessings upon the Prophet.", ref: "Al-Ahzab 33:56" }
    // Add more verses here
];

function newVerse() {
    const v = verses[Math.floor(Math.random() * verses.length)];
    document.getElementById('arabic').innerHTML = v.arabic;
    document.getElementById('translation').textContent = v.trans;
    document.getElementById('ref').textContent = v.ref;
}

function copyVerse() {
    const text = document.getElementById('verse-card').innerText;
    navigator.clipboard.writeText(text);
    alert('Verse copied!');
}
