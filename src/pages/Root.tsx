import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <main>
      <hgroup style={{ border: 'none', marginTop: 30 }}>
        <h1 className="centered" style={{ border: 'none' }}>
          <Link to="/" style={{ color: 'var(--default)', textDecoration: 'none' }}>
            wait 🤔
          </Link>
        </h1>
        <p className="centered">This is a collection of handy tools, helpers and (more or less) usefull stuff.</p>
      </hgroup>
      <Outlet />
    </main>
  )
}

export default Root
