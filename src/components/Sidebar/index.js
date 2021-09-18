import * as Routes from "../../constants/routes"
import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="flex flex-col flex-shrink w-1/3 justify-between bg-background-sidebar h-screen rounded-r-xl items-center">
            <Link to={Routes.PROFILE}>
                <button
                    type="button"
                    className="text-3xl text-grey-res-head select-none mt-9 px-10 text-center justify-self-stretch rounded max-w-full h-11 tracking-wider shadow-neu-resn active:shadow-neu-resn-active"
                >
                    Restaurant
                </button>
            </Link>

            <div className="flex justify-evenly -mt-24 w-full">
                <button type="button" className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active">
                    <img src="/icons/activity.svg" alt="Activity " />
                </button>
                <button type="button" className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active">
                    <img src="/icons/notifications.svg" alt="Notifications" />
                </button>
                <button type="button" className="flex shadow-neu-quick-action rounded-xl p-1 w-12 h-12 justify-center active:shadow-neu-resn-active">
                    <img src="/icons/tasks.svg" alt="Tasks" />
                </button>
            </div>

            <div className="flex flex-col ">
                <Link to={Routes.DASHBOARD}>
                    <button type="button" className="flex flex-shrink text-3xl text-blue-nav-text select-none mt-9 text-center w-full px-10 shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active">
                        Dashboard
                    </button>
                </Link>
                <Link to={Routes.INVOICES}>
                    <button type="button" className="flex flex-shrink text-3xl text-blue-nav-text select-none mt-9 text-center w-full px-10 shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active">
                        Invoices
                    </button>
                </Link>
                <Link to={Routes.PRODUCTS}>
                    <button type="button" className="flex flex-shrink text-3xl text-blue-nav-text select-none mt-9 text-center w-full px-10 shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active">
                        Products
                    </button>
                </Link>
                <Link to={Routes.STAFF}>
                    <button type="button" className="flex flex-shrink text-3xl text-blue-nav-text select-none mt-9 text-center w-full px-10 shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active">
                        Staff
                    </button>
                </Link>
                <Link to={Routes.STOCK}>
                    <button type="button" className="flex flex-shrink text-3xl text-blue-nav-text select-none mt-9 text-center w-full px-10 shadow-neu-nav rounded h-11 tracking-wider active:shadow-neu-resn-active">
                        Stock
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
                    SID KARTHIK #2702
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
