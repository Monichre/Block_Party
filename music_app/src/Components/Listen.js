import React, {Component} from 'react'
import Axios from 'axios'
import Sound from 'react-sound';


class Player extends React.Component {
 
    render(){
  
      return(
        <div className="player">
          <div className="player__backward">
            <button onClick={this.props.backward}><i className="fa fa-backward"></i></button>
          </div>
          <div className="player__main">
            <button onClick={false}><i className={this.props.playStatus == 'PLAYING' ? 'fa fa-pause' : 'fa fa-playing'}></i></button>
            <button onClick={false}><i className="fa fa-stop"></i></button>
            <button onClick={false}><i className="fa fa-random"></i></button>
          </div>
          <div className="player__forward">
            <button onClick={false}><i className="fa fa-forward"></i></button>
          </div>
        </div>
      )
    }
  
  }

export default class Listen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            track: {stream_url: '', title: '', artwork_url: ''},
            tracks: [],
            playStatus: Sound.status.STOPPED,
            elapsed: '00:00',
            total: '00:00',
            position: 0,
            playFromPosition: 0,
            autoCompleteValue: ''
          }
    }
    componentDidMount() {
        Axios.get('/mine', {
            user_id: 'SAMPLE_ID',
            musician_id: 'SAMPLE_MUSICIAN_ID'
        }).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }
    render() {
        return (
            <div><Player playStatus={false}/></div>
        )
    }
}