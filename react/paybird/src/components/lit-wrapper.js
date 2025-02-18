import { createComponent } from '@lit-labs/react';
import React from 'react';
import {
	MyButton,
	ServiceCard,
	TransactionCard,
} from '../../../../lit/src/index'; // 🛠 Sửa đường dẫn

export const Button = createComponent({
	react: React,
	tagName: 'my-button',
	elementClass: MyButton,
});
export const TranCard = createComponent({
	react: React,
	tagName: 'transaction-card',
	elementClass: TransactionCard,
});
export const MyServiceCard = createComponent({
	react: React,
	tagName: 'service-card',
	elementClass: ServiceCard,
});
