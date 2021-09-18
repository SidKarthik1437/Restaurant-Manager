import * as Routes from "../../constants/routes"
import { Link } from "react-router-dom"
import FirebaseContext from "../../context/firebase"
import UserContext from "../../context/user"
import RestoContext from "../../context/restaurant"
import { useContext, useEffect, useState } from "react"
import { getRestaurantDetails } from "../../services/firebase"

function Sidebar() {
    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    const [resto, setResto] = useState({})

    useEffect(() => {
        async function getrest() {
            const [restaurant] = await getRestaurantDetails(user?.uid)
            setResto(restaurant)
        }
        getrest()
    }, [firebase])

    return (
        <div className="flex flex-col flex-shrink w-1/3 justify-between bg-background-sidebar h-screen rounded-r-xl items-center">
            <Link to={Routes.PROFILE}>
                <button
                    type="button"
                    className="flex flex-grow pl-2 text-sm lg:text-2xl lg:px-2 text-grey-res-head place-items-center select-none mt-9 text-center w-full  shadow-neu-nav rounded h-12 tracking-wider active:shadow-neu-resn-active"
                >
                    {resto.Name}
                </button>
            </Link>

            <div className="flex justify-evenly w-full">
                <button
                    type="button"
                    className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active"
                >
                    <img src="/icons/activity.svg" alt="Activity " />
                </button>
                <button
                    type="button"
                    className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active"
                >
                    <img src="/icons/notifications.svg" alt="Notifications" />
                </button>
                <button
                    type="button"
                    className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active"
                >
                    <img src="/icons/tasks.svg" alt="Tasks" />
                </button>
            </div>

            <div className="flex flex-col w-full lg:px-8">
                <Link to={Routes.DASHBOARD}>
                    <button
                        type="button"
                        className="flex flex-grow pl-2 text-sm lg:text-2xl lg:px-2 text-blue-nav-text select-none mt-9  place-items-center justify-center text-center w-full  shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active"
                    >
                        <span>Dashboard</span>
                    </button>
                </Link>
                <Link to={Routes.INVOICES}>
                    <button
                        type="button"
                        className="flex flex-grow  pl-2 text-sm lg:text-2xl lg:w-full text-blue-nav-text select-none mt-9  place-items-center justify-center text-center w-full  shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active"
                    >
                        <span>Invoices</span>
                    </button>
                </Link>
                <Link to={Routes.PRODUCTS}>
                    <button
                        type="button"
                        className="flex flex-grow text-sm pl-2 lg:text-2xl lg:w-full text-blue-nav-text select-none mt-9  place-items-center justify-center text-center w-full  shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active"
                    >
                        <span>Products</span>
                    </button>
                </Link>
                <Link to={Routes.STAFF}>
                    <button
                        type="button"
                        className="flex flex-grow text-sm pl-2 lg:text-2xl lg:w-full text-blue-nav-text select-none mt-9  place-items-center justify-center text-center w-full  shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active"
                    >
                        <span>Staff</span>
                    </button>
                </Link>
                <Link to={Routes.STOCK}>
                    <button
                        type="button"
                        className="flex flex-grow text-sm lg:text-2xl pl-2 lg:px-10 text-blue-nav-text select-none mt-9 place-items-center justify-center text-center w-full  shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active"
                    >
                        <span>Stock</span>
                    </button>
                </Link>
            </div>

            <div className="flex h-20 bg-blue-nav-full w-full items-center rounded-r">
                <img
                    className="w-12 h-12 ml-2 rounded-full"
                    src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="profilepicture"
                />
                <span className="font-medium text-lg tracking-wider ml-4">
                    {user.displayName}
                </span>
                <img
                    className="h-3 ml-5 object-contain  "
                    src="/icons/up.svg"
                    alt="up"
                />
            </div>
        </div>
    )
}
export default Sidebar
