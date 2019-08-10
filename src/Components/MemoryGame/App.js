import React from 'react';
import Game from './Game';
import './App.css';

import banana from './images/banana.png'
import cherry from './images/cherry.png'
import lemon from './images/lemon.png'
import orange from './images/orange.png'
import strawberry from './images/strawberry.png'
import redApple from './images/redApple.png'
import watermelon from './images/watermelon.png'
import greenApple from './images/greenApple.png'
import kiwi from './images/kiwi.png'
import awokado from './images/awokado.png'
import unseen from './images/unseen.jpg'


class App extends React.Component {
    state = {
        difficultyActive: true,
        gameActive: false,
        buttonStartActive: false,
        resetActive: true,
        arr: undefined
    }
    arrEasy = [
        { id: 0, name: strawberry, hide: unseen, active: false },
        { id: 1, name: lemon, hide: unseen, active: false },
        { id: 2, name: cherry, hide: unseen, active: false },
        { id: 3, name: banana, hide: unseen, active: false },
        { id: 4, name: orange, hide: unseen, active: false },
        { id: 5, name: strawberry, hide: unseen, active: false },
        { id: 6, name: lemon, hide: unseen, active: false },
        { id: 7, name: cherry, hide: unseen, active: false },
        { id: 8, name: banana, hide: unseen, active: false },
        { id: 9, name: orange, hide: unseen, active: false }
    ]

    arrHard = [...this.arrEasy,
    { id: 10, name: redApple, hide: unseen, active: false },
    { id: 11, name: watermelon, hide: unseen, active: false },
    { id: 12, name: greenApple, hide: unseen, active: false },
    { id: 13, name: kiwi, hide: unseen, active: false },
    { id: 14, name: awokado, hide: unseen, active: false },
    { id: 15, name: redApple, hide: unseen, active: false },
    { id: 16, name: watermelon, hide: unseen, active: false },
    { id: 17, name: greenApple, hide: unseen, active: false },
    { id: 18, name: kiwi, hide: unseen, active: false },
    { id: 19, name: awokado, hide: unseen, active: false }
    ]
    handleClick = (e) => {

        switch (e.target.id) {
            case '1':
                e.target.parentNode.remove()
                this.setState({
                    arr: this.arrEasy,
                    buttonStartActive: true
                })
                break;
            case '2':
                e.target.parentNode.remove()
                this.setState({
                    arr: this.arrHard,
                    buttonStartActive: true
                })
                break;

            case '3':
                this.setState({
                    gameActive: !this.state.gameActive,
                    resetActive: !this.state.resetActive
                })
                break;

            default: return

        }

    }
    render() {
        return (

            <>
                <div className='difficulty'>
                    <h1>Wybierz poziom Trudności</h1>
                    <button onClick={this.handleClick} id='1'>Easy</button>
                    <button onClick={this.handleClick} id='2'>Hard</button>
                </div>
                {this.state.gameActive && <Game fruits={this.state.arr} />}
                {this.state.buttonStartActive && <button id='3' onClick={this.handleClick}> {this.state.resetActive ? 'Start' : 'reset'} </button>}
            </>

        );
    }
}

export default App;