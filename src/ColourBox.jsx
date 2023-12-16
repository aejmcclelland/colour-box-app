import { useState } from 'react';
import '../src/ColorBox.css';

function randomColourChoice(arr) {
    const i = Math.floor(Math.random() * arr.length);
    return arr[i]
}

export default function ColourBox({ colours }) {
    const [colour, setColour] = useState(randomColourChoice(colours));
    const changeColour = () => {
        const randomColour = randomColourChoice(colours)
        setColour(randomColour);
    };
    return (
        <div
            className='ColourBox'
            onClick={changeColour}
            style={{ backgroundColor: colour }}></div>
    );
}


