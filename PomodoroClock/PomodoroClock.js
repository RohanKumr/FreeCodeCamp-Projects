class App extends React.Component{
  constructor(){
    super();
    
    this.state={
      session: false,
      breakLength: 5,
      sessionLength:25,
      timerMinute:25,
      timerSecond:0,
      sessionVariable:"Session"
    }
  }
  
  breakDecrease = () => {
    this.setState({
      breakLength: this.state.breakLength === 1 
      ? this.state.breakLength : this.state.breakLength -1
    })
  }
  
  breakIncrease = () => {
    this.setState({
      breakLength: this.state.breakLength === 60 
      ? this.state.breakLength : this.state.breakLength + 1
    })
  }
  
  sessionDecrease = () => {
    this.setState({
      sessionLength: this.state.sessionLength === 1 
      ? this.state.sessionLength : this.state.sessionLength -1,
       timerMinute: this.state.timerMinute === 1 
      ? this.state.timerMinute : this.state.timerMinute - 1
    })
  }
  
  sessionIncrease = () => {
    this.setState({
      sessionLength: this.state.sessionLength === 60 
      ? this.state.sessionLength : this.state.sessionLength + 1 ,
      timerMinute: this.state.timerMinute === 60 
      ? this.state.timerMinute : this.state.timerMinute + 1
    })
  }
  
  startStop = () => {
    let intervalId = setInterval(this.decreaseTimer, 1000)
      
      this.setState({
        intervalId : intervalId,
        session:!this.state.session
      })
  }
  
  decreaseTimer = () => {
    switch(this.state.timerSecond){
      case 0:
        if(this.state.timerSecond == 0 && this.state.timerMinute == 0 ){
          this.setState({
            sessionVariable: this.state.sessionVariable == "Session" ? "Break": "Session"
          })
        }
        if(this.state.session){
           this.setState({
            timerSecond: 59,
            timerMinute: this.state.timerMinute == 0 
             ? this.state.breakLength : this.state.timerMinute - 1 
          })
       }
        break;
      default: 
        if(this.state.session){
           this.setState({
          timerSecond: this.state.timerSecond - 1
        })
           }
      }
  }
  
  resetThis = () =>{ 
    this.setState({
      breakLength:5 , 
      sessionLength: 25, 
      timerMinute:25, 
      timerSecond: 0 , 
      session: false,
      sessionVariable:"Session"
    })}
 
  render(){
    return(
    <div>
        <hr />
        <label id="break-label">Break Length: </label>
        <div id="break-length">{this.state.breakLength}</div>
        <button id="break-decrement" onClick={this.breakDecrease} >Break Decrement</button>
        <button id="break-increment" onClick={this.breakIncrease} >Break Increment</button>
        <hr />
        
        <label id="session-label">Session Length: </label>
        <div id="session-length">{this.state.sessionLength}</div>
        <button id="session-decrement" onClick={this.sessionDecrease}>Session Decrement</button>
        <button id="session-increment" onClick={this.sessionIncrease}>Session Increment</button>
        <hr />
        
        <label id="timer-label">{this.state.sessionVariable}</label>
        <div id="time-left">
          <span>{this.state.timerMinute < 10
              ? "0" + this.state.timerMinute
                : this.state.timerMinute }</span>
          <span>:</span>
          <span>{
            this.state.timerSecond === 0 
              ? "00" 
              : this.state.timerSecond < 10 
              ? "0" + this.state.timerSecond
              : this.state.timerSecond }
          </span>
        </div>
        
        <button id="start_stop" onClick={this.startStop}>Start/Stop</button>
        <button id="reset" onClick={this.resetThis}>Reset</button>
        <p>{this.state.session.toString()}</p>
        <hr />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"))
