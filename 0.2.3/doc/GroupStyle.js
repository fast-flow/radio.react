var React = require('react')
var Radio = require('radio.react')
var { RadioGroup } = Radio
class GroupStyle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            horiz: false ,
            border: true ,
            separate: false ,
            hideicon: true ,
            basic: 'c'
        }
    }
    render () {
        let self = this
        return (
            <div className="groupBasicDemo" >
                style default : 
                <label>
                    <input type="checkbox" checked={self.state.horiz} onChange={()=>{ self.setState({horiz:!self.state.horiz}) }} />
                    horiz
                </label>
                <label>
                    <input type="checkbox" checked={self.state.border} onChange={()=>{ self.setState({border:!self.state.border}) }} />
                    border
                </label>
                <label>
                    <input type="checkbox" checked={self.state.separate} onChange={()=>{ self.setState({separate:!self.state.separate}) }} />
                    separate
                </label>
                <label>
                    <input type="checkbox" checked={self.state.hideicon} onChange={()=>{ self.setState({hideicon:!self.state.hideicon}) }} />
                    hideicon
                </label>
                <hr />
                组件显示 : <br/>

                <RadioGroup 
                    name="groupStyle"
                    value={self.state.basic}
                    onChange={function(value){
                        console.log(value)
                        self.setState({
                            basic : value
                        })
                    }}
                    horiz={self.state.horiz}
                    border={self.state.border}
                    separate={self.state.separate}
                    hideicon={self.state.hideicon}
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
/*ONFACE-DEL*/GroupStyle = require("react-hot-loader").hot(module)(GroupStyle)
module.exports = GroupStyle

