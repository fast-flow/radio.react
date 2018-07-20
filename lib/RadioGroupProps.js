import p from 'prop-types'

export default function (app) {
     app.defaultProps = {
        prefixClassName: 'face-radioGroup',
        themes: '',
        onChange: function (event) {},
        name: '',
        value:'',
        children: null ,
        horiz: false ,
        border: true ,
        separate: false ,
        hideicon: true ,
        render: undefined
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        onChange: p.func,
        name: p.string,
        value: p.oneOfType([
            p.string,
            p.number
        ]),
        children: p.array,
        horiz: p.bool ,
        border: p.bool ,
        separate: p.bool ,
        hideicon: p.bool ,
        render: p.func
    }
}