import LbsToKgs from 'components/Calculators/LbsToKgs'
import PageTitle from 'components/PageTitle'

const Weight = () => {
  return (
    <section>
      <PageTitle>Weight</PageTitle>
      <form style={{ maxWidth: 700 }}>
        <LbsToKgs />
      </form>
    </section>
  )
}

export default Weight
