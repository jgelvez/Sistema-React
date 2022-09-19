import PropTypes from 'prop-types'

export function Button({text='Yo',name}){
    return  <button className="border-black border-2 rounded">
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string
}
// es otra opcion de poner un valor por defecto
Button.defaultProps = {
    name: 'Cliqueame'
}