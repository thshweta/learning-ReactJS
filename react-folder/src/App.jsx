// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }


//to run-
// cd "D:\React Js\react-folder"
// npm install
// npm run dev


// function App(){
//   return 'Hello Shweta';
// }

// export default App


import React from 'react'    //from 'rafec'(react arrow fuction export component)

const App = () => {
  return (
    <>
      <div id='papa'>
       <h1 id='child1'>Shweta</h1>
       <h2 id='child2'>Anshu</h2>
     </div>
      <div id='chacha'>
         <h1 id='sib1'>Pari</h1>
      </div>
    </>
    //<h3>A function can't return more than one thing</h3>
  )
}

export default App
