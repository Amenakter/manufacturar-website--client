import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shered/Loading';
import AdminPannel from './AdminPannel';

const AddAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/allUser', {
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
            <h2 className='text-center text-2xl text-secondary font-bold mt-8'>Admin Pannel & All Users</h2>
            <div class="overflow-x-auto mt-8">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Add</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users?.map(user => <AdminPannel
                                key={user._id}
                                user={user}
                                refetch={refetch}
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