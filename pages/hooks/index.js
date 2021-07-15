import React, {createContext, useContext, useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import cookie from 'cookie';
import User from '../api/User'

const authContext = createContext()

export function AuthProvider({children}){
    const auth = useProviderAuth();
    return (
        <authContext.Provider  value={auth}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)

function useProviderAuth(){
    const[user,setUser] = useState(null);
    const router = useRouter();
    const login = (email,password) => fetch('http://localhost:8000/api/login/1  ',{
        method:'POST',
        credentials: "include",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
        },
        body:JSON.stringify({email,password})
    }).then(data => {
        fetchUser();
        return data;
    });
    const logout = (email, password) => fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
        },
    }).then(data => {
        setUser(false);
        router.push('/login')
        return data;
    });
    const fetchUser = async () => {
        const header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
        }
        try {
            const response = await User.auth(header);
            // const user = await fetch('http://localhost:3000/api/user', {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //         'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'] || false,
            //     },
            // });
            if (response.status === 200) {
                const data =  response.data;
                setUser(data);
            }
            else {
                setUser(false)
            }



        } catch (error) {
            setUser(false);
        }
    };
    useEffect(() => {
        if(['/login', '/logout'].includes(router.pathname)) {
            return;
        }
        fetchUser();
        return () => fetchUser();
    }, []);
    return {
        user,
        login,
        logout
    };
}
