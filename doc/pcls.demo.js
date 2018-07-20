var ReactDOM = require('react-dom')
var React = require('react')
var Radio = require('radio.react')

// 引入复制后修改样式
import './pcls.demo.less/index.less';
class MyRadio extends React.Component {
    render () {
        return (
            <Radio {...this.props} prefixClassName="myradio" />
        )
    }
}


class Pcls extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basic: 'a'
		}
	}
    render () {
    	let self = this
        return (
            <div className="pclsDemo" >
                <label>
                    <MyRadio
                        name="pclsDemo"
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
                        name="pclsDemo"
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
                    <MyRadio name="pclsDemo2" checked={true} disabled={true} />
                    <span>disabled | checked:true</span>
                </label>
                <hr/>
                <label>
                    <MyRadio name="pclsDemo2" checked={false} disabled={true} />
                    <span>disabled | checked: false</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Pcls = require("react-hot-loader").hot(module)(Pcls)
ReactDOM.render(
    <Pcls />,
    document.getElementById('pcls-demo')
)
