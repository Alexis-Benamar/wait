import { Link } from 'react-router-dom'

const Home = () => {
  const linksLists = [
    {
      sectionTitle: 'Calculators',
      links: [
        {
          text: 'weight',
          url: '/weight',
        },
      ],
    },
    {
      sectionTitle: 'Commands',
      links: [
        {
          text: 'git',
          url: '/git',
        },
      ],
    },
    {
      sectionTitle: 'Conversion',
      links: [
        {
          text: 'ffmpeg',
          url: '/ffmpeg',
        },
      ],
    },
  ]

  return (
    <>
      {linksLists.map((linksList) => (
        <section key={linksList.sectionTitle}>
          <h2>{linksList.sectionTitle}</h2>
          <ul>
            {linksList.links.map((link) => (
              <li key={link.url}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}

export default Home
