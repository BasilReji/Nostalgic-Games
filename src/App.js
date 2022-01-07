import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { ROUTES } from './Routes.contants';
import './index.scss';
import { Card, CardBody } from './components/Card';
function App() {
  return (
    <div>
      <div className='heading'>
        <h1>Games</h1>
        <div className='games-container'>
          <ul className='games-list'>
            <li>
              <Link to={ROUTES.MINE}>
                <Card>
                  <CardBody>MineSweeper</CardBody>
                </Card>
              </Link>
            </li>
            {/* <li>
              <Link to={ROUTES.DINO}>Chrome Dino</Link>
            </li> */}
            <li>
              <Link to={ROUTES.QUIZ}>
                <Card>
                  <CardBody>Tech Quiz</CardBody>
                </Card>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.SNAKE}>
                <Card>
                  <CardBody>Snake Zenzia</CardBody>
                </Card>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.TIK_TAK_TOE}>
                <Card>
                  <CardBody>Tik Tak Toe</CardBody>
                </Card>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.STOP_WATCH}>
                <Card>
                  <CardBody>Stop Watch</CardBody>
                </Card>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.ROCK_PAPER_SCISSORS}>
                <Card>
                  <CardBody>Rock Paper Scissors</CardBody>
                </Card>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.QUOTES}>
                <Card>
                  <CardBody>Random quotes</CardBody>
                </Card>
              </Link>
            </li>
            {/* <li>
              <Link to={ROUTES.HANGMAN}>Hangman</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
