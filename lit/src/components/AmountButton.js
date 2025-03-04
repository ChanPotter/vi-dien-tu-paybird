import { LitElement, html, css } from 'lit';

export class AmountButton extends LitElement {
	static properties = {
		amount: { type: String },
		selected: { type: Boolean },
	};

	static styles = css`
		button {
			width: 100%;
			padding: 8px;
			border: 1px solid #ddd;
			border-radius: 8px;
			text-align: center;
			cursor: pointer;
			background-color: white;
			transition: background 0.3s, color 0.3s;
		}
		button.selected {
			background-color: #3b82f6;
			color: white;
		}
	`;

	constructor() {
		super();
		this.amount = '';
		this.selected = false;
	}

	handleClick() {
		this.dispatchEvent(
			new CustomEvent('select-amount', {
				detail: { amount: this.amount },
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html`
			<button
				class=${this.selected ? 'selected' : ''}
				@click=${this.handleClick}
			>
				${this.amount}
			</button>
		`;
	}
}

customElements.define('amount-button', AmountButton);
