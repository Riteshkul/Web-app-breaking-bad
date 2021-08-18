import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = (id) => {
    const [items, setItems] = useState('')
    const location = useLocation();
    console.log(location.state)
    useEffect(() => {

        const getData = async () => {

            const result = await axios('https://www.breakingbadapi.com/api/characters/' + location.state)
            console.log(result.data)
            setItems(result.data[0])
        }
        getData()
    }, [])

    return (
        <div class="card" id="card-character">
            <img class="card-img-top" src={items?.img} alt="Card image" />
            <div class="card-body">
                <p class="card-title">Name:{items?.name}</p>

                <p>DOB:{items?.birthday}</p>
                <p>Occupation:{items?.occupation}</p>
                <p >Status:{items?.status}</p>
                <p >DOB:{items?.nickname}</p>
                <p >Actor Who Portrays the character :{items?.portrayed}</p>

            </div>
        </div>



    )
}

export default Details
