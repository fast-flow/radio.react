var React = require('react')
var Radio = require('radio.react')
var { RadioGroup } = Radio
class GroupBasic extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            basic: 'c'
        }
    }
    render () {
        let self = this
        return (
            <div className="groupBasicDemo" >
                <RadioGroup 
                    name="groupBasic"
                    value={self.state.basic}
                    onChange={function(value){
                        console.log(value)
                        self.setState({
                            basic : value
                        })
                    }}
                >
                    <Radio value={'a'} >radio</Radio>
                    <Radio value={'b'} >radio</Radio>
                    <Radio value={'c'} disabled={true} >disabled | checked:true</Radio>
                    <Radio value={'d'} disabled={true} >disabled | checked: false</Radio>
                </RadioGroup>
            </div>
        )
    }
}
/*ONFACE-DEL*/GroupBasic = require("react-hot-loader").hot(module)(GroupBasic)
module.exports = GroupBasic

