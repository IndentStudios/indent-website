import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button
} from 'react-bootstrap'
import './App.scss'

import ReactGA from 'react-ga'
import Logo from './assets/indent.svg?component'

ReactGA.initialize('G-K7PEMZT73R');
ReactGA.pageview(window.location.pathname + window.location.search)

const runAction = (action) => () => {
  // TODO: Log something into google analytics.
  ReactGA.event({action: action, category: 'website'}, ['webButtonClick'])

  if (action === 'tebex') {
    return window.open('https://indent.tebex.io/category/2302988', '_blank')
  } else if (action === 'discord') {
    return window.open('"https://bit.ly/3XwM1Du"', '_blank')
  }
}

const App = () => {
  return (
    <Container className="my-2">
      <Row>
        <Col>
          <Logo></Logo>
          <h1 className="text-center my-3">Indent Studios</h1>
          <h2 className="text-center my-3">High quality FiveM Tools & Resources.</h2>
        </Col>
        <Col>
          <Row>
            <ButtonGroup vertical>
              <Button onClick={runAction('tebex')}>Tebex</Button>
              <Button onClick={runAction('discord')}>Discord</Button>
            </ButtonGroup>
          </Row>
        </Col>
      </Row> 
    </Container>
  )
}

export default App
