import React from 'react'
import PropTypes from 'prop-types'

const Dashboard = props => {
  return (
    <div>
        <ul>
            {props.tweetIds.map(id => <li key={id}> {id} </li> )}
        </ul>
    </div>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
