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
  { id: 4, name: "Azizbek", status: 'front end'},
  { id: 5, name: "Sardor", status: 'front end'},
  { id: 6, name: "Humoyin", status: 'front end'},
  { id: 7, name: "Sardor", status: 'front end'},
  { id: 8, name: "Elmurod", status: 'front end'},
]
    }
  }

  render() {
    const onClick = () => {
      this.setState({isRegistered: !this.state.isRegistered })
    }
    const onDelete = (id) => {
      console.log(id)
      const data1 = this.state.data.filter((value)=> value.id !== id)
      this.setState({data: data1})
    }
    return (
      <div className="con">
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
