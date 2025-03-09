import { html, css, LitElement } from 'lit';

export class InputField extends LitElement {
	static properties = {
		placeholder: { type: String }, // Placeholder của input
		value: { type: String }, // Giá trị của input (để React đồng bộ nếu cần)
	};

	static styles = css`
		.input {
			width: 340px;
			padding: 0.75rem; /* p-3 */
			margin-bottom: 0.75rem; /* mb-3 */
			border: 1px solid #e5e7eb; /* border (gray-100) */
			border-radius: 0.5rem; /* rounded-lg */
			color: #4b5563; /* text-gray-700 */
			font-size: 1rem;
			transition: all 0.2s ease;
		}

		.input:focus {
			outline: none; /* focus:outline-none */
			ring: 2px solid #ef4444; /* focus:ring-2 focus:ring-red-500 */
			box-shadow: 0 0 0 2px #ef4444;
		}

		.input::placeholder {
			color: #6b7280; /* text-gray-400 (mặc định cho placeholder) */
		}
	`;

	// Xử lý sự kiện thay đổi giá trị input
	handleInputChange(event) {
		const value = event.target.value;
		this.value = value; // Cập nhật giá trị nội bộ
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
				type="text"
				placeholder="${this.placeholder || ''}"
				.value="${this.value || ''}"
				@input="${this.handleInputChange}"
			/>
		`;
	}
}

customElements.define('input-field', InputField);
