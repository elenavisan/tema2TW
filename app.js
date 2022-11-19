function addTokens(input, tokens){
      // - `input` trebuie sa fie de tip `string`. Daca alt tip este pasat ca si parametru aruncati `Error` cu mesajul 
    // `Input should be a string`; (0.5 pts)
    if (typeof input !== 'string') {
        throw new Error('Invalid input');
    }

    // - `input` trebuie sa aiba cel putin 6 caractere ca si lungime. Daca dimensiunea `input-ului` este mai mica de 6, 
    // aruncati `Error` cu mesajul `Input should have at least 6 characters`; (0.5 pts)
    if (input.trim().length < 6) {
        throw new Error('Input should have at least 6 characters');
    }

    // - `tokens` este un vector de elemente cu urmatorul format: `{tokenName: string}`. 
    // Daca urmatorul format nu este respectat, aruncati `Error` cu urmatorul mesaj `Invalid array format`; (0.5 pts)
    if (Array.isArray(tokens)) {
        tokens.forEach((token) => {
            if (typeof token.tokenName !== 'string') {
                throw new Error('Invalid array format');
            }
        });
    } else throw new Error('Invalid array format');

    // - Daca `input` nu contine `...` returnati valoarea initiala a `input-ului`; (0.5 pts)
    // - Daca `input` contine `...`, inlocuiti-le cu valorile specifice si returnati noul `input`; (0.5 pts)
    var i = 0;
    if (input.includes('...')) {
        var newInput = input.replace('...', '${' + tokens[i].tokenName + '}');
        i++;
        while (i < tokens.length) {
            if (newInput.includes('...')) {
                var newInput = newInput.replace('...', '${' + tokens[i].tokenName + '}');
            }
            i++;
        }
        return newInput;
    } else return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;