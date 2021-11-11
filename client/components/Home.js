import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props
  const cleanName= username.split('@');
  return (
    <div>
      <h3>Welcome, {cleanName[0]}</h3>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.email
  }
}

export default connect(mapState)(Home)
