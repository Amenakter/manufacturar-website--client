import { signOut } from 'firebase/auth';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.intit';
import UserOrderRow from './UserOrderRow';
import DeleteOrder from '../hook/DeleteOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();


    const email = user.email
    const { data: orders, refetch } = useQuery(['oders', email], () => fetch(`https://damp-meadow-76424.herokuapp.com/order?email=${email}`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`

        }
    })

        .then(res => {

            if (res.status === 401 || res.status === 403) {
                navigate('/')
                signOut(auth)
                localStorage.removeItem('accessToken')
            }
            return res.json();

        })

    )



    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-8 text-success'>Your orders Details</h2>
            <div class="overflow-auto hidden md:block ">
                <table class="table w-96 mt-8 ml-8 ">
                    {/* <!-- head --> */}
                    <thead >
                        <tr >
                            <th></th>
                            <th>User Email</th>
                            <th>Product</th>
                            <th >quentity</th>
                            <th>Total Amount</th>
                            <th>Payment status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <UserOrderRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            >

                            </UserOrderRow>)
                        }

                    </tbody>
                </table>
            </div>

            <div className=' grid grid-cols-1 gap-4 md:hidden mt-20'>
                {
                    orders?.map(order =>
                        <DeleteOrder
                            order={order}
                            key={order._id}
                            refetch={refetch}
                        ></DeleteOrder>
                    )
                }


            </div>

        </div>
    );
};

export default MyOrders;