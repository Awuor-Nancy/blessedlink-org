// import React from 'react'
// import './Footer.css'

// const Footer = () => {
//     return (
//         <div className='footer'>
//             <div className='container'>
//                 <ul>
//                     <li className='nav-item'>
//                         <a href='/'>Home</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#about'>About</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#testimonials'>Testimonials</a>
//                     </li>
//                     <li className='nav-item'>
//                         <a href='#demo'>Contact</a>
//                         <p>US telephone: +1 (615) 295 8440</p>
//                         <p>Local calls in Kenya: +254 721 222 223 or +254 704 260 451</p>
//                     </li>
//                 </ul>
//                 <div className='bottom'>
//                     <span className='line'></span>
//                     <p>Copyright @ Blessedlink.org Rights Reserved</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer


import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <div className="columnTitle">
            Company
            
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Home</a>
            </div>
            <div className="columnTextItem">
              <a href="#">About</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Our Work</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Future Goals</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Resources
           
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Checks can be mailed to:</a>
            </div>
            <div className="columnTextItem">
              <a href="#">ZYD Open Heart Inc.</a>
            </div>
            <div className="columnTextItem">
              <a href="#">C/O: Rich Gradel</a>
            </div>
             
             <div className="columnTextItem">
              <a href="#">6140S 104th Street E. Ave, 
              <br />Ste 700 Tulsa, OK 74133</a>
            </div> 

          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Support Us
            
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Our Pay Pal account</a>
            </div>
            {/* <div className="columnTextItem">
              <a href="#">is Zaidi Ya Dreams</a>
            </div> */}
            <div className="columnTextItem">
              <a href="#"> Open Heart Inc.</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Contact Us
            
          </div>
          <div className="columnText">
            <div className="columnTextItem">
            US telephone: +1 (615) 295 8440
            <br />
            Local calls in Kenya: +254 721 222 223 <br /> or +254 704 260 451
            </div>
            
            <div className="columnTextItem">
              Email: <u><a href='#'>Koo7812345@netzero.com</a></u>
              <br />
              Email: <u><a href='#'>Koo7812345@outlook.com</a></u>
            </div>
            <div className="columnTextItem">
              Address: Nairobi, <br/>Kenya
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Join us and volunteer
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <span>
              <input type="text" placeholder='Enter email...' className='newsletterEmailInput'/>
              <input type="submit" value="Submit" className='newsletterEmailSubmit'/>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer