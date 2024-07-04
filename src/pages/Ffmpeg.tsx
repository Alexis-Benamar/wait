import Command from 'components/Command'
import PageTitle from 'components/PageTitle'

const Ffmpeg = () => {
  return (
    <section>
      <PageTitle>ffmpeg</PageTitle>
      <section>
        <h3>Video</h3>
        <ul>
          <li>
            MOV to MP4 : <Command>ffmpeg -i my-video.mov -vcodec h264 -acodec mp2 my-video.mp4</Command>
          </li>
        </ul>
      </section>
    </section>
  )
}

export default Ffmpeg
