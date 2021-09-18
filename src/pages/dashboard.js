import Sidebar from '../components/Sidebar'
import Body from '../components/Body'

export default function dashboard() {
    return (
        <div className="grid grid-cols-2 w-full bg-background-body max-w-screen">
            <Sidebar />
            <Body />
        </div>
    )
}