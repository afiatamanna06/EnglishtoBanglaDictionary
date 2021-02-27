const databaseURL = 'https://raw.githubusercontent.com/afiatamanna06/EnglishtoBanglaDictionary/main/database/E2Bdatabase.json';

class Dictionary {
    database
    numberOfWords
}

class Hashing {
    hashTable;
    hashTableKeys;
    primaryHashA = null;
    primaryHashB = null;

    initializeHashTable() {
        this.hashTable = new Array(dictionary.numberOfWords);
        for (var i = 0; i < dictionary.numberOfWords; i++) {
            this.hashTable[i] = [];
        }
        this.hashTableKeys = new Array(dictionary.numberOfWords).fill(null);
    }
}

function searchBengali() {
    var searchInput = document.getElementById('search-meaning');
    var word = searchInput.value.toLowerCase();
    var output = document.getElementById('meaning');
}