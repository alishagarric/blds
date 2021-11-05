/**
 *
 * VideoRowStyle.js
 * @author Alisha Garric
 * @description Simple component for column sectioned content.
 *
 */

// Core
import React, { Component } from "react";

// Styles
import { VideoRowClassName, VideoRowStyle } from "./styles.scss";
import { Inner } from "../../Inner";
import ReactPlayer from "react-player";


// Begin Component
//////////////////////////////////////////////////////////////////////

type LMNTS_VideoRow = {
  video: string;
  poster: string;
  alt: string;
}

type LMNTS_VideoRow_State = {
  playerOpen: boolean;
}

/**
 *
 * VideoRow.js
 * @author Alisha Garric
 * @description Column content
 *
 */
export class VideoRow extends Component<
  LMNTS_VideoRow, LMNTS_VideoRow_State
> {
  constructor(props: LMNTS_VideoRow) {
    super(props);

    this.state = {
      playerOpen: false,
    };
  }

  render(){
    let { alt, poster, video } = this.props;

    let videoToPlay = <ReactPlayer
      url={video}
      playing={true}
      controls={true}
      loop={true}
      width={"100%"}
      height={"100%"}
      className={`${VideoRowClassName}__overlay__video-to-play`}
    />

    return (
      <VideoRowStyle className={`${VideoRowClassName}`}>
          <div className={`txt-caption`}>Learn More</div>
          <div className={`${VideoRowClassName}__trailer`}>
            {!this.state.playerOpen && 
              <>
                <img src={poster} alt={alt} title={alt}/>
              
                <ReactPlayer
                  url={video}
                  playing={true}
                  loop={true}
                  volume={0}
                  width={"100%"}
                  height={"100%"}
                  className={`${VideoRowClassName}__trailer__video`}
                />

                <button 
                  className={`${VideoRowClassName}__trailer__toggle`}
                  onClick={() => this.setState({playerOpen: true})}
                >
                  ➤
                </button>
              </>
            }

            {this.state.playerOpen && videoToPlay}
          </div>
      </VideoRowStyle>
    );
  };
};

// End Component
//////////////////////////////////////////////////////////////////////
