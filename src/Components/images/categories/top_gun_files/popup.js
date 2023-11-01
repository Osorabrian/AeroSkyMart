(function () {
	const SCRIPT_URL = 'https://rush.seguno.com/popup/popup-loader.js';
	const scriptTag = document.createElement('script');
	scriptTag.type = 'module';
	scriptTag.src = SCRIPT_URL;
	scriptTag.async = true;
	document.body.appendChild(scriptTag);
})();
