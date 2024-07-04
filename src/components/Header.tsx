import blobThinking from 'assets/blob-thinking.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <hgroup style={{ border: 'none', marginTop: 30 }}>
      <h1 className="centered" style={{ border: 'none' }}>
        <Link to="/" className="flex center align-center" style={{ color: 'var(--default)', textDecoration: 'none' }}>
          <span>wait </span>
          <img src={blobThinking} style={{ margin: 0, marginLeft: 15 }} height={40} width={40} />
        </Link>
      </h1>
      <small className="block centered muted italic" style={{ marginBottom: 10 }}>
        wait... just one second...
      </small>
      <p className="centered">
        This is a collection of handy tools, helpers and (more or less) usefull stuff.
        <br />
        Made with{' '}
        <a href="https://matcha.mizu.sh/" target="_blank">
          matcha.css
        </a>{' '}
        for styling !
      </p>
    </hgroup>
  )
}

export default Header
