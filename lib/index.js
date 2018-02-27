import { Component } from "react"
import extend from "extend"
import util from "util.react"
import Checkbox from 'checkbox.react'
require('./index.css')

class Radio extends Component {
    render() {
        const self = this

        return (
            <Checkbox {...self.props} />
        )
    }
}
require('./props').default(Radio)
export default Radio
module.exports= Radio
