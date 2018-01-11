import React, { Component } from 'react'
import Field from './Field'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    fields: {
      name: {
        type: 'password',
        value: ''
      }
    }
  }

  onInputChange = (name, value, error) => {
    const fields = this.state.fields
    // This doesn't mutate state. I like it, but why does it work?
    fields[name].value = value
    this.setState({fields})
    console.log(this.state)
  }

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <form>
          {Object.keys(this.state.fields).map(key => (
            <Field key={key}
              name={key}
              type={this.state.fields[key].type}
              value={this.state.fields[key].value}
              onChange={this.onInputChange} />
          ))}
        </form>
      </div>
    )
  }
}

export default App
