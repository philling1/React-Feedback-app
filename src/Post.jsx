import {useParams} from 'react-router-dom'
import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Post() {
  const status = 200

  const navigate = useNavigate()
  
  const onClick = () => {
    console.log('hello')
    navigate('/about')
  }

  if(status === 404) {
    //we  use navigate instead of redirect to go another page
    return <Navigate to='/notfound' />
  }

  //const params = useParams()

  return (

    <div>
    <h1>Post</h1>
    <button onClick={onClick}>click</button>
    <Routes>
      <Route path='/show'  element={<h1>Hello World</h1>}/>
    </Routes>

    {/* Use params */}
    {/* <h1>Post {params.id}</h1>
    <p>name: {params.name}</p> */}
    </div>
    
  )
}

export default Post