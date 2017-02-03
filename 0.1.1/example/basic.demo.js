var React = require('react')
var Radio = require('radio.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            basic: 'a'
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <label>
                    <Radio checked={self.state.basic === 'a'} onChange={function (e) {
                            self.setState({
                                basic: 'a'
                            })
                        }} />
                    Pick a
                </label>
                 <br />
                <label>
                    <Radio checked={self.state.basic === 'b'} onChange={function (e) {
                            self.setState({
                                basic: 'b'
                            })
                        }} />
                    Pick b
                </label>
                <hr/>
                <label>
                    <Radio checked={true} disabled={true}  />
                    disabled | checked:true
                </label>
                <hr/>
                <label>
                    <Radio disabled={true}  />
                    disabled | checked:false
                </label>
            </div>
        )
    }
})
module.exports = App
