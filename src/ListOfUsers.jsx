import React, { useState } from "react";


const ListOfUsers=()=>{
        //Initial users array
        const [users,setUsers]=useState([
            {id:1,name:"Nahom",age:25},
            {id:2,name:"Tedyo",age:30},
            {id:3,name:"Fixum",age:15},
        ]);
    

    // State to manage the user currently being edited
    const [editUserId,setEditUserId]=useState(null);
    const [editedUser,setEditedUser]=useState({name:" ",age:" "});

    const handleEdit=(user)=>{
        setEditUserId(user.id);
        setEditedUser({name:user.name,age:user.age});
    }

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        setEditedUser((prev)=>({...prev, [name]:value}));
    }

    const handleSave=()=>{
        setUsers((prevUsers)=>
            prevUsers.map((user)=>
            user.id===editUserId ? {...user,name:editedUser.name, age:Number(editedUser.age)}:user

         )
        
        );
        setEditUserId(null);
        setEditUserId({name:"",age:""});
    }

    const handleCancel=()=>{
        setEditUserId(null);
        setEditedUser({name:"", age:""});
    }

   return(
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user)=>(
          <li key={user.id}>
           {editUserId===user.id ? (
            <div>
                <input type="text" name="name" 
                value={editedUser.name} onChange={handleInputChange}/>
                <input type="number" name="age" 
                value={editedUser.age} onChange={handleInputChange}/>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
           ):
           (
            <div>
                {user.name} (Age:{user.age}){""}
                <button onClick={()=>handleEdit(user)}>Edit</button>
            </div>
           )}
          </li>
        ))}
      </ul>
    </div>
   );
};

export default ListOfUsers;