const databaseURL = 'https://raw.githubusercontent.com/afiatamanna06/EnglishtoBanglaDictionary/main/database/E2Bdatabase.json';

class Dictionary {
    database
    numberOfWords
};

function searchBengali() {
    var searchInput = document.getElementById('search-meaning');
    var word = searchInput.value.toLowerCase();
    var output = document.getElementById('meaning');
}