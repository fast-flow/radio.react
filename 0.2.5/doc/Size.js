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
                    <Radio  checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                    >default</Radio>
                    <Radio checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                    >default</Radio>
                </div>
                <hr/>
                <div style={{'fontSize':'32px'}} >
                    <Radio  checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                    >large</Radio>
                    <Radio checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                    >large</Radio>
                </div>
                <hr/>
                <div style={{'fontSize':'48px'}} >
                    <Radio  checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                    >very large</Radio>
                    <Radio checked={self.state.basic === 'b'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'b'
                                })
                            }} 
                    >very large</Radio>

                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
module.exports = Size
