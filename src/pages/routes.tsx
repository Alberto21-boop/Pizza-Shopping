import { createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './app/dashboard'
import { SignIn } from './auth/sign-in'
import { AppLayout } from './_layouts/app'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
        ]
    },

    {
        path: '/',
        element: <AppLayout />,
        children: [
            { path: '/sign-in', element: <SignIn /> },
        ]
    }

])