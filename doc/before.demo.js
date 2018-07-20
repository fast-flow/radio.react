var ReactDOM = require('react-dom')
var React = require('react')
var Radio = require('radio.react')
class Before extends React.Component {
	constructor(props){
		super(props)
	}
    render () {
    	let self = this
        return (
            <div className="beforeDemo" >
                <Radio checked={true} >has't before</Radio>
                <hr/>
                <Radio checked={true} before >true</Radio> <br/>
                <Radio checked={true} before disabled={true} >true</Radio>
                <hr/>
                <Radio checked={true} before={'beforeLabel'} >string</Radio> <br/>
                <Radio checked={true} before={'beforeLabel'} disabled={true} >string</Radio>  <br/>
                <Radio checked={true} before={'beforeLabel'} /> <br/>
                <Radio checked={true} before={'beforeLabel'} disabled={true} />
                <hr/>
                <Radio checked={true} before={(<i>before react ele</i>)} >reactDomEle</Radio> <br/>
                <Radio checked={true} before={(<i>before react ele</i>)} disabled={true} >reactDomEle</Radio> <br/>
                <Radio checked={true} before={(<i>before react ele</i>)} /> <br/>
                <Radio checked={true} before={(<i>before react ele</i>)} disabled={true} />
                <hr/>
            </div>
        )
    }
}
/*ONFACE-DEL*/Before = require("react-hot-loader").hot(module)(Before)
ReactDOM.render(
    <Before />,
    document.getElementById('before-demo')
)
