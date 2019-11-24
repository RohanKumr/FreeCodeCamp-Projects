class DrumMachine extends React.Component{
  constructor(){
    super();
    this.state = {
      display:"Drum Machine"
    }
  }
  handleDisplay = display => this.setState({display})
  
  render(){
    return(
      <div id="drum-machine">
        <div id="display"><h3 className="note">{this.state.display}</h3></div>
        <div id="drum-pads">
          {data.map(d=> (
          <DrumPad 
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
        <p class="madeby">by Rohan</p>
      </div>
    )
  }
}

class DrumPad extends React.Component{
  
  componentDidMount(){
    document.addEventListener('keydown' ,  this.handleKeyDown)
    window.focus()
  }
  componentDidUnmount(){
    document.removeEventListener('keydown' ,  this.handleKeyDown)
  }
  handleKeyDown = e => { 
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id)
    }
  }
  
  handleClick = () => {
    this.audio.play();
    this.audio.currentime=0.1;
    this.props.handleDisplay(this.props.id);
  }
  
  render(){
    return(
      <div 
        className="drum-pad"
        onClick={this.handleClick}
           id={this.props.id} >
        <h4>{this.props.letter}</h4>
        <audio 
          ref={ref=> this.audio = ref}
          className="clip"
          src={this.props.src} 
          id={this.props.letter} ></audio>
      </div>
    )
  }
}


const data = [
  { id: 'Heater 1', letter: 'Q', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { id: 'Heater 2', letter: 'W', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { id: 'Heater 3', letter: 'E', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { id: 'Heater 4', letter: 'A', src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'  },
  { id: 'clap', letter: 'S', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'  },
  { id: 'open HH', letter: 'D', src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { id: 'Kick n Hat', letter: 'Z', src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { id: 'Kick', letter: 'X', src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { id: 'Closed HH', letter: 'C', src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'  },
]

ReactDOM.render(<DrumMachine />,
               document.getElementById("root"))
