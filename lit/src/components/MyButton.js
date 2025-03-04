import { LitElement, html, css } from 'lit';

export class MyButton extends LitElement {
	static styles = css`
		button {
			color: white;
			background-color: #2563eb;
			border: none;
			border-radius: 0.5rem;
			font-size: 0.875rem;
			padding: 0.65rem 0.7rem;
			cursor: pointer;
			transition: background-color 0.2s;
		}

		button:hover {
			background-color: #1e3a8a;
		}

		button:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.5);
		}
	`;

	static properties = {
		className: { type: String },
	};

	constructor() {
		super();
		this.className = '';
	}

	render() {
		return html`<button
			class="text-white bg-blue-600 hover:bg-blue-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2 me-2 ${this
				.className}"
		>
			<slot></slot>
		</button>`;
	}
}

customElements.define('my-button', MyButton);
