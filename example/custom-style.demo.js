var React = require('react')
var Radio = require('radio.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <label>
                    <Radio className="m-radio--s" /> m-radio--s
                </label>
                <br/>
                <label>
                    <Radio className="m-radio--s" checked="true" /> m-radio--s checked
                </label>
                <br/>
                <label>
                <Radio className="m-radio--s" disabled={true} checked="true" /> m-radio--s checked disabled

                <hr/>
                <label>
                    <Radio className="m-radio--m" /> m-radio--m
                </label>
                <br/>
                <label>
                    <Radio className="m-radio--m" checked="true" /> m-radio--m checked
                </label>
                <br/>
                <label>
                    <Radio className="m-radio--m" disabled={true} checked="true" /> m-radio--m checked disabled
                </label>
                <hr/>
                <label>
                    <Radio className="m-radio--l" /> m-radio--l
                </label>
                <br/>
                <label>
                    <Radio className="m-radio--l" checked="true" /> m-radio--l checked
                </label>
                <br/>
                <label>
                    <Radio className="m-radio--l" disabled={true} checked="true" /> m-radio--l checked disabled
                </label>
            </div>
        )
    }
})
module.exports = App
