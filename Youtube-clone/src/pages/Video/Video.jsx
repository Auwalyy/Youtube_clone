import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import './Video.css'
import { useParams } from 'react-router-dom'

const Video = () => {

  // eslint-disable-next-line no-unused-vars
  const { videoId, categoryId} = useParams();

  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recommended />
    </div>
  )
}

export default Video
