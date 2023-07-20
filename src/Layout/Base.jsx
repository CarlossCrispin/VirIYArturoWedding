
import { useState } from 'react'
import VideoBackground from '../Components/VideoBackground';
import Main from './Main';

export default function Base() {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      {/* {!show &&
      <Main setShow={setShow} />} */}
      {/* {!show &&
        <VideoBackground setShow={setShow} show={show} />} */}

      {show ? <Main setShow={setShow} /> : (<div className="video-container">
        <VideoBackground setShow={setShow} show={show} />
      </div>)}
    </div>
  )
}
