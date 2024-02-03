import {FiChevronLeft , FiChevronRight} from 'react-icons/fi'
import { useState } from "react";
import Card from "./Card"
import './Testimonials.css'
const Testimonials = (props) => {
    let reviews =props.reviews;
    const [index,setIndex]=useState(0);

    function leftShiftHandler(){
      if(index-1<0){
        setIndex(reviews.length-1);
      }
      else{
        setIndex(index-1);
      }
    }

    function rightShiftHandler(){
      if(index+1>=reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }

    function surpriseHandler(){
      let randomIndex=Math.floor(Math.random()*reviews.length);
      setIndex(randomIndex);
    }
  return (
    <div className='contain'>
      <div>
        <Card review={reviews[index]}/>
      </div>
      <div>
        <button className='btn-1' onClick={leftShiftHandler}><FiChevronLeft/></button>
        <button className='btn-2' onClick={rightShiftHandler}><FiChevronRight/></button>
      </div>
      <div>
        <button className='btn-3' onClick={surpriseHandler}>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonials
