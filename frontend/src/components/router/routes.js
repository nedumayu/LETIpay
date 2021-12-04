import Profile from "../profile/profile";
import AccountantPage from "../accountant/AccountantPage";
import AdminPage from "../admin/AdminPage";
import Payment from "../pay/payment";
import Transfer from "../pay/transfer";
import HistoryContainer from "../history/HistoryContainer";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Home from "../Home";

export const authRoutes = [

    {
        path: "/profile",
        Component: Profile,
        reqRole: "ROLE_USER"
    },
    {
        path: "/account",
        Component: AccountantPage,
        reqRole: "ROLE_LETI"
    },
    {
        path: "/admin",
        Component: AdminPage,
        reqRole: "ROLE_ADMIN"
    },
    {
        path: "/payment",
        Component: Payment,
        reqRole: "ROLE_USER"
    },
    {
        path: "/transfer",
        Component: Transfer,
        reqRole: "ROLE_USER"
    },
    {
        path: "/history",
        Component: HistoryContainer,
        reqRole: "ROLE_USER"
    },
    {
        path: ["/", "/home"],
        Component: Home
    }
]

export const publicRoutes = [
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
    {
        path: ["/", "/home"],
        Component: Home
    }
]