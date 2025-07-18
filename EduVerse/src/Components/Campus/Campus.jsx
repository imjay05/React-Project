import React, { useState } from 'react'
import './Campus.css'

import gallery_1 from '../../assets/eduverse_assets/gallery-1.png'
import gallery_2 from '../../assets/eduverse_assets/gallery-2.png'
import gallery_3 from '../../assets/eduverse_assets/gallery-3.png'
import gallery_4 from '../../assets/eduverse_assets/gallery-4.png'
import gallery_5 from '../../assets/eduverse_assets/gallery-5.png'
import gallery_6 from '../../assets/eduverse_assets/gallery-6.png'
import gallery_7 from '../../assets/eduverse_assets/gallery-7.png'
import gallery_8 from '../../assets/eduverse_assets/gallery-8.png'
import gallery_9 from '../../assets/eduverse_assets/gallery-9.png'
import gallery_10 from '../../assets/eduverse_assets/gallery-10.png'
import gallery_11 from '../../assets/eduverse_assets/gallery-11.png'
import gallery_12 from '../../assets/eduverse_assets/gallery-12.png'

import white_arrow from '../../assets/eduverse_assets/white-arrow.png'

const Campus = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prev => !prev);
  }

  return (
    <div>
      <div className="campus" id='campus'>
        <div className="gallery">
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
          <img src={gallery_4} alt="" />
          <img src={gallery_5} alt="" />
          <img src={gallery_6} alt="" />

          {showMore && (
            <>
              <img key="7" src={gallery_7} alt="" />
              <img key="8" src={gallery_8} alt="" />
              <img key="9" src={gallery_9} alt="" />
              <img key="10"src={gallery_10} alt="" />
              <img key="11" src={gallery_11} alt="" />
              <img key="12" src={gallery_12} alt="" />
            </>
          )}
        </div>

        <button type='button' className='btn btn-dark' onClick={handleToggle}>
          {showMore ? 'Show Less' : 'See more here'} 
          <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Campus
