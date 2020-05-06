import React from 'react'
import { connect } from 'react-redux'
import { Container, Card, Icon, Button } from 'semantic-ui-react'
import './test.css'

import { setTest } from '../store/actions/test'

const CardExampleCard = (props) => {
  const handleClick = value => (e) => {
    e.preventDefault()
    props.setTest(value)
  }

  return (
    <Container className='testContainer'>
      <Card>
        <Card.Content>
          <Card.Header>Penny Wise</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
        Penny Wise is a clown from IT.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
        1m Friends
          </a>
        </Card.Content>
      </Card>
      <Button onClick={handleClick('test')}>Test</Button>
      <Button onClick={handleClick(null)}>Reset</Button>
    </Container>
  )
}

export default connect(null, { setTest })(CardExampleCard)
