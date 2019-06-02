import React from 'react';
import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Message from './components/Message';
import MessageBody from './components/MessageBody';


function App() {
  return (
    <div className="App">
      <Container>
        <Navbar/>
        <Signup />
        <Message title="Hello World">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <strong> Pellentesque risus mi.</strong>
        </Message>
      </Container>
    </div>
  );
}

export default App;