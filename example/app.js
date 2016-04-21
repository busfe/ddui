import 'style/index.less';
import { Router, Route} from 'react-router';
import Index from './components/index';
import Toast from './components/toast';

ReactDOM.render(
	 <Router>
		<Route path="/" component={Index}/>
		<Route path="toast" component={Toast}/>
	</Router>,
	document.querySelector('#app')
);