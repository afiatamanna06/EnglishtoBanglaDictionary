const databaseURL = 'https://raw.githubusercontent.com/afiatamanna06/EnglishtoBanglaDictionary/main/database/E2Bdatabase.json';
const PRIME = 921023456789;
const RADIX = 256;
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
        /*  A 7 characters Unicode word may map to approximately 10^17 (256^7) size integer. In JS, Number
            type has max limit of a decimal number of approximately 16 digits.
            Thus a word cannot be mapped to number more than that. So taking
            the remainder of a prime which is of 12 digits in decimal, so 
            that the multiplication val*RADIX never crosses a number that is 
            more than 16 digits.

            One complication of this is that there might be cases where two 'different'
            words mapping to the 'same' numerical key value even though theoretically
            every (a, b) should have generated a unique key pair (r, s). We can show
            that this possibility is very very low since in practice total number of words
            is only around ~17000 and the chance that two different words map to the
            same integer k (mod PRIME) is 17000/PRIME = 17000/921023456789 ~ 1.8e-6%
        */

        for (var i = 0; i < word.length; i++) {
            val = ((val * RADIX) % PRIME + word.charCodeAt(i)) % PRIME;
        }

        // Javascript Number type has a max safe value of some 16 digits integer
        // Since max(a) = 12 digit decimal and max(val) = 12 digit decimal, so
        // their product might cross that limit. Thus BigInt has been used. The
        // result is ultimately converted to Number type by taking remainder

        const aB = BigInt(a);
        const valB = BigInt(val);
        const primeB = BigInt(PRIME);
        const bB = BigInt(b);
        const outp = (aB * valB + bB) % primeB;

        return Number(outp);
    }

    calculateSecondaryHash(a, b, m, word) {
        const aB = BigInt(a);
        const keyB = BigInt(this.convertFromWordToKey(word));

        return ((Number((aB * keyB) % BigInt(PRIME)) + b) % PRIME) % m;
    }

    generateSecondaryHash(returnArray, primaryHashValue) {
        // returnArray refers to the hashtable[i] where finally the secondary hashtable should be implemented.

        var finalArrayLength = returnArray.length * returnArray.length;
        var finalArray = new Array(finalArrayLength).fill(null);

        // Make a copy of the returnArray that currently holds the indices who map to the same primaryHashValue.
        var initialArray = Array.from(returnArray);

        // Checking if collision occurs
        var a = Math.floor(Math.random() * (PRIME - 1)) + 1;
        var b = Math.floor(Math.random() * PRIME);

        // Error Handling
        var itr = 0;

        while (this.collisionDetected(a, b, finalArrayLength, initialArray, finalArray)) {
            // For avoiding infinite loop in case of duplicate words or other unexpected errors. Ideally the lines inside the if condition should never run.
            itr = itr + 1;
            if (itr > 100) {
                console.log('a = ' + a + ", b = " + b);
                console.log('Final Length: ' + finalArrayLength);
                console.log('The array: ');
                for (var i = 0; i < returnArray.length; i++) {
                    console.log(dictionary.database[returnArray[i]].en)
                    console.log('Word Index: ' + returnArray[i]);
                    console.log("Key: " + this.convertFromWordToKey(dictionary.database[returnArray[i]].en));
                    console.log('Secondary Hashing: ' + this.calculateSecondaryHash(a, b, finalArrayLength, dictionary.database[returnArray[i]].en))
                }
                console.log('\n')
                console.log('Final array: ')
                for (var i = 0; i < finalArray.length; i++) {
                    console.log(i + ' ' + finalArray[i]);
                }

                throw Error('Too many iterations required!');
            }

            a = Math.floor(Math.random() * (PRIME - 1)) + 1;
            b = Math.floor(Math.random() * PRIME);

            // If collision is detected, it means the generated finalArray is wrong and should be reset
            finalArray.fill(null);
        }
        // while loop exists with finalArray completely generated since it was passed by reference
        // Save the values for a, b, and m
        this.hashTableKeys[primaryHashValue] = [a, b, finalArrayLength];

        return finalArray;
    }
}

function searchBengali() {
    var searchInput = document.getElementById('search-meaning');
    var word = searchInput.value.toLowerCase();
    var output = document.getElementById('meaning');
}