import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/Config";

function Home({ isAuth }) {
  const [channelLists, setChanneltList] = useState([]);
  const ChannelsCollectionRef = collection(db, "channels");

  useEffect(() => {
    const getChannels = async () => {
      const data = await getDocs( ChannelsCollectionRef);
      setChanneltList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getChannels();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "channels", id);
    await deleteDoc(postDoc);
    window.location.reload();
  };
  return (
    <div className="homePage">
      {channelLists.map((post) => {
        return (
          <div className="post" key={post.id}>
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {/* { isAuth && ( */}
                  <button
                    onClick={()=>{
                      deletePost(post.id)
                    }}
                  >
                    x
               
                  </button>
                 {/* )}  */}

              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
