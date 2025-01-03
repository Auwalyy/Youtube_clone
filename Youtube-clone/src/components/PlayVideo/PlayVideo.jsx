import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Youtube Channel To Lean Web Development</h3>
      <div className="play-video-info">
       <p>1552 Views &bull; 3 days ago</p>
       <div>
        <span><img src={like} alt="" />125</span>
        <span><img src={dislike} alt="" />5</span>
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
       <p>Channel that makes learning easy</p>
       <p>Subscribe Grea APi to Watch More Tutorials on web developemt</p>
       <hr />
       <h4>130 Comments</h4>
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
