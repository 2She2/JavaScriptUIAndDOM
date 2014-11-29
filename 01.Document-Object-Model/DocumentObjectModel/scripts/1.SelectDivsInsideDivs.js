// 1.Write a script that selects all the div nodes that are directly inside other div elements
//      Create a function using querySelectorAll()
//      Create a function using getElementsByTagName()


selectDivsInsideDivs();

function selectDivsInsideDivs() {
    var tagName = 'div';

    getInnerTagsWithQuerySelectorAll(tagName);
    getInnerTagsWithGetElementsByTagName(tagName);

    function getInnerTagsWithQuerySelectorAll(tagName) {
        var queryDivs = document.querySelectorAll(tagName + '>' + tagName);

        for (var i = 0, len = queryDivs.length; i < len; i++) {
            console.log(queryDivs[i].innerHTML);
        }
    }

    function getInnerTagsWithGetElementsByTagName(tagName) {
        var allDivs = document.getElementsByTagName(tagName);

        for (var i = 0, l = allDivs.length; i < l; i++) {
            var currChild = allDivs[i];

            if (currChild.parentNode.tagName.toLocaleLowerCase() == tagName) {
                console.log(currChild.innerHTML);
            }
        }
    }
}