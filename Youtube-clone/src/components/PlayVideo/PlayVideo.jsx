import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { useEffect, useState } from 'react'
import { API_KEY, value_converter} from '../../data'
import moment from 'moment'

// eslint-disable-next-line react/prop-types
const PlayVideo = ({videoId}) => {

  const [apiData, setApiData] = useState(null)

  const fetchVideoData = async  () =>{
    const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(video_url).then(response=>response.json()).then(data=>setApiData(data.items[0]))
  }

  useEffect(()=>{
    fetchVideoData();
  },[videoId])



  return (
    <div className='play-video'>
    <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>     
     <h3>{apiData?apiData.snippet.title: "Title Here"}</h3>
      <div className="play-video-info">
       <p>{apiData?value_converter(apiData.statistics.viewCount) : "16k"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow(): ""}</p>
       <div>
        <span><img src={like} alt="" />{apiData?value_converter(apiData.statistics.likeCount) : ""}</span>
        <span><img src={dislike} alt="" /></span>
        <span><img src={share} alt="" />Share</span>
        <span><img src={save} alt="" />Save</span>
       </div>
      </div>
      <hr />
      <div className="publisher">
       <img src={jack} alt='' />
       <div>
        <p>Great API</p>
        <span>1M Subscribers</span>
       </div>
       <button>Subscribe</button>
      </div>
      <div className="vid-description">
       <p>{apiData?apiData.snippet.description.slice(0,250) : "Description"}</p>
       <hr />
       <h4>{apiData?value_converter(apiData.statistics.commentCount) : 102} Comments</h4>
       <div className="comment">
        <img src={user_profile} alt="" />
        <div>
         <h3>Jack Mikelson <span>1 day ago</span></h3>
         <p>A global computer network providing a variety of information and computational of 
          interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
           <img src={like} alt="" />
           <span>244</span>
           <img src={dislike} alt="" />
          </div>
        </div>
       </div>

       <div className="comment">
        <img src={user_profile} alt="" />
        <div>
         <h3>Jack Mikelson <span>1 day ago</span></h3>
         <p>A global computer network providing a variety of information and computational of 
          interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
           <img src={like} alt="" />
           <span>244</span>
           <img src={dislike} alt="" />
          </div>
        </div>
       </div>

       <div className="comment">
        <img src={user_profile} alt="" />
        <div>
         <h3>Jack Mikelson <span>1 day ago</span></h3>
         <p>A global computer network providing a variety of information and computational of 
          interconnected networks using standardized communication protocols.</p>
          <div className="comment-action">
           <img src={like} alt="" />
           <span>244</span>
           <img src={dislike} alt="" />
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default PlayVideo
