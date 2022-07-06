import PropTypes from 'prop-types'

//function Header(props) {
//OR using destructuring
function Header({ text, bgColor, textColor }) {
  //<h2>Feedback UI text </h2>

  //Putting the header style in a variable
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor,
  }

  return (
    <header style={headerStyles}>

      <div className="container">
      <h2>Feedback UI {text}</h2>
      </div>
    </header>
  )
}

//Setting default default props
Header.defaultProps = {
  text: 'Hello world',
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95"
}

//Setting different prop types
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
