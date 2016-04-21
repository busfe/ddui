export default class Mask extends React.Component {
	static defaultProps = {
		prefixCls: 'dd-mask'
	};
	render() {
		let {prefixCls} = this.props;
		let maskCls = classNames({
     		[prefixCls]: true
     	})
		return (
			<div className={maskCls}></div>
		);
	}
}