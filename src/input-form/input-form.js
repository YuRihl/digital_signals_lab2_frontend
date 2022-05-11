import { useState } from "react";
import './input-form.css';

export default function InputForm({ receiveData }){
    let [dots, setDots] = useState(['2.8', '2.94', '3.2', '3.38', '3.53', '3.75']);
    let [from, setFrom] = useState('-PI');
    let [to, setTo] = useState('PI');

    const [x, setX] = useState([]);
    const [fourier, setFourier] = useState([]);
    const [mnk, setMnk] = useState([]);

    async function handleData(){
        let rangeRegex = /^(?:-?\d+(?:\.\d+)?|-?(?:\d+(?:\.\d+)?)?pi)$/i;
        if(!rangeRegex.test(from) || !rangeRegex.test(to)) throw new Error('Incorrect range input!')

        let {x, fourier, mnk} = await fetch(`http://localhost:8080?from=${from}&to=${to}&dots=${dots.join(' ')}`)
        .then(response => response.json());

        setX(x);
        setFourier(fourier);
        setMnk(mnk);
    }

    return (
        <div id='form'>
            <div className="form-container">
                <div className="form-item-container">
                    <label className="form-item" htmlFor="from">Enter the range: </label>
                    <input className="form-item" id="from" type="text" value={from} onChange={event => setFrom(event.target.value)} disabled/>
                    <input className="form-item" id="to" type="text" value={to} onChange={event => setTo(event.target.value)} disabled/><br/>
                </div>

            </div>

            <div className="form-container" id="dot-container">
                <label htmlFor="firstY">1:</label>
                <input className="form-item dotY" id="firstY" type="number" 
                    value={dots[0]} onChange={event => setDots(dots.splice(0, 1, event.target.value))}/>

                <label htmlFor="secondY">2:</label>
                <input className="form-item dotY" id="secondY" type="number" 
                    value={dots[1]} onChange={event => setDots(dots.splice(1, 1, event.target.value))}/>

                <label htmlFor="thirdY">3:</label>
                <input className="form-item dotY" id="thirdY" type="number" 
                    value={dots[2]} onChange={event => setDots(dots.splice(2, 1, event.target.value))}/>

                <label htmlFor="fourthY">4:</label>
                <input className="form-item dotY" id="fourthY" type="number"
                    value={dots[3]} onChange={event => setDots(dots.splice(3, 1, event.target.value))}/>

                <label htmlFor="fifthY">5:</label>
                <input className="form-item dotY" id="fifthY" type="number" 
                    value={dots[4]} onChange={event => setDots(dots.splice(4, 1, event.target.value))}/>

                <label htmlFor="sixthY">6:</label>
                <input className="form-item dotY" id="sixthY" type="number" 
                    value={dots[5]} onChange={event => setDots(dots.splice(5, 1, event.target.value))}/>
            </div>

            <button id='form-button' onClick={() => { handleData(); receiveData(x, dots, fourier, mnk); }}>Build!</button>
        </div>
    );
}