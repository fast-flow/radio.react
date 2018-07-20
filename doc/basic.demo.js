var ReactDOM = require('react-dom')
var React = require('react')
var Radio = require('radio.react')
class Basic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            basic: 'a'
        }
    }
    render () {
        let self = this
        return (
            <div className="basicDemo" >
            	<label>
	                <Radio  name="basicDemo"
	                        checked={self.state.basic === 'a'} 
	                        onChange={function (e) {
	                            self.setState({
	                                basic: 'a'
	                            })
	                        }} 
	                />
	                <span>radio</span>
                </label>
                <br/><br/>
                <label>
	                <span>radio</span>
	                <Radio  name="basicDemo"
	                        checked={self.state.basic === 'b'} 
	                        onChange={function (e) {
	                            self.setState({
	                                basic: 'b'
	                            })
	                        }} 
	                />
                </label>
                <br/><br/>
                <label>
	                <Radio  name="basicDemo"
	                        checked={self.state.basic === 'c'} 
	                        onChange={function (e) {
	                            self.setState({
	                                basic: 'c'
	                            })
	                        }} 
	                />
	                <span>
		                radio
		                <a href="http://github.com/onface" target="_blank"> link </a>
		                radio
	                </span>
                </label>
                <hr/>
                <label>
	                <Radio  name="basicDemo"
	                        checked={true} 
	                        disabled={true} 
	                />
	                <span>disabled | checked:true</span>
                </label>
                <hr/>
                <label>
	                <Radio  name="basicDemo"
	                        checked={false} 
	                        disabled={true} 
	                />
	                <span>disabled | checked: false</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
ReactDOM.render(
    <Basic />,
    document.getElementById('basic-demo')
)
