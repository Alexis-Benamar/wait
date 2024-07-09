import { useNavigate } from 'react-router-dom'

import Header from 'components/Header'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate('/')

  return (
    <>
      <Header />
      <section style={{ marginTop: 50 }}>
        <h2 className="flex center" style={{ borderBottom: 'none', marginTop: 0, textAlign: 'center' }}>
          <button type="button" onClick={handleGoBack} className="small" style={{ margin: 0, marginRight: 10 }}>
            ⬅️
          </button>
          Not found
        </h2>
        <small className="muted centered" style={{ display: 'block' }}>
          <i>I could've sworn I had it</i> 🥺
        </small>
      </section>
    </>
  )
}

export default NotFound
