var ReactDOM = require('react-dom')
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
                    render={(own)=>{
                        return (
                            <div>
                                <label>
                                    <Radio name={own.props.name} value={'a'} />
                                    <span>radio</span>
                                </label>
                                <br/>
                                <label>
                                    <Radio name={own.props.name} value={'b'} />
                                    <span>radio</span>
                                </label>
                                <br/>
                                <label>
                                    <Radio name={own.props.name} value={'c'} disabled={true} />
                                    <span>disabled | checked:true</span>
                                </label>
                                <br/>
                                <label>
                                    <Radio name={own.props.name} value={'d'} disabled={true} />
                                    <span>disabled | checked: false</span>
                                </label>
                            </div>
                        )
                    }}
                >
                </RadioGroup>
            </div>
        )
    }
}
/*ONFACE-DEL*/GroupBasic = require("react-hot-loader").hot(module)(GroupBasic)
ReactDOM.render(
    <GroupBasic />,
    document.getElementById('group-demo')
)
