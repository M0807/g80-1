import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {id, name, status} = this.props.value
        return (
            <tr  >
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{status}</td>
                    <td >delete</td>
              </tr>
        )
    }
}
