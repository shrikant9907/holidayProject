import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = ({Component}) => {
    const navigate = useNavigate()
    // const { component } = props;
    useEffect(() => {
        let auth = localStorage.getItem('signupData');
        if (!auth) {
            navigate('/login')
        }
    },[])
    return (
        <div>
            <Component/>
        </div>
    )
}

export default Protected