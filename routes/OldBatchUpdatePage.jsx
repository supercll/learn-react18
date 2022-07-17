import React, { Component } from 'react'
class OldBatchUpdatePage extends Component {
  state = { number: 0 }
  handelClick = () => {
    // 批量更新
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)
    this.setState({ number: this.state.number + 1 })
    console.log(this.state.number)
    setTimeout(() => {
      // 同步更新
      this.setState({ number: this.state.number + 1 })
      console.log(this.state.number)
      this.setState({ number: this.state.number + 1 })
      console.log(this.state.number)
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={this.handelClick}>+</button>
      </div>
    )
  }
}
export default OldBatchUpdatePage
