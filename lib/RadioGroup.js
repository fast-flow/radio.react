import React , { Component } from "react"
import cls from 'classnames'
import util from "util.react"
import extend from "extend"
var Radio = require('./index.js');

class RadioGroup extends Component {
    render() {
        const self = this
        const props = self.props
        const pcls = props.prefixClassName
        let rootClassName = [
            pcls,
            util.themes(props)
        ].join(' ')

        let children = extend(true,[],self.props.children)
        children.map(function (item, index) {
            item.props.name = item.props.name || self.props.name
            item.key = item.key || index
            item.props.checked = item.props.value === self.props.value
            item.props.onChange = () => {
                // self.props.onChange(item.props.value)
                self.props.onChange.bind(undefined)(item.props.value)
            }
            return item
        })

        return (
            <div
                className={cls({
                    [`${rootClassName}`] : true ,
                    [`${pcls}--horiz`] : props.horiz ,
                    [`${pcls}--border`] : props.border ,
                    [`${pcls}--separate`] : props.separate ,
                    [`${pcls}--hideicon`] : props.hideicon ,
                })}
            >
                {children}
            </div>

        )
    }
}
export default RadioGroup
require('./RadioGroupProps').default(RadioGroup)
