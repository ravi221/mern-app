import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Ravi',
            image: 'https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            places: 3
        }
    ];

    return (
        <UserList items={USERS} />
    )
}

export default Users;