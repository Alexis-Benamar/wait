import { Link } from 'react-router-dom'

const Home = () => (
  <section>
    <h2>Conversion</h2>

    <section>
      <h3>Audio/Video</h3>
      <ul>
        <li>
          <Link to="/ffmpeg">ffmpeg</Link>
        </li>
      </ul>
    </section>
  </section>
)

export default Home
