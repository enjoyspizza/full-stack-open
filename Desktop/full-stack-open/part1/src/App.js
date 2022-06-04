const Hello = (props) => {
  const now = new Date()
  return (
    <div>
      <p>New York Time {now.toString()}</p>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href="https://github.com/enjoyspizza">pizzapower</a>
    </div>
  )
}
const App = () => {
  const name = "Danny"
  const age = 10
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name="Bob" age={20+ 12}/>
      <Footer />
    </>
  )
}


export default App;
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20


//   return(
//     <div>
//     <p>Hello world, it is {now.toString()}</p>
//     <p>
//       {a} plus {b} is {a+b}
//     </p>
//   </div>
// )
// }
// export default App
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
