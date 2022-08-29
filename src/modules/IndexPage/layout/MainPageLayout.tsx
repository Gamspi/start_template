import React, {memo, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

const TestPage = React.lazy(() => import('../modules/TestPage'))
const MainPageLayout = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Suspense fallback="">
						<TestPage/>
					</Suspense>
				}/>

		</Routes>

	);
};

export default memo(MainPageLayout);
