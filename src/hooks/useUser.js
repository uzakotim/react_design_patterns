import { useState, useEffect } from 'react';
import axios from 'axios';
export const useUser = (userId) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/users/${userId}`);
            const currentUser = response.data;
            setUser(currentUser);
        })();
    }, [userId]);

    return user;
};

// const currentUser = useCurrentUser
