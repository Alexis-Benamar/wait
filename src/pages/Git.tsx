import { CommandType } from 'types/command'

import Command from 'components/Command'
import PageTitle from 'components/PageTitle'

const Git = () => {
  const commands: CommandType[] = [
    {
      title: 'remove branches that matches <pattern>',
      command: 'git branch | grep "<pattern>" | xargs git branch -D',
    },
  ]
  return (
    <section>
      <PageTitle>git</PageTitle>
      <ul>
        {commands.map((cmd) => (
          <Command cmd={cmd} key={cmd.title} />
        ))}
      </ul>
    </section>
  )
}

export default Git
