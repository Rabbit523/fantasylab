import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ForgotPassword from '../pages/forgotPassword'
import ResetPassword from '../pages/resetPassword'
import Dashboard from '../pages/dashboard'
import NoMatch from '../pages/noMatch'
import Portfolio from '../pages/portfolio'
import Features from '../pages/features'
import About from '../pages/about'
import Blog from '../pages/blog'
import Contact from '../pages/contact'
import AdminPages from '../pages/admin/adminPages'
import AdminHome from '../pages/admin/single-pages/home'
const routes = [
    {
        path: '/',
        exact: true,
        auth: false,
        component: Home
    },
    {
        path: '/login/:social',
        exact: false,
        auth: false,
        component: Home
    },
    {
        path: '/login',
        exact: true,
        auth: false,
        component: Login
    },
    {
        path: '/register',
        exact: true,
        auth: false,
        component: Register
    },
    {
        path: '/forgot-password',
        exact: true,
        auth: false,
        component: ForgotPassword
    },
    {
        path: '/reset-password/:token/:email',
        exact: true,
        auth: false,
        component: ResetPassword
    },
    {
        path: '/portfolio',
        exact: true,
        auth: false,
        component: Portfolio
    },
    {
        path: '/features',
        exact: true,
        auth: false,
        component: Features
    },
    {
        path: '/about',
        exact: true,
        auth: false,
        component: About
    },
    {
        path: '/blog',
        exact: true,
        auth: false,
        component: Blog
    },
    {
        path: '/contact',
        exact: true,
        auth: false,
        component: Contact
    },
    {
        path: '/admin/dashboard',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/pages',
        exact: true,
        admin: true,
        component: AdminPages
    },
    {
        path: '/admin/services',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/clients',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/projects',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/teams',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/invoices',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/settings',
        exact: true,
        admin: true,
        component: Dashboard
    },
    {
        path: '/admin/single-page/home',
        exact: true,
        admin: true,
        component: AdminHome
    },
    {
        path: '',
        exact: true,
        auth: false,
        component: NoMatch
    }
];

export default routes;