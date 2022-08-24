import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect,useContext } from 'react'
import { render } from "react-dom";
import axios from "axios";


export default function Review({recipId,note,noteWeb,apiReview,token,haveVoted,userId}) {
    // const [apiReview, setApiReview] = useState([]);
    const [webReview, setWebReview] = useState();
    const [usrReview, setUsrReview] = useState(1);
    const [boolLock, setBoolLock] = useState(true);



// console.log("note :   " + note + "  Noteweb :  "+noteWeb)
      useEffect(() => {
            setUsrReview(note)
            setWebReview(noteWeb)
      }, [usrReview,webReview,note,noteWeb,boolLock]);


    
    const ratingChanged = (newRating) => {
    console.log(newRating);
    };
    
    const sendWebReview = async (newRating)=>{
        const msg = {recId: recipId,userId:userId,review:newRating,reviewType:1};
        const headers = {
            headers: {Authorization: `Bearer ${token}`}
        };
        console.log("user id : "+ userId);
        if(boolLock === true)
            {axios
                .post(`http://82.65.82.1:4002/api/review`, msg,headers)
                .then(response => console.log(response.data.response))
                .then(setWebReview(newRating))
                // .then(()=>history("/"))
                .catch((error) =>
                console.warn("erreur : " + error)
                );
                noteWeb=newRating;
                // setWebReview(newRating)
                setBoolLock(false);
                haveVoted = !haveVoted
                setTimeout(function() {
                    window.location.reload(false)
                  }, 500);}
    }

    const websiteReview = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "#c7a002",
        value: webReview,
        edit: false,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star center" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        
    };

    const sample = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "#c7a002",
        value: note,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star center" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => sendWebReview(newValue)
    };
    return(
        <div>
            <p>Note</p>
            <div className={"reviewZone"}>
                {/* {update()} */}
                <ReactStars {...websiteReview} key={webReview}/>
            </div>
            {!haveVoted && boolLock && userId != null &&<div key={boolLock} ><p>Votre note</p>
            <div className={"reviewZone"}>
                <ReactStars {...sample} key={usrReview}/>
            </div></div>}
    </div>
    
    //   document.getElementById("where-to-render")
    );


}