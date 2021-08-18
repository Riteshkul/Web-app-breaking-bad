import React from "react"
import { useState } from 'react'
import Characters from "./characters"
const Home = ({ items, isLoading }) => {
    const starter = items.slice(0, 10)

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    //console.log(dummy)
    const pagin = (value) => {

        const end1 = value * 10;
        const start1 = end1 - 10;
        setStart(start1);
        setEnd(end1);

    }
    return (
        isLoading ? (<h1>Loading</h1>)
            :
            <div>

                <section className="cards">
                    {items.slice(start, end).map(item => (

                        <Characters key={item.char_id} item={item}></Characters>

                    ))}

                </section>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" onClick={() => pagin(1)}>1</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(2)}>2</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(3)}>3</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(4)}>4</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(5)}>5</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(6)}>6</a></li>
                        <li className="page-item"><a className="page-link" onClick={() => pagin(7)}>7</a></li>

                    </ul>
                </nav>
            </div>

    )
}

export default Home
