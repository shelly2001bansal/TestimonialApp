import Testimonials from './components/Testimonials'
import reviews from './data'
import './App.css'

function App() {
  
  return (
    <>  
      <div className='container'>
        <div className='line'>
          <h1 className='box-1'>Our Testimonials</h1>
          <div className='box'></div>
          <Testimonials reviews={reviews}/>
        </div>
        
      </div>    
    </>
  )
}

export default App
