import Container from 'example/container/container.jsx';
import  DDUI from 'index.js';
export default class ToastDemo extends React.Component {
	render() {
		let Toast = DDUI.Toast;
		return (
			<div className="btn-loading">
				<Toast icon="alarm">正在加载中</Toast>
			</div>
		)
	}
}