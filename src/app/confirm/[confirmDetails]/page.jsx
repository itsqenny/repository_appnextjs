
import initData from '@/app/UI/useInitData/initData';
import ConfirmFetcher from './BonusFetcher';

const Confirm = () => {
	const {userId} = initData();
	//const userId = '204688184'
	return (
		<>
			<ConfirmFetcher userId={userId}/>
		</>
	);
};

export default Confirm;