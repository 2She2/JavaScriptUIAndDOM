window.onload = function () {
    'use strict'
    var innerUls = document.querySelectorAll('#container>ul>li ul'),
        curUl,
        i, j, l, len,
        allLi,
        curLi;

    // hide all lists
    for (i = 0, l = innerUls.length; i < l; i++) {
        curUl = innerUls[i];
        curUl.style.display = 'none';
    }

    allLi = document.querySelectorAll('#container>ul li');

    // add Event Listeners to all list items
    for (j = 0, len = allLi.length; j < len; j++) {
        curLi = allLi[j];
        curLi.addEventListener('click', onLiClick);
        curLi.style.cursor = 'pointer';
    }

    function onLiClick(e) {
        var innerUls = e.target.children,
            currentUl,
            j;

        for (j = 0, l = innerUls.length; j < l; j++) {
            currentUl = innerUls[j];

            if (currentUl.style.display === 'none') {
                currentUl.style.display = 'block';
            }
            else {
                currentUl.style.display = 'none';
            }
        }

        // we need this to stop apply click to the parents
        e.cancelBubble = true;
    };
};