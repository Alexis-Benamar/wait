import { CommandType } from 'types/command'

import Command from 'components/Command'
import PageTitle from 'components/PageTitle'

const Bash = () => {
  const commands: CommandType[] = [
    {
      title: 'generate ssh key (with optional -C parameter)',
      command: 'ssh-keygen -t ed25519 -C "<your@email.com>"',
    },
    {
      title: 'add ssh key to keychain (in .bash_profile / .zprofile)',
      command: 'eval `keychain --eval --agents ssh --inherit any id_ed25519`',
    },
    {
      title: 'replace string in file',
      command: `sed -i 's/<string_to_replace>/<new_string>/g' <filename>`,
    },
  ]
  return (
    <section>
      <PageTitle>bash</PageTitle>
      <ul>
        {commands.map((cmd) => (
          <Command cmd={cmd} key={cmd.title} />
        ))}
      </ul>
    </section>
  )
}

export default Bash
