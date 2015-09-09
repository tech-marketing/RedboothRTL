chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null,{code:"toggleRTLPresence()"},function(results){
		chrome.browserAction.setBadgeText ( { text: results[0] ||  ""} );
	});
});