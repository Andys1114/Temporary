// ==UserScript==
// @name         Redirect 123pan.com to 123pan.cn
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically redirect from 123pan.com to 123pan.cn while keeping the rest of the URL intact.
// @author       Your Name
// @match        *://*.123pan.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var currentUrl = window.location.href;
    
    // Replace 123pan.com with 123pan.cn
    var newUrl = currentUrl.replace('123pan.com', '123pan.cn');
    
    // Redirect to the new URL if it is different
    if (currentUrl !== newUrl) {
        window.location.href = newUrl;
    }
})();
