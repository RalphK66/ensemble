import { Navbar } from 'react-bootstrap'
import Logo from '../../assets/images/ensemble-icon.svg'
const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column min-vh-100 bg-secondary position-relative'>
      <Navbar style={{backgroundColor:'#1C86C6'}}>
        <img
          alt='logo'
          src={Logo}
          href='https://www.ensemble.com/'
          target='_blank'
          rel='noopener noreferrer'
          height='80'
          className='mx-auto'
        />
      </Navbar>
      {children}
      <div className='fs-6 text-center text-light bg-secondary mt-auto'>
        Ensemble Systems Code Assessment by{' '}
        <span>
          <a
            href='https://ralphkilian.ca'
            target='_blank'
            rel='noopener noreferrer'
            className='text-decoration-none text-info'>
            Ralph Kilian
          </a>
        </span>
      </div>
    </div>
  )
}

export default Layout
