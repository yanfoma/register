
const docnews = (document.currentScript || document._currentScript).ownerDocument;

class SignIn extends HTMLElement {

	//Constructeur à faire plus tard

	connectedCallback() {
		var signup = docnews.querySelector('#news-signin').content;
		const shadowRoot = this.attachShadow({mode: 'open'});
		const instance = document.importNode(signup, true);
		shadowRoot.appendChild(instance);
	}
}

window.customElements.define('news-signin', SignIn);
