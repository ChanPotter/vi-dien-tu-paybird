import { LitElement, html, css } from 'lit';

export class SaveButton extends LitElement {
	static styles = css`
		button {
			width: 100%;
			padding: 0.5rem 0;
			background-color: #2563eb; /* bg-blue-600 */
			color: white;
			border-radius: 1rem; /* rounded-2xl */
			border-color: #1a73e8;
			outline: none;
			transition: background-color 0.2s;
			margin-bottom: 0.7rem;
			font-size: 0.9rem;
		}
		button:hover {
			background-color: #1a73e8; /* hover:bg-[#1A73E8] */
		}
		button:focus {
			outline: none;
		}
	`;

	render() {
		return html`<button>Lưu</button>`;
	}
}

customElements.define('save-button', SaveButton);
