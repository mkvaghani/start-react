import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import Navbar from './components/Navbar/Navbar';
import CustomMessage from './components/CustomMessage/CustomMessage';

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */


const leftItems = [
  {
    as: 'a',
    content: 'LeftLink',
    href: 'https://templatemela.com/',
    icon: 'cogs',
    key: 'leftlink',
    target: '_blank',
  },
]
const rightItems = [
  {
    as: 'a',
    content: 'RightLink-1',
    href: 'https://templatemela.com/',
    icon: 'css3',
    key: 'rightlink1',
    target: '_blank',
  },
  {
    as: 'a',
    content: 'RightLink-2',
    icon: 'disk',
    href: 'https://templatemela.com/',
    key: 'rightlink2',
    target: '_blank',
  },
]


function App() {
  return (
    
    <Navbar leftItems={leftItems} rightItems={rightItems}>
    <Segment>
      <Header as='h1'>Your first react App</Header>

      <Grid>
        <Grid.Column computer={6} mobile={16}>
          <p>
            Welcome to your first React App! It is awesome{' '}
            <span aria-label='emoji' role='img'>
              😉
            </span>
          </p>

          <p>
            This is designed to show very basic starting react project with modern environment. It
            based on the awesome{' '}
            <a
              href='https://github.com/facebookincubator/create-react-app'
              rel='noopener noreferrer'
              target='_blank'
            >
              Create React App package
            </a>{' '}
            with some additions.
          </p>

          <Header as='h4'>It is based on Official Semantic UI Example. It works with react-scripts 2.0 without ejecting.</Header>
         

          <Header as='h4'>React Hot Loader</Header>
          <p>
            <a
              href='https://github.com/gaearon/react-hot-loader'
              rel='noopener noreferrer'
              target='_blank'
            >
              React Hot Loader
            </a>{' '}
            become stable and we can use safely, it improves your delevopment speed cardinally.
          </p>


          <Header as='h4'>Semantic UI React</Header>
          <p>
            
            Semantic UI React{' '}
            <a
              href='https://github.com/Semantic-Org/Semantic-UI-React'
              rel='noopener noreferrer'
              target='_blank'
            >
              Semantic UI React
            </a> is the official React integration for {' '}
            <a
              href='https://semantic-ui.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Semantic UI
            </a>.


          </p>

        </Grid.Column>
        <Grid.Column computer={10} mobile={16}>
          <Header as='h3'>
            Themed <code>Button</code>
          </Header>
          
          <p>
            We changed the <code>primary</code> color of <code>Button</code> component, it is really
            easy
            <span aria-label='emoji' role='img'>
              😁
            </span>{' '}
            Take a look to <code>/src/styling/theme/elements/button.variables</code>. By the way,
            the <code>theme</code> directory structure fully matches the component structure of
            Semantic UI React.
          </p>
          <Button primary>Primary Button</Button>
          <Button
            href='https://semantic-ui.com/usage/theming.html'
            rel='noopener noreferrer'
            target='_blank'
          >
            Learn more
          </Button>

          <Header as='h3'>Custom themed component</Header>
          <p>
            In the real world you will always need custom components, and you will want to get them
            themed like your app. An example is below:
          </p>

          <CustomMessage>Hey, it is a custom message</CustomMessage>

          <p>
            Take a look <code>/src/components/CustomMessage</code> directory. The are some important
            things:
          </p>
          <List bulleted>
            <List.Item>
              we premade <code>heading.less</code> for you, when you will include it in your LESS
              file you will able to use your existing SUI variables!
            </List.Item>
            <List.Item>
              we enabled{' '}
              <a
                href='https://github.com/css-modules/css-modules'
                rel='noopener noreferrer'
                target='_blank'
              >
                CSS modules
              </a>{' '}
              for your components, it means that you will need to use <code>:global</code> when your
              style will match SUI parts
            </List.Item>
          </List>

          <Header as='h3'>P.S.</Header>
          <p>
            This page is fully responsive{' '}
            <span aria-label='emoji' role='img'>
              😁
            </span>
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  </Navbar>
  );
}


export default App;
