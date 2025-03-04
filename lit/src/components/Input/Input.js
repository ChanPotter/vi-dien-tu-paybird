import { html, css, LitElement } from 'lit';

export class Input extends LitElement {
	static properties = {
		value: { type: String }, // Giá trị của input
		placeholder: { type: String }, // Placeholder của input
		type: { type: String, default: 'text' }, // Loại input (text, password, v.v.)
		disabled: { type: Boolean }, // Trạng thái disabled
	};

	static styles = css`
		.input {
			width: 350px;
			padding: 12px;
			border-radius: 8px;
			border: none;
			background: #f1f3f5; /* Xám nhạt */
			color: #000;
			font-size: 16px;
			transition: background 0.3s ease, box-shadow 0.3s ease;
			box-sizing: border-box;
		}

		.input::placeholder {
			color: #9e9e9e;
		}

		.input:focus {
			outline: none;
			background: #e9ecef;
			box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
		}

		.input:disabled {
			opacity: 0.7;
			cursor: not-allowed;
		}

		/* Responsive */
		@media (max-width: 640px) {
			.input {
				padding: 10px;
				font-size: 14px;
			}
		}
	`;

	// Xử lý sự kiện thay đổi giá trị input
	handleInputChange(event) {
		const value = event.target.value;
		this.dispatchEvent(
			new CustomEvent('input-change', {
				detail: { value },
				bubbles: true,
				composed: true,
			})
		);
	}

	render() {
		return html`
			<input
				class="input"
				type="${this.type || 'text'}"
				placeholder="${this.placeholder || ''}"
				.value="${this.value || ''}"
				?disabled="${this.disabled}"
				@input="${this.handleInputChange}"
			/>
		`;
	}
}

customElements.define('my-input', Input);
