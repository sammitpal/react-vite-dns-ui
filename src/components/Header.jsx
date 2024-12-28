import './Header.css'
function Header() {
  return (
    <div className="header">
      <div className="header_left">
      <p>MySAAS</p>
      <p>Pricing</p>
      </div>
      <div className="header_right">
        <p>Log in</p>
        <button>Book a demo</button>
        <button className='getStartedBtn'>Get Started for free</button>
      </div>
    </div>
  )
}

export default Header