const docnews = (document.currentScript || document._currentScript).ownerDocument;

class ResetPaword extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var resetpass = docnews.querySelector('#reset-password').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(resetpass, true);
		shadowRoot.appendChild(instance);
	}
}

window.customElements.define('reset-password', ResetPaword);
