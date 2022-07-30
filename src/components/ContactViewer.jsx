import './ContactViewer.css';
import React,{useState,useEffect} from 'react';
import axios from "axios"

export default function ContactViewer() {
    const [messages, setMessages] = useState([]);
    const [refresh, setRefresh] = useState([]);
    useEffect(() => {
      axios
        .get(`http://82.65.82.1:4002/api/contact`)
        .then((data) => setMessages(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        );
    }, [refresh]);
    const deletClick = (id)=>{
        console.log(id);
        axios
        .delete(`http://82.65.82.1:4002/api/contact/${id}`)
        .then((data) => console.log(data.data))
        // gestion des erreurs
        .catch((error) =>
          console.warn(`Authorization failed : ${error.message}`)
        )
        // .then(window.location.reload(false));

        setRefresh(!refresh)
    }
    messages&&console.log(messages)
    return(
        <div className="Main messageViewer">
            <h2 className='display-8'>Message Viewer</h2>
            <table className={"table table-striped table-dark table-hover rounded"}>
                <thead className={"rounded"}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {messages.map((msg,index)=>(
                    <tr key={msg.id}>
                        <td>{msg.id}</td>
                        <td>{msg.name}</td>
                        <td>{msg.mail}</td>
                        <td>{msg.Subject}</td>
                        <td>{msg.Message}</td>
                        <td><button onClick={()=>deletClick(msg.id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        )
}