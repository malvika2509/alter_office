import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import ProfilePage from "./profile";
import Login from "./login";
import EditProfilePage from "./editProfile";
import NewPostPage from "./post";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post" element={<NewPostPage />} />
        <Route path="/edit" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
}

// import React, { useEffect, useState } from "react";
// import { supabase } from "./supabaseClient";

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [mediaOptions, setMediaOptions] = useState([]); // To fetch and display media options
//   const [newPost, setNewPost] = useState({
//     photo: "",
//     name: "",
//     description: "",
//     media: null, // Updated to reference media ID
//     likes: 0,
//   });

//   useEffect(() => {
//     fetchPosts();
//     fetchMediaOptions();
//   }, []);

//   // Fetch posts from the database
//   const fetchPosts = async () => {
//     const { data, error } = await supabase
//       .from("posts")
//       .select("*, media(id, media)"); // Fetch related media details
//     if (error) {
//       console.error("Error fetching posts:", error);
//     } else {
//       setPosts(data);
//     }
//   };

//   // Fetch media options from the media table
//   const fetchMediaOptions = async () => {
//     const { data, error } = await supabase.from("media").select("*");
//     if (error) {
//       console.error("Error fetching media options:", error);
//     } else {
//       setMediaOptions(data);
//     }
//   };

//   // Create a new post
//   const createPost = async () => {
//     const { data, error } = await supabase.from("posts").insert([newPost]);
//     if (error) {
//       console.error("Error creating post:", error);
//     } else {
//       fetchPosts();
//       setNewPost({
//         photo: "",
//         name: "",
//         description: "",
//         media: null,
//         likes: 0,
//       });
//     }
//   };

//   // Delete a post
//   const deletePost = async (id) => {
//     const { error } = await supabase.from("posts").delete().eq("id", id);
//     if (error) {
//       console.error("Error deleting post:", error);
//     } else {
//       fetchPosts();
//     }
//   };

//   return (
//     <div>
//       <h1>Posts</h1>
//       <div>
//         {/* Input fields for new post */}
//         <input
//           type="text"
//           placeholder="Photo URL"
//           value={newPost.photo}
//           onChange={(e) => setNewPost({ ...newPost, photo: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="Name"
//           value={newPost.name}
//           onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
//         />
//         <textarea
//           placeholder="Description"
//           value={newPost.description}
//           onChange={(e) =>
//             setNewPost({ ...newPost, description: e.target.value })
//           }
//         ></textarea>
//         <select
//           value={newPost.media || ""}
//           onChange={(e) => setNewPost({ ...newPost, media: e.target.value })}
//         >
//           <option value="" disabled>
//             Select Media
//           </option>
//           {mediaOptions.map((media) => (
//             <option key={media.id} value={media.id}>
//               {media.media}
//             </option>
//           ))}
//         </select>
//         <button onClick={createPost}>Add Post</button>
//       </div>

//       <div>
//         {/* Display list of posts */}
//         {posts.map((post) => (
//           <div key={post.id}>
//             <img src={post.photo} alt={post.name} width="100" />
//             <h3>{post.name}</h3>
//             <p>{post.description}</p>
//             <p>Media: {post.media?.media || "No Media"}</p>
//             <p>Likes: {post.likes}</p>
//             <button onClick={() => deletePost(post.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
