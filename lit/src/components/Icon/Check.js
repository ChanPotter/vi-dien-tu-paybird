import { html, css, LitElement } from 'lit';

export class Check extends LitElement {
	static styles = css`
		.check-icon {
			width: 1rem; /* w-4 */
			height: 1rem; /* h-4 */
			fill: none;
			stroke: currentColor;
		}
	`;

	render() {
		return html`
			<svg
				class="check-icon"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				/>
			</svg>
		`;
	}
}

customElements.define('my-check', Check);
