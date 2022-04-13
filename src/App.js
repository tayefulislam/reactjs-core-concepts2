import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';






function App() {


  return (
    <div className="App">


      <ExternalUser></ExternalUser>

    </div>
  );
}





function ExternalUser() {
  const [users, setUsers] = useState(0)

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setUsers(data))


  }, [])



  return (


    <div>
      <h1>External User</h1>
      <p>{users.length}</p>

      <User></User>

    </div>

  )

}


function User(props) {

  console.log(props)

  return (
    <div>

      <h1>Name :{props[0].name} </h1>

    </div>
  );
}


// function User(props) {
//   console.log(props);
//   return (

//     <div>
//       <h3>Name: {props.name}</h3>
//       {/* <p>Email: {props.email}</p>
//       <p>City: {props.city}</p> */}


//     </div>
//   )
// }




// function Counter() {
//   const [count, setCount] = useState(0);

//   // increase count function

//   const increase = () => setCount(count + 1);
//   const decrease = () => setCount(count - 1);


//   // const increase = () => {
//   //   const newCount = count + 1;
//   //   setCount(newCount)
//   // }

//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={increase}>Increaase</button>
//       <button onClick={decrease}>Decreaase</button>
//     </div>
//   )
// }


// const products = [
//   { name: 'Iphone', price: 4545 },
//   { name: 'Hp Laptop', price: 4545 },
//   { name: 'Watch', price: 4545 },
//   { name: 'Cycle', price: 4545 },
//   { name: 'Motor', price: 4545 },
// ]

// function App() {


//   return (
//     <div className="App">

//       {
//         products.map(product => <Product name={product.name} price={product.price}></Product>)
//       }

//     </div>
//   );
// }

// function Product(props) {

//   return (
//     <div className='product'>
//       <h2>Name : {props.name}</h2>
//       <h3>Price : {props.price}</h3>
//     </div>
//   )

// }

export default App;
