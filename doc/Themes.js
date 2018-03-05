var React = require('react')
var Radio = require('radio.react')

// 引入复制后修改样式
import './themes.demo.less/index.less';
class MyRadio extends React.Component {
    render () {
        return (
            <Radio themes="green" {...this.props} prefixClassName="myradio" />
        )
    }
}


class Themes extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basic: 'a'
		}
	}
    render () {
    	let self = this
        return (
            <div className="themesDemo" >
                <MyRadio  checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                >radio</MyRadio>
                <MyRadio checked={self.state.basic === 'b'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'b'
                            })
                        }} 
                >radio</MyRadio>
                <hr/>
                <MyRadio checked={self.state.disabledChecked} 
                        disabled={true} 
                >disabled | checked:true</MyRadio>
                <hr/>
                <MyRadio checked={self.state.disabledFalseChecked} 
                        disabled={true} 
                >disabled | checked: false</MyRadio>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
module.exports = Themes
