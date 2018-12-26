import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import { Tweet } from './'

const Dashboard = props => {
  return (
    <div>
      <ul className="dashboard-list">
        {props.tweetIds.map(id =>
          <li key={id}>
            <Tweet id={id} />
          </li>
        )}
      </ul>
    </div>
  )
}

Dashboard.propTypes = {

}

export default Dashboard
