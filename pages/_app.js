import Sidebar from '../components/Sidebar/Sidebar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Sidebar />
			<div className='md:ml-[250px]'>
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;
