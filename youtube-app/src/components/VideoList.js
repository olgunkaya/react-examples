import React from "react";
import VideoItem from "./VideoItem";

// just destructured the videos out of props.
// we could of use (props) and call below as props.videos too.
const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map((item) => {
    return (
      <VideoItem
        key={item.id.videoId}
        video={item}
        onVideoSelect={onVideoSelect}
      />
    );
  });

  return <div className="ui relaxed divided list">{videoList}</div>;
};

export default VideoList;
