import '../style.css';
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Comment({token,userId,recipId}) {
    const [comment,setcomment]=useState([])

    const comm = document.querySelector(".comm")


    useEffect(() => {
        axios
            .get(`http://82.65.82.1:4002/api/comment`)
            .then((data) => setcomment(data.data))
            // gestion des erreurs
            .catch((error) =>
            console.warn(`Authorization failed : ${error.message}`)
            );
        }, []);

        const add = ()=>{
            const headers = {
                headers: {Authorization: `Bearer ${token}`}
            };
            console.log(userId)
            const msg = {usr_id:userId,rec_id:recipId,comment: comm.value};
            comm.value &&axios
            .post(`http://82.65.82.1:4002/api/comment`, msg,headers)
            .then(response => console.log({ articleId: response.data.response.insertId }))
            .catch((error) =>
              console.warn("erreur : " + error)
            );
          }
          let val = 0;
          comment.forEach((comm,index)=>{
            if(recipId === comm.rec_id) val++
          })
  return (
    <div className="comment">
        <p>Comment:</p>
        {val === 0 ? <p>Pas encore de commentaire, postez le votre.</p>:""}
        {comment && comment.map((comm,index)=>(
            <>{recipId === comm.rec_id &&
            <div className='commentZone'>
                
                <p>{comm.usr_id}</p>
                <p>{comm.comment}</p>
            </div>}
            </>
        ))}
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{`Votre commentaire`}</Form.Label>
                <Form.Control as="textarea" rows={3} className="comm" maxlength="150"/>
            </Form.Group>
        </Form>
        <Button type="button" class="btn btn-secondary" onClick={add}>Envoyer</Button>
    </div>
  );
}

export default Comment;