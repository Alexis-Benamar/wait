import { ReactNode } from 'react'

import { Link } from 'react-router-dom'

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="flex" style={{ gap: 15 }}>
      <Link to="/" className="large">
        {'<'}
      </Link>
      <span>{children}</span>
    </h2>
  )
}

export default PageTitle
