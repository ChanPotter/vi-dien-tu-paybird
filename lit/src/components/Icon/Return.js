import { html, css, LitElement } from 'lit';

export class Return extends LitElement {
	static styles = css`
		.back-icon {
			width: 1.5rem; /* w-6 */
			height: 1.5rem; /* h-6 */
			fill: none;
			stroke: currentColor;
		}
	`;

	render() {
		return html`
			<svg
				class="back-icon"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		`;
	}
}

customElements.define('my-return', Return);
