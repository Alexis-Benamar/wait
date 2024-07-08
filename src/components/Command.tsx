import { CommandType } from 'types/command'

const Command = ({ cmd }: { cmd: CommandType }) => {
  return (
    <li style={{ lineHeight: '32px' }} key={cmd.title}>
      {cmd.title} :{' '}
      <output className="small" style={{ fontFamily: 'var(--ft-mono)', lineHeight: '32px' }}>
        {cmd.command}
      </output>
    </li>
  )
}

export default Command
