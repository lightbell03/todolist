import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handleIdTextChange = (e) => {
        setUserId(e.target.value);
    }

    const handlePwdTextChange = (e) => {
        setUserPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        navigate('/', {state : {isLogin: true}, replace: true});
    }

    return (
        
        <div style={{display: 'flex', alignItems: 'center', height: "100vh", overflowY: 'scroll', border: '1px solid', justifyContent:'center'}}>
            <form style={{ width: '500px', height: '400px', border: '1px', borderRadius: '5px', backgroundColor: 'white' }} onSubmit={handleSubmit}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <span style={{ paddingLeft: '10px' }}>아이디</span>
                    <input style={{ width: '380px', border: '1px solid', borderRadius: '5px' }} type="text" onChange={handleIdTextChange} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                    <span style={{ paddingLeft: '10px' }}>비밀번호</span>
                    <input style={{ width: '380px', border: '1px solid', borderRadius: '5px' }} type="password" onChange={handlePwdTextChange} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={{ width: '120px', border: '1px solid' }} type='submit' onSubmit={handleSubmit}>로그인</button>
                    <button style={{ width: '120px', border: '1px solid' }} type='submit' onSubmit={handleSubmit}>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default Login;