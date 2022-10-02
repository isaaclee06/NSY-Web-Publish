export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* <img src={logo} height={'400%'} width={'100%'} /> */}
            NEWSONG YOUTH
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-left'>
            {/* <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li> */}
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            <li>
              <a href='#portfolio' className='page-scroll'>
                Events
              </a>
            </li>
            <li>
              <a className='hoverable' onClick={ () => window.location.replace('https://calendar.google.com/calendar/embed?src=newsongnsy%40gmail.com&ctz=America%2FLos_Angeles')}>
                Calendar
              </a>
            </li>
            <li>
              <a className='hoverable' onClick={ () => window.location.replace('https://linktr.ee/NewsongYouth')}>
                LinkTree
              </a>
            </li>
            <li>
              <a className='hoverable' onClick={ () => window.location.replace('https://www.instagram.com/newsong_youth/')}>
                Instagram
              </a>
            </li>
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}
