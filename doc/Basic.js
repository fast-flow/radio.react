var React = require('react')
var Radio = require('radio.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" >
	            <label>
	                <Radio />
	                basic
                </label>
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
