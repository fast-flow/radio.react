import "./index.css"
import { Component } from "react"
import Checkbox from 'checkbox.react'
import props from "./props"
class Radio extends Component {
    render() {
        const self = this
        return (
            <Checkbox {...self.props} />
        )
    }
}
props(Radio)
export default Radio
