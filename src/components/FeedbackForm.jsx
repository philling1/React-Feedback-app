import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"


//function FeedbackForm({handleAdd}) {
function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setmessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if(text === ''){
      setBtnDisabled(true)
      setmessage(null)
    }else if(text !== '' && text.trim().length <= 10 ){
      setBtnDisabled(true)
      setmessage('Text must be at least 10 characters')
    }else {
      setBtnDisabled(false)
      setmessage(null)
    }

    setText(e.target.value);

    e.preventDefault();
  }
  const handleSubmit = (e) => {
    if(text.trim().length > 10){
      const newFeedback = {
        text: text,
        rating: rating
      }

      //handleAdd(newFeedback)
      //Using context
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }else {
        addFeedback(newFeedback)
      }
      

      setText('')
    }
    e.preventDefault()
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm