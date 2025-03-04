import { html, css, LitElement } from 'lit';

export class Loading extends LitElement {
	static styles = css`
		.spinner {
			height: 1.25rem; /* h-5 */
			width: 1.25rem; /* w-5 */
			margin-right: 0.5rem; /* mr-2 */
			color: white; /* text-white */
			animation: spin 1s linear infinite; /* animate-spin */
		}

		.circle {
			opacity: 0.25; /* opacity-25 */
		}

		.path {
			opacity: 0.75; /* opacity-75 */
			fill: currentColor;
		}

		@keyframes spin {
			to {
				transform: rotate(360deg);
			}
		}
	`;

	render() {
		return html`
			<svg
				class="spinner"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					class="circle"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="path"
					fill="currentColor"
					d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
				></path>
			</svg>
		`;
	}
}

customElements.define('my-loading', Loading);
