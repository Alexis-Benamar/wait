import { ReactNode } from 'react'

import { useNavigate } from 'react-router-dom'

const PageTitle = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate('/')

  return (
    <h2 className="flex" style={{ gap: 15, alignItems: 'center' }}>
      <button type="button" onClick={handleGoBack} className="small" style={{ margin: 0 }}>
        ⬅️
      </button>
      <span>{children}</span>
    </h2>
  )
}

export default PageTitle
