

import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

export default function Increment() {
    const [Count, setCount] = useState(0)
    let change = () => {

        return setCount(Count + 1)
    }
    return (
        <div className="text-center mt-5">
            <h1>{Count}</h1>
            <Button className="shadow" onClick={change}>Click</Button>
        </div>
    )
}
