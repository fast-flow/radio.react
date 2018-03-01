import p from 'prop-types'

export default function (app) {
     app.defaultProps = {
        prefixClassName: 'face-radio',
        themes: '',
        onChange: function (event) {},
        checked: false,
        name: '',
        disabled: false,
        // type: checkbox https://github.com/onface/checkbox.react
        type: 'radio',
        children: null
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        onChange: p.func,
        checked: p.bool,
        name: p.string,
        disabled: p.bool,
        type: p.string,
        children: p.oneOfType([
            p.element,
            p.string,
            p.number
        ])
    }
}