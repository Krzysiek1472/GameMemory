import React, { Component } from 'react';
import './App.css'

class Game extends Component {
    fruitArray = this.props.fruits
    randomize = () => {
        return Math.random() - 0.5
    }
    state = {
        fruits: this.fruitArray.sort(this.randomize),
        counter: 0,
        target1: undefined,
        target2: undefined,
        index: [],
    }

    handleChange = (e) => {
        console.log(typeof e.target.id)
        let index = this.state.fruits.findIndex((fruit) => fruit.id == e.target.id);
        const fruits = [...this.state.fruits];
        fruits[index].active = !fruits[index].active;
        this.setState({
            fruits
        })
        this.checkWin(e.target, index);

    }

    checkWin = (target, index) => {

        if (this.state.target1 === undefined) {
            this.state.index.push(index);
            this.setState({
                target1: target,
                index: this.state.index
            })
        }
        else if (this.state.target2 === undefined) {
            this.state.index.push(index);
            this.setState({
                target2: target,
                index: this.state.index
            })
            if (this.state.index[0] === this.state.index[1]) {
                alert('wciśnij coś innego!');
                this.setState({
                    index: [],
                    target1: undefined,
                    target2: undefined
                })
                return
            }

            if (this.state.target1.name === target.name) {
                const target1 = this.state.target1;
                const target2 = target;
                target1.classList.add('removing');
                target2.classList.add('removing');
                setTimeout(() => {
                    target1.remove();
                    target2.remove()
                }, 450)

                let counter = this.state.counter;
                counter = counter + 2;
                if (counter === this.state.fruits.length) {
                    setTimeout(() => {
                        window.alert('wygrałeś!')
                    }, 300)
                }
                this.setState({
                    counter
                })
            }
            else {

                setTimeout(() => {
                    this.state.fruits.forEach((fruit) => fruit.active = false)
                    this.setState({
                        fruits: this.state.fruits
                    })
                }, 300)

            }
            this.setState({
                index: [],
                target1: undefined,
                target2: undefined,
            })
        }


    }
    componentWillUnmount() {
        this.state.fruits.forEach((fruit) => fruit.active = false)
        this.setState({
            fruits: this.state.fruits
        })
    }

    render() {

        let icons = this.state.fruits.map(fruit => {
            return <div className='img' key={fruit.id}><img onClick={this.handleChange} name={fruit.name} src={fruit.active ? fruit.name : fruit.hide} alt="" id={fruit.id} /></div>
        })

        return (<div className='container'>{icons}</div >);
    }

}


export default Game;
