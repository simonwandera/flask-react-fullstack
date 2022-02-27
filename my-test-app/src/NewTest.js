
import React from 'react';
import { useState, useEffect } from 'react';

const NewTest = () => {

    const [myName, setmyName] = useState()

    useEffect(() => {

        fetch('http://127.0.0.1:5000/api/time', {
            method: 'GET',
        }).then(response => {
            if (response.status !== 200) {
                console.log(response)
            }
            return response.json()
        }).then(data => {
            setmyName(data)

        })
            .catch(error => {
                if (error.response) {
                    console.log(error.response)
                }
            })

    },[])


    return (

        <div>
            {myName && <div>{myName.dates}</div>}
        </div>

    )

}

export default NewTest;