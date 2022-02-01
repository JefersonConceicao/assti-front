import Default from '../components/dashboard/default'
import Ecommerce from '../components/dashboard/ecommerce'
import Starterkits from '../components/starter-kits'

export const routes = [
        //AUTH 
        { path:`${process.env.PUBLIC_URL}/dashboard/default`, Component:Default},

        { path:`${process.env.PUBLIC_URL}/dashboard/default`, Component:Default},
        { path:`${process.env.PUBLIC_URL}/dashboard/ecommerce/:layout`, Component:Ecommerce},
        { path:`${process.env.PUBLIC_URL}/starter-kits/sample-page/:layout`, Component:Starterkits},       
]