chrome.runtime.onMessage.addListener(function(data) {
	const up = new URLSearchParams(document.location.search);
	if (up.has('page')) {
		if (data.cmd == "read") { document.location = '?' + up.get('page'); return; }
		document.location = '?cmd=' + data.cmd + '&' + data.pagekey + '=' + up.get('page');
		return;
	}
	if (data.cmd == "read") { document.location = '?' + up.toString().slice(0, -1); return; }
	if (!up.toString()) { document.location = '?cmd=' + data.cmd + '&' + data.pagekey + '=FrontPage'; return;}
	document.location = '?cmd=' + data.cmd + '&' + data.pagekey + '=' + up.toString().slice(0, -1);
});
