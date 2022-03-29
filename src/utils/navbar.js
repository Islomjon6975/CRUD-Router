import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { TableInfo } from '../pages/TableInfo';

export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        element: <Home />,
        hidden: false,
        isPrivate: false,
    },
    {
        id: 2,
        title: 'TableInfo',
        path: '/tableinfo',
        element: <TableInfo />,
        hidden: true,
        isPrivate: false,
    }, 
    {
        id: 3,
        title: 'About',
        path: '/about',
        element: <About />,
        hidden: false,
        isPrivate: false,
    },
    {
        id: 4,
        title: 'Contact',
        path: '/contact',
        element: <Contact />,
        hidden: false,
        isPrivate: false,
    },  
     
]