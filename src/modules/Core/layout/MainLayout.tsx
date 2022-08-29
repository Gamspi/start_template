import React, {Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

/**
 * Основной слой рутинга
 */
const IndexPage = React.lazy(() => import('../../IndexPage/IndexPage'));
const MainLayout: React.FC = () => (
	<Routes>
		<Route
			path="/"
			element={
				<Suspense fallback="">
					<IndexPage/>
				</Suspense>
			}
		/>
		<Route path='*' element={<NotFoundPage/>}/>
	</Routes>
);

export default React.memo(MainLayout);
