import { ChangeEvent, useRef } from 'react'

const LbsToKgs = () => {
  const lbsRef = useRef<HTMLInputElement>(null)
  const kgsRef = useRef<HTMLInputElement>(null)

  const onLbsChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (kgsRef.current) {
      kgsRef.current.value = (Number(e.target.value) * 0.45359237).toString()
    }
  }

  const onKgsChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (lbsRef.current) {
      lbsRef.current.value = (Number(e.target.value) * 2.2046).toString()
    }
  }

  return (
    <fieldset className="flex" style={{ gap: 20, flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      <legend>lbs to kgs</legend>
      <label>
        lbs
        <input type="number" step="any" onChange={onLbsChange} ref={lbsRef} />
      </label>
      <label>
        kgs
        <input type="number" step="any" onChange={onKgsChange} ref={kgsRef} />
      </label>
    </fieldset>
  )
}

export default LbsToKgs
