class App extends React.Component{
  constructor(){
    super();
    this.state = {
      oldValue: "",
      displayValue:"0",
      minus:2
    }
    this.equalizer = this.equalizer.bind(this)
  }
  
  clickHandler(val){
    this.setState({
      displayValue: 
      this.state.displayValue == 0 
        || this.state.displayValue == "+" 
        || this.state.displayValue == "-" 
        || this.state.displayValue == "*" 
        || this.state.displayValue == "/" 
          ?  val : this.state.displayValue + val,
      oldValue: this.state.oldValue == ""  ? val : this.state.oldValue + val
    })
  }
  
  clearDisplay(){
    this.setState({
      oldValue:"",
      displayValue:0
    })
  }
  inputDecimal(dot){
    this.setState({
      displayValue: 
        this.state.displayValue == "0"
        ? "0."
        : this.state.displayValue.indexOf(".") == -1
        ? this.state.displayValue + dot 
        : this.state.displayValue,
       oldValue: this.state.displayValue.indexOf(".") == -1 ? this.state.oldValue + dot: this.state.oldValue
    })
  }
  
  // ---- OOPERATORS 
  add(plus){
    
    this.setState({
      displayValue: plus,  
      oldValue : this.state.oldValue[this.state.oldValue.length - 1 ] == "+" 
      || this.state.oldValue[this.state.oldValue.length - 1 ] == "-"
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "*"   
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "/"
      ? this.state.oldValue.replace(/.$/,"+")  
      :this.state.oldValue + plus
    })
  }
  subtract(minus){
    this.setState({
      
      displayValue: minus,
      
      oldValue : this.state.oldValue[this.state.oldValue.length - 1 ] == "+" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "*" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "/"
      ? this.state.oldValue  
      :this.state.oldValue + minus ,
      
      minus : this.state.oldValue[this.state.oldValue.length - 1 ] == "+" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "*" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "/"
      ? this.state.minus + 1 : this.state.minus
    })
  }
  multiply(cross){
    this.setState({
      displayValue: cross,  
      oldValue : this.state.oldValue[this.state.oldValue.length - 1 ] == "+" 
      || this.state.oldValue[this.state.oldValue.length - 1 ] == "-" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "*" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "/"
      ? this.state.oldValue.replace(/.$/,"*")  
      :this.state.oldValue + cross
    })
  }
  divide(by){
    this.setState({
      displayValue: by,  
      oldValue : this.state.oldValue[this.state.oldValue.length - 1 ] == "+" 
      || this.state.oldValue[this.state.oldValue.length - 1 ] == "-"
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "*" 
      ||this.state.oldValue[this.state.oldValue.length - 1 ] == "/"
      ? this.state.oldValue.replace(/.$/,"/")  
      :this.state.oldValue + by
    })
  }
 
  
  equalizer(){
    if(this.state.minus % 2 === 0){
      this.setState({ 
        oldValue:eval(this.state.oldValue),
        displayValue: eval(this.state.oldValue)
      })
    } else {
      this.setState({ 
        oldValue :"-" + eval(this.state.oldValue),
      displayValue:"-" + eval(this.state.oldValue)
    })
    }
  }
  render(){
    return(
      <div id="Container">
        <div className="old-value">{this.state.oldValue}</div>
        <div id="display">{this.state.displayValue}</div>
        <div>
          <div class="row">
            <div  className="btn-three ac" id="clear" onClick={() => this.clearDisplay()}>AC</div>
            <div  className="btn-three" id="divide" onClick={() => this.divide("/")}>/</div>
          </div>
          <div class="row">
            <div  className="btn-three" id="seven" onClick={() => this.clickHandler("7")}>7</div>
            <div  className="btn-three" id="eight" onClick={() => this.clickHandler("8")}>8</div>
            <div  className="btn-three" id="nine" onClick={() => this.clickHandler("9")}>9</div>
            <div  className="btn-three" id="multiply" onClick={() => this.multiply("*")}>*</div>
          </div>
          <div class="row">
            <div  className="btn-three" id="four" onClick={() => this.clickHandler("4")}>4</div>
            <div  className="btn-three" id="five" onClick={() => this.clickHandler("5")}>5</div>
            <div  className="btn-three" id="six" onClick={() => this.clickHandler("6")}>6</div>
            <div  className="btn-three" id="subtract" onClick={() => this.subtract("-")}>-</div>
          </div>
          <div class="row">
            <div  className="btn-three" id="one" onClick={() => this.clickHandler("1")}>1</div>
            <div  className="btn-three" id="two" onClick={() => this.clickHandler("2")}>2</div>
            <div  className="btn-three" id="three" onClick={() => this.clickHandler("3")}>3</div>
            <div  className="btn-three" id="add" onClick={() => this.add("+")}>+</div>
          </div>
          <div class="row">
            <div  className="btn-three" id="zero" onClick={() => this.clickHandler("0")} id="zero">0</div>
            <div className="btn-three" id="decimal" onClick={() => this.inputDecimal(".")}>.</div>
            <div  className="btn-three equals" id="equals" onClick={this.equalizer}>=</div>
          </div >
        </div> 
        
        <div className="madeby">Designed and Coded By<br />Rohan</div>
     </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById("root"))
