$("#read").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "read",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#edit").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "edit",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#source").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "source",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#backup").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "backup",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#diff").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "diff",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#newpage").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "newpage",
			pagekey: "refer",
			tab: tabs[0]
		});
	});
});
$("#attach").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "attach",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
$("#search").on("click", () => {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			cmd: "search",
			pagekey: "page",
			tab: tabs[0]
		});
	});
});
