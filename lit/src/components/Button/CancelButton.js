import { LitElement, html, css } from 'lit';

export class CancelButton extends LitElement {
	static styles = css`
		button {
			width: 100%;
			padding: 0.5rem 0;
			color: #374151; /* text-gray-700 */
			box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* shadow-xl */
			border-radius: 1rem; /* rounded-2xl */
			border: 2px solid #f3f4f6; /* border-2 border-gray-100 */
			background-color: white;
			transition: background-color 0.2s;
			outline: none;
			font-size: 0.9rem;
		}
		button:hover {
			background-color: #f3f4f6; /* hover:bg-gray-100 */
		}
		button:focus {
			outline: none;
		}
	`;

	render() {
		return html`<button>Hủy</button>`;
	}
}

customElements.define('cancel-button', CancelButton);
