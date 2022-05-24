import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading';
import AdminPannel from './AdminPannel';

const AddAdmin = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/allUser', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>total user:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(user => <AdminPannel
                                key={user._id}
                                user={user}
                            ></AdminPannel>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddAdmin;