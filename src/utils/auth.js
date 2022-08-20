import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [member, setMember] = useState({
        username: "",
        email: "",
        password: ""
    });

    const logIn = (user) => {
        setMember(user);
    }

    const logOut = () => {
        setMember(null);
    }

    return (
        <AuthContext.Provider value={{member, logIn, logOut}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const validateInputs = (newMember) => {
    const {username, email, password} = newMember;

    return !!(username && email && password);
}

export const registerMember = (newMember) => {
    const members = JSON.parse(localStorage.getItem('members')) || [];

    members.push(newMember);
    localStorage.setItem('members', JSON.stringify(members));
}

export const getAll = () => {
    const allMembers = JSON.parse(localStorage.getItem('members'))

    return allMembers;
}

export const authenticate = (user) => {
    const members = getAll();

    for (let i = 0; i < members.length; i++) {
        const member = members[i]
        const {email, password} = member;

        if (email === user.email && password === user.password) {
            return {isAuthenticated: true, member}
        }
    }

    return false;
}