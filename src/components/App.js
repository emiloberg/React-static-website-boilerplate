import React from 'react';
import SampleComponent from './SampleComponent'

const App = () => {
	return (<div>
		<SampleComponent text={ 'Outermost Component' }>
			<SampleComponent text={ 'Middle Component' }>
				<SampleComponent text={ 'Innermost Component' } />
			</SampleComponent>
		</SampleComponent>
	</div>)
};

export default App;
