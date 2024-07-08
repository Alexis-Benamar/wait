import { CommandType } from 'types/command'

import Command from 'components/Command'
import PageTitle from 'components/PageTitle'

const Ffmpeg = () => {
  const videoCommands: CommandType[] = [
    {
      title: 'MOV to MP4',
      command: 'ffmpeg -i <filename>.mov -vcodec h264 -acodec mp2 <filename>.mp4',
    },
    {
      title: 'MP4 to WEBM',
      command: 'ffmpeg -i <filename>.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus <filename>.webm',
    },
  ]

  return (
    <section>
      <PageTitle>ffmpeg</PageTitle>
      <section>
        <h3>Video</h3>
        <ul>
          {videoCommands.map((vidCmd) => (
            <Command cmd={vidCmd} key={vidCmd.title} />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Ffmpeg
