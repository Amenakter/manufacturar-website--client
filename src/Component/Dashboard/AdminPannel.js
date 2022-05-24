import React from 'react';

const AdminPannel = ({ user }) => {
    const { email } = user
    const makeAdmin = () => {


        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (

        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td><button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make admin</button></td>
            <td><button className='btn btn-xs btn-primary'>Remove admin</button></td>
        </tr>

    );
};

export default AdminPannel;