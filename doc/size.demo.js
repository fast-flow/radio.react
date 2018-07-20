var ReactDOM = require('react-dom')
var React = require('react')
var Radio = require('radio.react')
class Size extends React.Component {
	constructor(props){
		super(props)
		this.state = {
            basic: 'a'
		}
	}
    changeCheck = (e) => {
        this.setState({
            check: e.target.checked
        })
    }
    render () {
    	let self = this
        return (
            <div className="sizeDemo" >
                {/* => fontsize: 16px */}
                <div>
                    <label>
                        <Radio 
                            checked={self.state.basic === 'a'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'a'
                                })
                            }} 
                        />
                        <span>default</span>
                    </label>
                    <br/>
                    <label>
                        <Radio 
                            checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                        />
                        <span>default</span>
                    </label>
                </div>
                <hr/>
                <div style={{'fontSize':'32px'}} >
                    <label>
                        <Radio 
                            checked={self.state.basic === 'a'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'a'
                                })
                            }} 
                        />
                        <span>large</span>
                    </label>
                    <br/>
                    <label>
                        <Radio 
                            checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                        />
                        <span>large</span>
                    </label>
                </div>
                <hr/>
                <div style={{'fontSize':'48px'}} >
                    <label>
                        <Radio 
                            checked={self.state.basic === 'a'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'a'
                                })
                            }} 
                        />
                        <span>very large</span>
                    </label>
                    <br/>
                    <label>
                        <Radio 
                            checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                        />
                        <span>very large</span>
                    </label>
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
ReactDOM.render(
    <Size />,
    document.getElementById('size-demo')
)
