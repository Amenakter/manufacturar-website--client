import React from 'react';
import { toast } from 'react-toastify'

const AdminPannel = ({ user, refetch }) => {
    const { email, role } = user
    const makeAdmin = () => {


        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("faild to make an admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    toast.success("Successfully made admin")
                }
            })
    }
    return (

        <tr>

            <td>{user.email}</td>
            <td>{role !== "admin" && <button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make admin</button>}</td>
            <td><button className='btn btn-xs btn-primary'>Remove user</button></td>
        </tr>

    );
};

export default AdminPannel;