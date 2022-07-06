import { FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from "prop-types"
import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

//function FeedbackItems({item, handleDelete}) {
function FeedbackItems({ item }) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color="purple"/></button>
      <button className="edit"onClick={() => editFeedback(item)}>
        <FaEdit color='purple'/>
      </button>
      {/* using props and not context */}
      {/* <button onClick={() => handleDelete(item.id)} className="close"><FaTimes color="orange"/></button> */}
      <div className="text-display">{item.text}</div>
      
    </Card>
  )
}

FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItems