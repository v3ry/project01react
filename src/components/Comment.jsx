import '../style.css';
import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Comment({token,userId,recipId,pseudo,power}) {
    const [comment,setComment]=useState([])
    const [refresh, setRefresh] = useState(false);

    const comm = document.querySelector(".comm")
    const commentZone = document.querySelector(".comm")
    
    useEffect(() => {
        axios
        .get(`http://82.65.82.1:4002/api/comment`)
        .then((data) => setComment(data.data))
        // gestion des erreurs
        .catch((error) =>
        console.warn(`Authorization failed : ${error.message}`)
        );
        }, [refresh]);

        // get()
        const add = ()=>{
            const headers = {
                headers: {Authorization: `Bearer ${token}`}
            };
            console.log(userId)
            if(comm.value){
            const msg = {usr_id:userId,rec_id:recipId,comment: comm.value};
            const addValue = [...comment,{usr_id:userId,rec_id:recipId,comment: comm.value}]
            comm &&axios
            .post(`http://82.65.82.1:4002/api/comment`, msg,headers)
            .then(response => console.log(response))
            .then(commentZone.value="")
            .then(setComment(addValue))
            .catch((error) =>
              console.warn("erreur : " + error)
            );
}
          }
          let val = 0;
        //   comment.forEach((comm,index)=>{
        //     if(recipId === comm.rec_id) val++
        //   })

          const deletClick = (id,name)=>{
            console.log(id);
            const deletMap = comment.filter(val=>(
                val.id !== id
            ))
            axios
            .delete(`http://82.65.82.1:4002/api/comment/${id}`,{
                headers: {Authorization: `Bearer ${token}`,sendBy:name}
            })
            .then((data) => console.log(data.data))
            .then(setComment(deletMap))
            // .then(setRefresh(!refresh))
            // .then(window.location.reload(false))
            // gestion des erreurs
            .catch((error) =>
              console.warn("erreur : " + error)
            );
            
            // .catch(setNum(2))
            
    
            // setRefresh(!refresh)
        }
        // let canDelete = power === 1 || pseudo === comm.name
  return (
    <div className="comment">
        <p>Comment:</p>
        {val === 0 ? <p>Pas encore de commentaire, postez le votre.</p>:""}
        {comment && comment.map((comm,index)=>(
            <>{recipId === comm.rec_id &&
            <div className='commentZone'>
                {console.log("power : " + power + "  pseudo : " + pseudo)}
                {/* <p>{comm}</p> */}
                <p>{comm.name}</p>
                <p>{comm.comment}</p>
                { (power === 1 || pseudo === comm.name) &&<Button variant="outline-danger" onClick={()=>deletClick(comm.id,comm.name)}>Delete</Button>}
            </div>}
            </>
        ))}
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{`Votre commentaire`}</Form.Label>
                <Form.Control as="textarea" rows={3} className="comm" maxLength="150"/>
            </Form.Group>
        </Form>
        <Button type="button" className="btn btn-secondary" onClick={add}>Envoyer</Button>
    </div>
  );
}

export default Comment;