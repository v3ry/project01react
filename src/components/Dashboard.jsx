/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import UserContext from "../contexts/UserContext";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [pwr,setPwr] = useState(0)
    const history = useNavigate();
    const { pseudo, setPseudo } = useContext(UserContext);
    const { power, setPower } = useContext(UserContext);
    const { myToken, setMyToken } = useContext(UserContext);
    useEffect(() => {
        refreshToken();
        getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://82.65.82.1:4002/token');
            setToken(response.data.accessToken);
            setMyToken(response.data.accessToken);
            
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setPseudo(decoded.name);
            setExpire(decoded.exp);
            setPwr(decoded.power)
            setPower(decoded.power)
            console.log(decoded.power)
        } catch (error) {
            if (error.response) {
                history("/login");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://82.65.82.1:4002/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setPseudo(decoded.name);
            setPower(decoded.power)
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://82.65.82.1:4002/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    const Logout = async () => {
        try {
            await axios.delete('http://82.65.82.1:4002/logout');
            setPseudo("")
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
    console.log(name)
    return (
        <div className="Main">
            <h1>Welcome Back: {name}</h1>
            {/* <button onClick={getUsers} className="button is-info">Get Users</button> */}
            {pwr === 1 &&<table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Power</th>
                    </tr>
                </thead>
                <tbody>
                    {pwr === 1 && users.map((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.power}</td>
                            {/* <td>{isOnline}</td> */}
                        </tr>
                    ))}

                </tbody>
            </table>}
            <div className="buttonDashboard">
                <Button onClick={Logout} variant="danger">Logout</Button>
                <Link to="/recipe"><Button variant="success">Ajout Recette</Button></Link>
                {power === 1 && <div>
                <Link to="/recipv"><Button variant="success">Recipe Viewer</Button></Link>
                <Link to="/contactv"><Button variant="success">Contact Viewer</Button></Link>
                </div>}
            </div>
        </div>
    )
}

export default Dashboard
