import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Field extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onChange: PropTypes.func.isRequired
  }

  state = {
    value: this.props.value,
    error: false
  }

  componentWillReceiveProps (update) {
    this.setState({ value: update.value })
  }

  onChange = (evt) => {
    const name = this.props.name
    const { value } = evt.target
    const error = this.props.validate ? this.props.validate(value) : false

    this.setState({ value, error })
    this.props.onChange(name, value, error)
  }

  render () {
    return (
      <div className='field-wrapper'>
        <input
          placeholder={this.props.placeholder}
          type={this.props.type}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span style={{ color: 'red' }}>{ this.state.error }</span>
      </div>
    )
  }
}

export default Field
