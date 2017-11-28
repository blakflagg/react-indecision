class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false,
      message: 'Hey these are some detail  you can now see'
    }
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })

  }

  render() {
    return (
      <div>
        <h1>Visibilty App</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility == true ? 'Hide Details' : 'Show Details'}</button>
        <p>{this.state.visibility === true ? this.state.message : ''}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
{
/* const app = {
  title: "Visibilty App",
  message: "Hey These are some details you can now see",
  isVisible: false
}

const toggleVisibility = () =>{
  app.isVisible = !app.isVisible;
  renderApp();
}

const appRoot = document.getElementById('app');

const renderApp = () => {

const template = (
  <div>
    <h1>{app.title}</h1>
    <button onClick={toggleVisibility}>{app.isVisible == true ? 'Hide Details' : 'Show Details'}</button>
    <p>{app.isVisible === true ? app.message : ''}</p>
  </div>
);

ReactDOM.render(template, appRoot);
*/}