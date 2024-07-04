import { ReactNode } from 'react'

const Command = ({ children }: { children: ReactNode }) => {
  return <output style={{ fontFamily: 'var(--ft-mono)' }}>{children}</output>
}

export default Command
