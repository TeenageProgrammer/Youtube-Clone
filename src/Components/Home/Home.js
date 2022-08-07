import React, { useState } from 'react'
import './Home.css'
import { AdBanner, YoutubeLogo } from '../../Assets/ImageIndex'
import Video from './Video'
import VideoData from './Videos.json'

const Home = () => {

  const categoryData = ["All", "Gaming", "Javascript", "Python", "Music", "Mixes", "Lives", "Comedy", "Programming", "Lofi Songs", "Couples", "Teenage Programmer", "Arijit Singh", "T-Series"]

  const [cateogry, setCateogry] = useState("All")
  const {videos} = VideoData
  const [onDisplay, setonDisplay] = useState(videos)

  const handleCategory = (tag)=>{
    setCateogry(tag)
    if (tag === "All") {
      setonDisplay(videos)
      return
    }
    setonDisplay(videos.filter((video)=> video.category === tag))
  }
  

  return (
    <>
      <div className="homeContainer" id='homeContainer'>
        <div className="categoryContainer">
          {categoryData.map((tab) => {
            return <h3 className={`categoryTab ${cateogry === tab && 'active'}`} key={tab} onClick={() => handleCategory(tab)}>{tab}</h3>
          })}
        </div>
        <div className="homeBanner">
          <img src={AdBanner} alt="Ad Banner" className='youtubeAdBanner' />
          <div className="infoBox">
            <div>
              <img src={YoutubeLogo} alt="Youtube Logo" />
              <h2>Youtube Premium</h2>
            </div>
            <h1>Watch Everything you love</h1>
            <button>GET IT NOW</button>
          </div>
        </div>
        <div className="videoContainer">
          {onDisplay.map((video)=>{
            return <Video video={video} key={video.image}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Home