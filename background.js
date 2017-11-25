getLyrics = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://genius.com/search?q=" + query});
 };

chrome.contextMenus.create({
 title: "Get lyrycs",
 contexts:["selection"],  // ContextType
 onclick: getLyrics // A callback function
});