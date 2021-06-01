import React from 'react'
import img1 from './assets/rasm1.png'
import img2 from './assets/rasm2.png'
import Signin from './Signin'
import Singup from './Singup'

import Item from './Item'


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      isRegistered: false,
      data: [
  { id: 1, name: "Dilshod", status: 'front end'},
  { id: 2, name: "Sardor", status: 'front end'},
  { id: 3, name: "Sardor", status: 'front end'},
]
    }
  }

  render() {
    return (
      <div className="con">
        <h1>Rabbimov</h1>
        <table border="1">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>

          {
              this.state.data.map((value, index) => <Item value={value} key={value.id}/>)
          }
          </tbody>
        </table>
      </div>
  );
 }
}


export default App
