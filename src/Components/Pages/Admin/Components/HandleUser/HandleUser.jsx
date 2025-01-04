import React, { useState } from "react";
import "./HandleUser.sass";
import { login } from "api/api";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../../redux/slices/tokenSlice";

function HandleUser() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const response = await login(formData);
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                dispatch(setToken(response.data.token));
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className='modal-overlay'>
                <div
                    className='modal-container'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='modal-content'>
                        <div className='form-container'>
                            <input
                                type='text'
                                name='username'
                                placeholder='Username'
                                value={formData.username}
                                onChange={handleInputChange}
                                className='form-input'
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleInputChange}
                                className='form-input'
                            />
                            <button
                                className='form-btn'
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HandleUser;
