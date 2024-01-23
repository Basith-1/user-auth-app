import React, { useEffect, useState } from 'react'

function Home() {

    const [username, SetUsername] = useState("")

    useEffect(()=>{
        if(sessionStorage.getItem('existingUser')){
            SetUsername(JSON.parse(sessionStorage.getItem('existingUser')).username)
        }
    },[])

    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center'>
            <h1 className='mt-5'>Welcome <span className='text-success'>{username}</span></h1>
        </div>
    )
}

export default Home