//  4.Create a tag cloud:
//      Visualize a string of tags (strings) in a given container
//      By given minFontSize and maxFontSize, generate the tags with different font-size, 
//      depending on the number of occurrences

window.onload = function () {
    var tags = ["cms", "javascript", "js", "ASP.NET MVC", ".net", ".net", "css", "wordpress", "xaml", "js", "http", "web", "asp.net", "asp.net MVC", "ASP.NET MVC", "wp", "javascript", "js", "cms", "html", "javascript", "http", "http", "CMS"],
        container = document.createElement('div');

    generateTagCloud(container, tags, 10, 20);

    document.body.appendChild(container);

    function generateTagCloud(container, tags, minFontSize, maxFontSize) {
        var sortedTags = [],
        elementsCount = 0,
        maxTagAppearance = 0,
        fontSizeStep,
        dFrag = document.createDocumentFragment();

        sortedTags = sortTags(tags);
        maxTagAppearance = findMaxAppearanceTag(sortedTags);
        fontSizeStep = calcFontSizeStep(minFontSize, maxFontSize, maxTagAppearance);
        generateTags(sortedTags, dFrag, fontSizeStep, minFontSize);

        container.appendChild(dFrag);


        function generateTags(tags, documentFragment, fontSizeStep, minFontSize) {
            var currentSpan,
                span = document.createElement('span'),
                currentTagFontSize,
                spaces;

            for (var tag in tags) {
                currentSpan = span.cloneNode(true);
                currentSpan.innerHTML = ' ' + tag + ' ';
                currentTagFontSize = (tags[tag] * fontSizeStep + minFontSize) + 'px';
                currentSpan.style.fontSize = currentTagFontSize;

                // add new line on random
                if (getRandomNumber(1, 4) % 2 == 0) {
                    currentSpan.innerText += '\n';
                }

                // insert random spaces
                spaces = generateRandomSpacesCount(0, 5);
                currentSpan.innerHTML += spaces;

                documentFragment.appendChild(currentSpan);
            }
        }

        function sortTags(tags) {
            var sortedTags = [],
                i,
                currentTag;

            for (i = 0, l = tags.length; i < l; i++) {
                currentTag = tags[i].toLocaleLowerCase();

                if (typeof sortedTags[currentTag] === 'undefined') {
                    sortedTags[currentTag] = 0;
                }

                sortedTags[currentTag] += 1;
            }

            return sortedTags;
        }

        function findMaxAppearanceTag(sortedTags) {
            var maxTagAppearance = 0;

            for (var tag in sortedTags) {
                if (sortedTags[tag] > maxTagAppearance) {
                    maxTagAppearance = sortedTags[tag];
                }
            }

            return maxTagAppearance;
        }

        function calcFontSizeStep(min, max, maxTagAppearance) {
            var fontSizeStep = (max - min) / (maxTagAppearance - 1);

            return fontSizeStep;
        }

        function generateRandomSpacesCount(min, max) {
            var spaces = new Array(getRandomNumber(min, max));
            spaces = spaces.join("&nbsp;");

            return spaces;
        }

        function getRandomNumber(min, max) {
            var randomNumber = Math.random() * (max - min) + min | 0;

            return randomNumber;
        }
    }
}
