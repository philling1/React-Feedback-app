//import { v4 as uuidv4} from 'uuid'
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
//import FeedbackData from "./data/FeedbackData"
//import Card from "./components/shared/Card"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLInk from './components/AboutIconLInk'
import AboutPage from './pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'
//import Post from './Post'

function App() {

  // const [feedback, setFeedback] = useState(FeedbackData)

  /*const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }*/

  /*const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete')){
      setFeedback(feedback.filter((item) => item.id !==id))
    }
  }*/

  return (
    <FeedbackProvider>
    {/* The JSX allows us to retun only one parent html element */}
    <Router>
      <Header  />
      <div className="container">
        <Routes>
        <Route exact path='/' element ={
          <>
            <FeedbackForm  />
            {/* Using props and not context */}
            {/* <FeedbackForm  handleAdd={addFeedback}/> */}

            <FeedbackStats  />
            {/* Using props and not context */}
            {/* <FeedbackStats feedback={feedback} /> */}
            
             <FeedbackList  />
             {/* Using props and not context */}
             {/* <FeedbackList  feedback={feedback}  handleDelete={deleteFeedback}/>   */}
          </>
        }>
        </Route>
        
        <Route path='/about' element={<AboutPage />} />

        {/*  How to get param  }
        < Route path='/post/:id/:name' element={<Post />} /> */}
        {/* Redirecting and nested link  */}
        {/* < Route path='/post/*' element={<Post />} />  */}
  
        </Routes>

        {/* <Card>
          <NavLink to='/' activeClassName='active'>
            Home
          </NavLink>

          <NavLink to='/about' activeClassName='active'>
            About
          </NavLink>
        </Card> */}

       <AboutIconLInk />

      </div>
    </Router>
    </FeedbackProvider>
  )
}

export default App