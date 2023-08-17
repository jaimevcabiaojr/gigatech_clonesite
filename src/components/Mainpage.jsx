import { Box } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'
import pic1 from '../assets/main1.PNG'
import pic2 from '../assets/main2.PNG'
import pic3 from '../assets/static_menu.PNG'
import '../components/Mainpage.css'


const Mainpage = () => {
  return (
    <div className='main'>

      <div className='content'>

        <div className='container'>
          <img src={pic1} alt='' />
          <img src={pic2} alt='' />
        </div>

        {/* <div className='static_menu'>
          <img src={pic3} alt='' />
        </div> */}

      </div>

    </div>
  )
}

export default Mainpage
