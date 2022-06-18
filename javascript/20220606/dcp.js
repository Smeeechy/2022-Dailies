/*
create a basic tip calculator using React

this was originally created for an AlgoExpert prompt, which provided styling
but because i didn't write it i'm not including it here
*/

import { useState } from 'react'

// custom component combining label and input
const Input = props => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input {...props} type='number' />
        </>
    )
}

const TipCalculator = () => {
    const [bill, setBill] = useState(10)
    const [tip, setTip] = useState(15)
    const [people, setPeople] = useState(1)

    let totalTip = 9

    if (bill === '' || tip === '' || people === '') totalTip = -1
    else totalTip = bill * tip / 100

    return <>
        <Input
            id='bill'
            label='Bill'
            min='0'
            value={bill}
            onChange={event => setBill(event.target.value)}
        />
        <Input
            id='percentage'
            label='Tip Percentage'
            min='1'
            max='100'
            value={tip}
            onChange={event => setTip(event.target.value)}
        />
        <Input
            id='people'
            label='Number of People'
            min='1'
            value={people}
            onChange={event => setPeople(event.target.value)}
        />
        <p>Total Tip: {totalTip >= 0 ? `$${totalTip.toFixed(2)}` : '-'}</p>
        <p>Tip Per Person: {(totalTip >= 0 && people > 0) ? `$${(totalTip / people).toFixed(2)}` : '-'}</p>
    </>
}

export default TipCalculator