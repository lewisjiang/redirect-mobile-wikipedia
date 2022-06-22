// ==UserScript==
// @name         RedirectMobileWikipedia
// @match        *://*.m.wikipedia.org/*
// @version      0.1
// @description  Force redirect from mobile ver to desktop ver
// @author       myself
// @icon         https://en.wikipedia.org/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==

// reference: https://greasyfork.org/en/scripts/439848-redirectchinesewikipedia
(function() {
    'use strict';
    let url = window.location.href;
    let desturl = url;
    let header = ".wikipedia.org/";
    let mobile_header = ".m.wikipedia.org/";
    if(url.search(mobile_header) != -1) desturl = url.replace(mobile_header, header);

    window.location.replace(desturl);
})();
