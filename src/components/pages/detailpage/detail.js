import React from 'react'
import { Link } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

import './detail.css'

function Detail() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>

    {/* Navbar */}

    <div className='navbar'>
      <div className='left'>
        <Link to='/'>
        <svg width="57" height="33" viewBox="0 0 57 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.224 32.576C8.872 32.576 5.624 31.296 3.48 28.736C1.336 26.176 0.264 22.24 0.264 16.928V0.799998H8.52V17.888C8.52 20.672 8.888 22.64 9.624 23.792C10.392 24.912 11.592 25.472 13.224 25.472C14.856 25.472 16.056 24.912 16.824 23.792C17.624 22.64 18.024 20.672 18.024 17.888V0.799998H25.992V16.928C25.992 22.24 24.952 26.176 22.872 28.736C20.824 31.296 17.608 32.576 13.224 32.576ZM32.706 32V0.799998H44.13C46.402 0.799998 48.498 1.12 50.418 1.76C52.338 2.4 53.874 3.472 55.026 4.976C56.21 6.48 56.802 8.544 56.802 11.168C56.802 13.696 56.21 15.776 55.026 17.408C53.874 19.008 52.338 20.192 50.418 20.96C48.53 21.728 46.498 22.112 44.322 22.112H40.962V32H32.706ZM40.962 15.584H43.938C45.57 15.584 46.77 15.2 47.538 14.432C48.338 13.632 48.738 12.544 48.738 11.168C48.738 9.76 48.306 8.768 47.442 8.192C46.578 7.616 45.346 7.328 43.746 7.328H40.962V15.584Z" fill="#6F36EA"/>
</svg>
</Link>
      </div>

      <div className='right'>
        <Link className='title'>Find Playlist</Link>
        <Link className='title'>Generate Playlist</Link>
        <i onClick={switchTheme} class="fa fa-moon-o" aria-hidden="true"></i>
      </div>
      
    </div>

{/* Body */}


    <div className="form">
      <h4 className="header">Playlist Title
      </h4>
      <h6 className="sub">
      Description (optional)
      </h6>
      
      <textarea rows="5" name='message'/>

      <h4>
        Links
      </h4>

      <div className='links'>

        <div className='linkitem'>
        <p>https://tailwindcss.com/docs/installa...</p>
        </div>

        <div className='linkicon'>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        
      </div>

      <div className='links'>

        <div className='linkitem'>
        <p>https://tailwindcss.com/docs/installa...</p>
        </div>

        <div className='linkicon'>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        
      </div>

      <div className='links'>

        <div className='linkitem'>
        <p>https://tailwindcss.com/docs/installa...</p>
        </div>

        <div className='linkicon'>
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        
      </div>

      <div className='links'>

        <div className='linkitem'>
        <p>https://tailwindcss.com/docs/installa...</p>
        </div>

        <div className='linkicon'>
        <i class="fa fa-times" aria-hidden="true"></i>
        </div>
        
      </div>

      <div className="btn">
        <Link to='/Finish'>
      <button>All done</button>
      </Link>
      </div>

      </div>
    </div>
  );
}

export default Detail;