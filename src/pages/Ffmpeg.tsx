import { useMemo, useState } from 'react'

import { CommandType } from 'types/command'

import Command from 'components/Command'
import PageTitle from 'components/PageTitle'

const Ffmpeg = () => {
  const [typedFileName, setTypedFileName] = useState('')

  const fileName = typedFileName.length ? typedFileName : '<filename>'

  const audioCommands: CommandType[] = useMemo(
    () => [
      {
        title: 'MP3 to MP4',
        command: `ffmpeg -loop 1 -i <input_image> -i <input_audio>.mp3 -c:v libx264 -tune stillimage -c:a aac -b:a 192k -vf "scale='iw-mod(iw,2)':'ih-mod(ih,2)',format=yuv420p" -shortest -movflags +faststart <output_filename>.mp4`,
      },
      {
        title: 'MP3 to OGG',
        command: `ffmpeg -y -i ${fileName}.mp3 -c:a libopus -b:a 64k -ac 2 ${fileName}.ogg`,
      },
    ],
    [fileName],
  )

  const videoCommands: CommandType[] = useMemo(
    () => [
      {
        title: 'MOV to MP4',
        command: `ffmpeg -i ${fileName}.mov -vcodec h264 -acodec mp2 ${fileName}.mp4`,
      },
      {
        title: 'MOV to GIF',
        command: `ffmpeg -i ${fileName}.mov -f gif -filter_complex "fps=30" ${fileName}.gif`,
      },
      {
        title: 'MP4 to GIF',
        command: `ffmpeg -i ${fileName}.mp4 -f gif -filter_complex "fps=30" ${fileName}.gif`,
      },
      {
        title: 'MP4 to WEBM',
        command: `ffmpeg -i ${fileName}.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus ${fileName}.webm`,
      },
    ],
    [fileName],
  )

  return (
    <section>
      <PageTitle>ffmpeg</PageTitle>
      <label>
        filename:
        <input onChange={(e) => setTypedFileName(e.target.value)} value={typedFileName} />
      </label>
      <section>
        <h3>Audio</h3>
        <ul>
          {audioCommands.map((audioCmd) => (
            <Command cmd={audioCmd} key={audioCmd.title} />
          ))}
        </ul>
      </section>
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
