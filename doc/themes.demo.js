var ReactDOM = require('react-dom')
var React = require('react')
var Radio = require('radio.react')

// 引入复制后修改样式
import './themes.demo.less';

class MyRadio extends React.Component {
    render () {
        return (
            <Radio themes="red" {...this.props} />
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
                <label>
                    <MyRadio 
                        name="themesDemo"
                        checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                    />
                    <span>radio</span>
                </label>
                <label>
                    <MyRadio 
                        name="themesDemo"
                        checked={self.state.basic === 'b'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'b'
                            })
                        }} 
                    />
                    <span>radio</span>
                </label>
                <hr/>
                <label>
                    <MyRadio name="themesDemo" checked={true} disabled={true} />
                    <span>disabled | checked:true</span>
                </label>
                <hr/>
                <label>
                    <MyRadio name="themesDemo" checked={false} disabled={true} />
                    <span>disabled | checked: false</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
ReactDOM.render(
    <Themes />,
    document.getElementById('themes-demo')
)
