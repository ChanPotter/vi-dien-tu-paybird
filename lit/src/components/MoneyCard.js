import { html, css, LitElement } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js'; // Import unsafeHTML to render HTML from a string

export class MoneyCard extends LitElement {
	static styles = css`
		.card {
			width: 300px;
			padding: 20px;
			border-radius: 8px;
			box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
			background-color: #fff;
			font-family: Arial, sans-serif;
		}
		.button:hover {
			background-color: #0056b3;
		}
	`;

	render() {
		return html` <div class="card"></div> `;
	}
}

customElements.define('money-card', MoneyCard);
