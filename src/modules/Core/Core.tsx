import React, {memo} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainLayout from "./layout/MainLayout";
import './Core.scss';
import {store} from './redux/store';


/**
 * Ядро
 */
const Core: React.FC = () => (
	<BrowserRouter>
		<Provider store={store}>
			<div className="core">
				<Header/>
				<main className="core__wrapper">
					<MainLayout/>
				</main>
				<Footer/>
			</div>
		</Provider>
	</BrowserRouter>
);

export default memo(Core);
