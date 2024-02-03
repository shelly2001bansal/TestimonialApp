import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
import './Card.css'
const Card = (props) => {
    let review =props.review;
  return (
    <div className='contain-1'>
      <div className='img-1'>
        <div className='img-2'></div>
        <img className='img-1' src={review.image} />
      </div>
      <div className='para'>
        <p className='para-1'>{review.name}</p>
      </div>
      <div>
        <p className='para-2'>{review.job}</p>
      </div>
      <div>
        <FaQuoteLeft className='icon-1'/>
      </div>
      <div className='a12'>
        <p className='text'>{review.text}</p>
      </div>
      <div>
        <FaQuoteRight className='icon-2'/>
      </div>
    </div>
  )
}

export default Card
