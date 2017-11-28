
console.log('app.js is running');

//JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};
//
const onFormSubmit = (e) =>{
  e.preventDefault();
  const option = e.target.elements.option.value;

  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAll = (e) =>{
  app.options = [];
  renderApp();
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const buildList = () =>{
  let count = 0;
  return app.options.map((listoption) =>  <li key={count++}>{listoption}</li>)

}
const appRoot = document.getElementById('app');
const numbers = [101,44,22];

const renderApp = () =>{

  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are you options' : 'No Options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {buildList()}
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
      </form>
    </div>
  );
ReactDOM.render(template,appRoot);
}

renderApp();