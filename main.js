const databaseURL = 'https://raw.githubusercontent.com/afiatamanna06/EnglishtoBanglaDictionary/main/database/E2Bdatabase.json';
const PRIME = 921023456789;
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

    convertFromWordToKey(word) {
        // taking lowercase word
        var val = 0;
        var a = Math.floor(Math.random() * (PRIME - 1)) + 1;
        var b = Math.floor(Math.random() * PRIME);

        // Check if the hash has already been implemented and a, b values are already defined. 
        // Otherwise creates new hashTable
        if (this.primaryHashA == null || this.primaryHashB == null) {
            this.primaryHashA = a;
            this.primaryHashB = b;
        } else {
            a = this.primaryHashA;
            b = this.primaryHashB;
        }
    }
}

function searchBengali() {
    var searchInput = document.getElementById('search-meaning');
    var word = searchInput.value.toLowerCase();
    var output = document.getElementById('meaning');
}