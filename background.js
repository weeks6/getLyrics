getLyrics = function (word) {
    var query = word.selectionText;
    query = query.replace(/\s+/g, '-');
    query = query.replace(/-–-/g, '-');

    chrome.tabs.create({
        url: "https://genius.com/" + query + '-lyrics'});
};

chrome.contextMenus.create({
    title: "Get lyrycs",
    contexts: ["selection"],
    onclick: getLyrics
});