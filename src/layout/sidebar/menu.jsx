import {Home, User } from 'react-feather'
export const MENUITEMS = [
    {
        Items:[
            {
                title: 'Admin', 
                icon: Home, 
                type: 'sub', 
                active: false, 
                children: [
                    { 
                        path: `${process.env.PUBLIC_URL}/dashboard/default`, 
                        title: 'Default', 
                        type: 'link' 
                    },

                    { 
                        path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`, 
                        title: 'Ecommerce', 
                        type: 'link' 
                    },
                ]
            }
        ]
    },
    {
        Items:[
            {
                title: 'Usuários',
                icon: User,
                type: 'link',
                active: false,
                path: `${process.env.PUBLIC_URL}/dashboard/ecommerce`
            }
        ]
    }
]