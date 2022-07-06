import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
//import PropTypes from "prop-types"
import FeedbackItems from "./FeedbackItems"
import FeedbackContext from '../context/FeedbackContext'

  //function FeedbackList({feedback, handleDelete}){
  function FeedbackList(){
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback.length === 0){
    return <p>No feedback Yet</p>

  }

  return (
    <div className="feedback-list">
    <AnimatePresence>
      {feedback.map((item) => {
        return <motion.div
        key={item.id}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <FeedbackItems 
          key={item.id} 
          item={item} 
          // handleDelete={handleDelete} 
          />
        </motion.div>
      })}
      </AnimatePresence>
      </div>
  )

  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item) => {

  //       return <FeedbackItems 
  //       key={item.FeedbackItems} 
  //       item={item} 
  //       handleDelete={handleDelete}
  //       />

  //     })}
  //     </div>
  // )
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   )
// }

export default FeedbackList