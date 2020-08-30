import React,  { Component }  from 'react';
import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import s from './audioplayer.module.css';

class Audioplayer extends Component  {
  player = React.createRef();
  render() {
    const {audio, autoplay, isAnsweredCorrectly } = this.props;

    if (isAnsweredCorrectly) {
      this.player.current.audio.current.pause();
    }

    return (
      <AudioPlayer
        ref={this.player}
        autoPlay={false}
        autoPlayAfterSrcChange={autoplay}
        src={audio}
        showJumpControls={false}
        // showLoopControl={false}
        showDownloadProgress={false}
        // showLoopControls={false}
        // customControlsSection={
        //   [
        //     RHAP_UI.MAIN_CONTROLS,
        //     RHAP_UI.VOLUME_CONTROLS,
        //   ]
        // }
        customControlsSection={
          [        
            RHAP_UI.MAIN_CONTROLS,
            // <div></div>       
            // RHAP_UI.CURRENT_TIME,
            // RHAP_UI.PROGRESS_BAR,
            // RHAP_UI.DURATION,
            RHAP_UI.VOLUME,
          ]
        }
        customProgressBarSection={
          [
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
            // RHAP_UI.VOLUME,
          ]
        }
        
        customVolumeControls={[]}    
        customAdditionalControls={[]}
        layout="horizontal-reverse"
        onPlay={e => console.log("onPlay")}
      />
    );
  }
}

export default Audioplayer;