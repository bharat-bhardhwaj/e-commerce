import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
      <Header />

      <main className="py-3">
        <h1>
          <Container>
            <HomeScreen/>
            Welcome to Broshop
            </Container>
        </h1>
      </main>

      <Footer />
    </>
  )
}

export default App
