import React from 'react'
import './Video.css'

const Video = ({video}) => {

    const countViews = (number)=>{
        if (number.toString().length === 4) {
            return number.toString().slice(0,1)+'K'
        }
        if (number.toString().length === 5) {
            return number.toString().slice(0,2)+'K'
        }
        if (number.toString().length === 6) {
            return number.toString().slice(0,3)+'K'
        }
        if (number.toString().length === 7) {
            return number.toString().slice(0,1)+'M'
        }
        if (number.toString().length === 8) {
            return number.toString().slice(0,2)+'M'
        }
    }

  return (
    <>
        <div className="videoBox">
            <div className="thumbnailInfo">
                <img src={video.image} alt="Thumbnail" className='videoThumbnail'/>
                <p>{video.duration}</p>
            </div>
            <div className="videoInfo">
                <img src={video.logo} alt="Channel Logo" className='video_channel'/>
                <div>
                    <h2>{video.title.length <= 70? video.title : `${video.title.substr(0,70)}...`}</h2>
                    <h3 title={video.channel}>{video.channel} {video.isVerified && <span className='material-symbols-rounded active'>check_circle</span>}</h3>
                    <p>{countViews(video.views)} views • {video.uploadTime} ago</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video