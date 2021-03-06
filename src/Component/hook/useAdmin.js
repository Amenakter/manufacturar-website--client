import { useEffect, useState } from "react"

const useAdmin = user => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)

    useEffect(() => {
        const email = user.email;

        if (email) {
            fetch(`https://damp-meadow-76424.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            })
                .then(res => res.json())

                .then(data => {
                    console.log(data)
                    setAdmin(data)
                    setAdminLoading(false);
                })
        }
    }, [user]);
    return [admin, adminLoading];
}
export default useAdmin;