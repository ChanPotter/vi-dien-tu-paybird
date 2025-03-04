import { LitElement, html, css } from 'lit';

export class AccountInfo extends LitElement {
	static properties = {
		avatar: { type: String },
		camera: { type: String },
		fullname: { type: String },
		phone: { type: String },
	};

	static styles = css`
		:host {
			display: block;
			height: 100%;
		}

		.account-card {
			background: white;
			padding: 1.25rem; /* p-5 */
			border-radius: 0.5rem; /* rounded-lg */
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
				0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow */
			display: flex;
			flex-direction: column;
			align-items: center;
			min-height: 400px; /* Đặt chiều cao tối thiểu để đồng đều */
			height: 100%;
			box-sizing: border-box;
		}

		.title {
			font-size: 1.25rem; /* text-xl */
			margin-bottom: 0.75rem; /* mb-3 */
			color: #333; /* text-black (mặc định) */
		}

		.avatar-container {
			position: relative;
			display: inline-block;
		}

		.avatar {
			width: 11.25rem; /* w-45 */
			height: 11.25rem; /* h-45 */
			border-radius: 9999px; /* rounded-full */
			object-fit: cover;
			border: 4px solid white; /* border-4 border-white */
			box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
				0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
		}

		.camera-label {
			position: absolute;
			bottom: 0.5rem; /* bottom-2 */
			right: 0.5rem; /* right-2 */
			background: white;
			padding: 0.25rem; /* p-1 */
			border-radius: 9999px; /* rounded-full */
			box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
				0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-md */
			border: 1px solid #e5e7eb; /* border border-gray-200 */
			transition: all 0.2s ease; /* transition-all duration-200 */
			cursor: pointer;
		}

		.camera-label:hover {
			background: #f3f4f6; /* hover:bg-gray-100 */
		}

		.camera-icon {
			width: 1.5rem; /* w-6 */
			height: 1.5rem; /* h-6 */
		}

		.fullname {
			font-size: 1.25rem; /* text-xl */
			font-weight: 600; /* font-semibold */
			color: #333; /* text-black (mặc định) */
			margin-top: 0.5rem; /* mt-2 */
			margin-bottom: 0.25rem; /* Thêm khoảng cách dưới tên */
		}

		.phone {
			color: #4b5563; /* text-gray-600 */
			margin-top: 0.25rem; /* Thêm khoảng cách trên số điện thoại */
		}

		.hidden-input {
			display: none;
		}
	`;

	handleImageChange(event) {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			this.dispatchEvent(
				new CustomEvent('image-change', {
					detail: { image: imageUrl },
					bubbles: true,
					composed: true,
				})
			);
		}
	}

	render() {
		return html`
			<div class="account-card">
				<p class="title">Thông tin tài khoản</p>
				<div class="avatar-container">
					<img src="${this.avatar}" alt="Avatar" class="avatar" />
					<label class="camera-label">
						<img src="${this.camera}" alt="Camera Icon" class="camera-icon" />
						<input
							type="file"
							accept="image/*"
							class="hidden-input"
							@change=${this.handleImageChange}
						/>
					</label>
				</div>
				<p class="fullname">${this.fullname}</p>
				<p class="phone">${this.phone}</p>
			</div>
		`;
	}
}

customElements.define('account-info', AccountInfo);
