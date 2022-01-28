import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase/Config";
import { useNavigate } from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";

function CreateChannel({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const channelsCollectionRef=collection(db,"channels");
  let navigate = useNavigate();
const createChannel=async()=>{
await addDoc( channelsCollectionRef, {
  title,
  postText,
  author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
});
navigate("/");
}
useEffect(() => {
  if (!isAuth) {
    navigate("/login");
  }
}, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Channel</h1>
        <div className="inputGp">
          <label> Subject:</label>
          <input
            placeholder="subject."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Body:</label>
          <textarea
            placeholder="Body..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createChannel}> Submit Channel</button>
      </div>
    </div>
  );
}

export default CreateChannel;
