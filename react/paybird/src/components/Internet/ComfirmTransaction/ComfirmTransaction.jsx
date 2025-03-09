import { HeaderDashboard, Footer } from '../../Header-Footer/index';
import TransactionConfirm from './TransactionConfirm.jsx';
const ComfirmTransaction = () => {
	return (
		<div className="">
			<HeaderDashboard />
			<div className="">
                <TransactionConfirm />
            </div>
			<Footer />
		</div>
	);
};
export default ComfirmTransaction;
