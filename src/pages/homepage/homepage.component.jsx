import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'


const HomePage=(props)=>(
    <div className='homepage'>
        <button onClick={()=>props.history.push('/hat')}>Back to hat</button><br></br>
        <Directory />
    </div>
)

export default HomePage