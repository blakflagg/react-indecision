class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const count = parseInt(localStorage.getItem('counter'));

    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }

  }
  componentDidUpdate(prevProps, prevState) {

    if (prevState.count !== this.state.count) {
      localStorage.setItem('counter', this.state.count)
      console.log('saving data..');
    }
  }
  handlePlusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }


  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>resest</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));

/* 

let count = 0;
const addOne = () => {
  count ++;
  //console.log('addOne', count);
  renderCounterApp();
};

const minusOne = () => {
//  console.log('minusOne');
count --;
renderCounterApp();

};

const resetCount = () => {
//  console.log('RESET');
count = 0;
renderCounterApp();
};




const renderCounterApp = () => {

  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>RESET</button>
    </div>
  );
  ReactDOM.render(template2,appRoot);
;}

renderCounterApp();
 */