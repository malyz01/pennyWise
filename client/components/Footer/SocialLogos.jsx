import React from 'react'
import { Icon } from 'semantic-ui-react'

class SocialLogos extends React.Component {
  render () {
    return (
      <div className='mediaContainer'>
        <Icon name='home' size='massive' />
        <Icon name='facebook official' size='massive' />
        <Icon name='twitter square' size='massive' />
        <Icon name='instagram' size='massive' />
        <Icon name='soundcloud' size='massive' />
        <Icon name='youtube square' size='massive' />
      </div>
    )
  }
}

export default SocialLogos
