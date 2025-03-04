import { LitElement, html, css } from 'lit';

export class ConfirmButton extends LitElement {
	static styles = css`
		button {
			width: 120px;
			background-color: #3b82f6;
			color: white;
			padding: 12px 16px;
			border-radius: 12px;
			border: none;
			cursor: pointer;
			transition: background 0.2s;
			outline: none;
		}

		button:hover {
			background-color: #2563eb;
		}

		button:focus {
			outline: none;
			box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5);
		}
	`;

	render() {
		return html` <button><slot></slot></button> `;
	}
}

customElements.define('confirm-button', ConfirmButton);
