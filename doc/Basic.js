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
                <Radio  name="basicDemo"
                         checked={self.state.basic === 'a'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} 
                >radio</Radio>
                <Radio  name="basicDemo"
                        checked={self.state.basic === 'b'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'b'
                            })
                        }} 
                >radio</Radio>
                <Radio  name="basicDemo"
                        checked={self.state.basic === 'c'} 
                        onChange={function (e) {
                            self.setState({
                                basic: 'c'
                            })
                        }} 
                >
                radio
                <a href="http://github.com/onface" target="_blank" > link </a>
                radio
                </Radio>
                <hr/>
                <Radio  name="basicDemo"
                        checked={self.state.disabledChecked} 
                        disabled={true} 
                >disabled | checked:true</Radio>
                <hr/>
                <Radio  name="basicDemo"
                        checked={self.state.disabledFalseChecked} 
                        disabled={true} 
                >disabled | checked: false</Radio>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic

