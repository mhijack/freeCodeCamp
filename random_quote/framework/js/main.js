const quote = document.getElementById('quote');
const author = document.getElementById('author');
const quoteBtn = document.getElementById('new');
const tweeterBt = document.getElementById('tweeterBtn');

quoteBtn.addEventListener('click', function () {
    function createAjaxRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if('withCredentials' in xhr) {
            xhr.open(method, url, true);
        } else {
            xhr = null;
        }
        return xhr;
    }

    // function getTitle(text) {
    //     return text.match('<title>(.*)?</title>')[0];
    // }

    function makeCorsRequest() {

        const url = 'https://talaikis.com/api/quotes/random/';
        const xhr = createAjaxRequest('GET', url);

        if(!xhr) {
            alert('CORS not supported');
            return;
        }

        xhr.onload = function() {
            const text = xhr.responseText;
            // const title = getTitle(text);
            const data = JSON.parse(text);
            if(data.quote.length < 125) {
                author.innerHTML = authorHTML(data);
                quote.innerHTML = quoteHTML(data);
            } else {
                return makeCorsRequest();
            }
        };

        xhr.onerror = function() {
            alert('error');
        };

        xhr.send();
    }

    function authorHTML(data) {
        let string = '';
        string += data.author;
        return ' - ' + string;
    }

    function quoteHTML(data) {
        return data.quote;
    }

    makeCorsRequest();
});

tweeterBtn.addEventListener('mouseover', function() {

    document.getElementById('tweet').href = 'https://twitter.com/intent/tweet?text=' + '"' + quote.innerHTML + '"' + author.innerHTML + '#quoteoftheday';
});
