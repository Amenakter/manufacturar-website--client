import React, { useState } from 'react';
import { toast } from 'react-toastify'

const AdminPannel = ({ user, refetch }) => {

    const [deleteUser, setDeleteuser] = useState([])
    const { _id, email, role } = user

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
    const HandleDeleteUser = id => {

        console.log(id);
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remainingUsers = deleteUser.filter(user => user._id !== id)
                    setDeleteuser(remainingUsers)
                    refetch()
                    toast.success('successfully  user deleted ')
                }
            })
    }
    return (
        <>
            <tr>

                <td>{email}</td>
                <td>{role !== "admin" && <button onClick={makeAdmin} className='btn btn-xs btn-primary'>Make admin</button>}</td>
                <td><button className='btn btn-xs btn-primary' ><label for="my-modal"  >Remove User</label></button></td>
            </tr>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Hey! Are you sure ,Do you want to <span className='text-red-500 font-bold'> delete</span> this user? </h3>
                    <p class="py-4">selected user :<span className='text-red-500 font-bold'> {email}</span></p>
                    <p class="py-4 font-bold">If you want, press confirm button.</p>
                    <div class="modal-action">
                        <button href="#" class="btn btn-primary" onClick={() => HandleDeleteUser(_id)}>Confirm</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminPannel;