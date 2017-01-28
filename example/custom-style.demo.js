var React = require('react')
var Radio = require('radio.react').default
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Radio className="m-radio--s" /> m-radio--s
                <br/>
                <Radio className="m-radio--s" checked="true" /> m-radio--s checked
                <br/>
                <Radio className="m-radio--s" disabled={true} checked="true" /> m-radio--s checked disabled

                <hr/>
                <Radio className="m-radio--m" /> m-radio--m
                <br/>
                <Radio className="m-radio--m" checked="true" /> m-radio--m checked
                <br/>
                <Radio className="m-radio--m" disabled={true} checked="true" /> m-radio--m checked disabled
                <hr/>
                <Radio className="m-radio--l" /> m-radio--l
                <br/>
                <Radio className="m-radio--l" checked="true" /> m-radio--l checked
                <br/>
                <Radio className="m-radio--l" disabled={true} checked="true" /> m-radio--l checked disabled
            </div>
        )
    }
})
module.exports = App
