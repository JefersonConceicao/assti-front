import {Home, User } from 'react-feather'
export const MENUITEMS = [
    {
        Items:[
            {
                title: 'Administrativo',
                icon: User,
                type: 'sub',
                active: false,
                children: [
                    {
                        path:`${process.env.PUBLIC_URL}/usuarios`,
                        title: 'Usuários',
                        type: 'link',
                    }
                ]
            }
        ]
    }
]