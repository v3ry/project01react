import './ContactViewer.css';
import React,{useState,useEffect,useContext} from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Notif from './Notif';
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";


export default function ContactViewer() {
    const [messages, setMessages] = useState([]);
    const [refresh, setRefresh] = useState([]);
    const [num,setNum]= useState(0);
    const { isOnline, setIsOnline } = useContext(UserContext);
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [pwr,setPwr] = useState(0)
    const history = useNavigate();
    // console.log(isOnline);

    const deletClick = (id)=>{
        console.log(id);
        pwr === 1 && axios
        .delete(`http://82.65.82.1:4002/api/contact/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((data) => console.log(data.data))
        .then(setNum(1))
        // gestion des erreurs
        .catch((error) =>setNum(2)
        )
        // .catch(setNum(2))
        // .then(window.location.reload(false));

        setRefresh(!refresh)
    }
    const editClick = (id)=>{
        const idd = document.querySelector("#a")
        const nam = document.querySelector("#b")
        const email = document.querySelector("#c")
        const sub = document.querySelector("#d")
        // const mess = ["blabla1","blabla2","blabla3"]
        const mess = document.querySelector("#e")
        idd.value = users[id].id;
        nam.value = users[id].name
        email.value = users[id].mail
        sub.value = users[id].Subject
        mess.value = users[id].Message
        console.log(users[id]);
    }
    const updateClick = (id)=>{
        const idd = document.querySelector("#a")
        const nam = document.querySelector("#b")
        const email = document.querySelector("#c")
        const sub = document.querySelector("#d")
        // const mess = ["blabla1","blabla2","blabla3"]
        const mess = document.querySelector("#e")
        const msg = {name:nam.value,mail:email.value,Subject:sub.value,Message:mess.value}

        const headers = {
            headers: {Authorization: `Bearer ${token}`}
        };
        
        pwr === 1 && axios
        .put(`http://82.65.82.1:4002/api/contact/${idd.value}`,
        {
        name:nam.value,
        mail:email.value,
        Subject:sub.value,
        Message:mess.value},
        headers

        )
        .then((data) => console.log(data.data))
        .then(setNum(1))
        // gestion des erreurs
        .catch((error) =>setNum(2)
        )
        // .catch(setNum(2))
        // .then(window.location.reload(false));

        setRefresh(!refresh)
        window.location.reload(false)
    }
    // const notif = ()=>{
    //     console.log("num : " + num);
    //     if(num===1){
    //         return <Notif alert="green"/>
    //     }else if (num===2){
    //         return <Notif alert="red"/>
    //     }
    // }
    // messages&&console.log(messages)

    useEffect(() => {
        refreshToken();
        getUsers();
    }, [refresh]);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://82.65.82.1:4002/token');
            setToken(response.data.accessToken);
            setIsOnline(response.data.accessToken)
            console.log(jwt_decode(response.data.accessToken))
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            setPwr(decoded.power)
            console.log(decoded.power)
        } catch (error) {
            if (error.response) {
                history("/");
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
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJWT.get('http://82.65.82.1:4002/api/contact', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }

    return(
        <div className="Main messageViewer">
            <h2 className='display-8'>Message Viewer</h2>
            <table className={"table table-striped table-dark table-hover rounded"}>
                <thead className={"rounded"}>
                <tr>
                    <th>ID2</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((msg,index)=>(
                    <tr key={msg.id}>
                        <td>{msg.id}</td>
                        <td>{msg.name}</td>
                        <td>{msg.mail}</td>
                        <td>{msg.Subject}</td>
                        <td>{msg.Message}</td>
                        <td><Button variant="outline-danger" onClick={()=>deletClick(msg.id)}>Delete</Button></td>
                        <td><Button variant="outline-danger" onClick={()=>editClick(index)}>Edit</Button></td>
                    </tr>
                    ))}
                {users[0] === undefined ? <tr><td>No more message</td><td>X</td><td>X</td><td>X</td><td>X</td><td>X</td></tr>:""}
                <tr >
                        <td><input type="text" id="a" /></td>
                        <td><input type="text" id="b"/></td>
                        <td><input type="text" id="c"/></td>
                        <td><input type="text" id="d"/></td>
                        <td><input type="text" id="e"/></td>
                        <td></td>
                        <td><Button variant="success" onClick={()=>updateClick()}>Update</Button></td>
                    </tr>
                </tbody>

            </table>
            {/* <p>{isOnline}</p> */}
            {/* {Notif.launchMsg("red","blablabla")} */}
        </div>
        )
}