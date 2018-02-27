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
                    <Radio  checked={self.state.basic === 'a'} 
                            onChange={function (e) {
                                self.setState({
                                    basic: 'a'
                                })
                            }} 
                    />
                    <span>radio</span>
                </label>
                <label>
                    <Radio checked={self.state.basic === 'b'} 
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
                    <Radio checked={self.state.disabledChecked} disabled={true} />
                    <span>disabled | checked:true</span>
                </label>
                <hr/>
                <label>
                    <Radio checked={self.state.disabledFalseChecked} disabled={true} />
                    <span>disabled | checked: false</span>
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic

