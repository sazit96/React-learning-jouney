import { Component } from "react";
import React  from "react";

const Livein = () => ( <h4> Gazipur</h4>)

class fastComponent extends Component {
    render () {
        const myName = 'Ehosanul Islam sazit'
        const bio = <div>
            <h3>Hi, I am {myName}</h3>
            <p>I am a fullstack devoloper and a new learner</p>
        </div>
        return (
            <div>
                <h1>Alhumdulillah All work fine</h1>
                {bio}
                <Livein />
            </div>
        )
    }
}

export default fastComponent;

function functionalComponent() {
    const name = 'Ehosanul islam Sazit'
    return (
        <h1>hi, i am {name}</h1>
    )
}

const anotherFunctionalcom = () => ( <h1>hello i am sazit</h1>)