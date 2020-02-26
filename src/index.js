import DevTools from "./app/app";
import { h, render } from 'preact';

let doc;
let images = [];
let created = false;

function createPanel(params) {
	if (created) return;
	created = true;

	chrome.devtools.network.onNavigated.removeListener(createPanel);

	chrome.runtime.onConnect.addListener(function(port) {
		console.assert(port.name == "contentscript");
		port.onMessage.addListener(function(msg) {
			images=msg.images
			initPort()
		});
	});


  function initPort() {

    const root = doc.getElementById("root");
    root.innerHTML = "";
    render(h(DevTools, { images: images }), root);
  }

  chrome.devtools.panels.create("Juno", "", "panel.html", panel => {
		panel.onShown.addListener(window => {
			doc = window.document;
			initPort();
		});

		chrome.devtools.network.onNavigated.addListener(() => {
			initPort();
		});
	});
}
setTimeout(()=>{
	createPanel()
}, 1000);
chrome.devtools.network.onNavigated.addListener(createPanel);
