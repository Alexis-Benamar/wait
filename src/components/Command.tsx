import { ReactNode } from 'react'

const Command = ({ children }: { children: ReactNode }) => {
  return (
    <output className="small" style={{ fontFamily: 'var(--ft-mono)', lineHeight: '32px' }}>
      {children}
    </output>
  )
}

export default Command
