import Mask from '../mask';

export default class Toast extends React.Component{
	static defaultProps = {
		prefixCls: 'dd-toast',
		icon: 'loading',
		duration: 2000,
		callback: function() {}
	};
	constructor(props) {
		super(props);
		this.state = {"visibility": "visible"};
	}
	componentDidMount() {
		//只要不是loading态，都是2000毫秒消失
		if(this.props.icon !== 'loading') {
			setTimeout(function() {
				this.setState({"visibility": 'hide'});
				this.props.callback();
			}.bind(this), this.props.duration);
		}
	}
	render() {
		let {prefixCls, icon} = this.props;

		let toastCls = classNames({
			[prefixCls]: true,
     		[`${prefixCls}-single`]: this.props.children.length < 8 && this.props.icon !== 'none',
     		[`${prefixCls}-double`]: this.props.children.length > 8 && this.props.icon !== 'none',
     		[`${prefixCls}-none-icon`]: this.props.icon === 'none'
     	})
     	if(this.state.visibility && this.state.visibility === 'visible') {
			return (
				<div className={toastCls}>
					<div className={`${prefixCls}-wrapper`}>
						{(()=>{
							switch(icon) {
								case 'loading': return (
									<span className={`${prefixCls}-loading ddicon-loading-gif`}></span>
								);
								case 'success': return(
									<span className={`${prefixCls}-success ddicon ddicon-toast-success`}></span>
								);
								case 'wrong': return(
									<span className={`${prefixCls}-success ddicon ddicon-toast-wrong`}></span>
								); 
								case 'alarm': return(
									<span className={`${prefixCls}-success ddicon ddicon-toast-alarm`}></span>
								);  
							}
						})()}
						<p className={`${prefixCls}-text`}>{this.props.children}</p>
					</div>
				</div>
			)
		}else {
			return null;
		}
	}
}