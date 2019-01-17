
const bands = [
    'Alesana',
    'All Time low',
    'Ancud',
    'Andy Black',
    'Asking Alexandria',
    'Avenged Sevenfold',
    'Beyond Unbroken',
    'Black Sabbath',
    'Black Veil Brides',
    'Bring Me The Horizon',
    'Bruce Dickinson',
    'Bullet For My Valentine',
    'Danny Worsnop',
    'Escape The Fate',
    'Fall Out Boy',
    'Falling In Reverse',
    'Feeling Every Sunset',
    'From First To Last',
    'German Garmendia',
    'Ghost B.C.',
    'Green Day',
    'Human Fortress',
    'Iron Maiden',
    'Jacky Vincent',
    'John 5',
    'Krewella',
    'LEDGER',
    'Lindsey Stirling',
    'Linkin Park',
    'Lostprophets',
    'Mägo de Oz',
    'Marilyn Manson',
    'Metallica',
    'Motionless In White',
    'Mushroomhead',
    'My chemical Romance',
    'Myrath',
    'Nirvana',
    'Ozzy Osbourne',
    'Panic! At The Disco',
    'Paramore',
    'Pierce The Veil',
    'ROAM',
    'SABATON',
    'Simple Plan',
    'Skillet',
    'Sleeping With Sirens',
    'Slipknot',
    'System of a Down',
    'Three Days Grace',
    'Twenty One Pilots',
    'Twilight Force',
    'Upon This Dawning',


]
function strip(bandName){
    return bandName.replace(/^(a |the|an )/i, '').trim();
}

const sortedBands = bands.sort((a,b) =>  (strip(a) > strip(b)) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
console.table(sortedBands);