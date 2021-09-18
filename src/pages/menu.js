export default function Menu() {
    return (
        <div className="flex flex-col h-screen w-full bg-background-body items-left tracking-widest">
            <h1 className="pl-72  text-5xl pt-24">Menu</h1>
            <div className="flex h-14 border border-grey-res-head hover:shadow-neu-menu-input mx-48 mt-5  rounded-xl items-center">
                <input
                    type="text"
                    className="flex-grow bg-background-body rounded-xl outline-none h-10 pl-8 mx-10"
                    placeholder="main item"
                />
            </div>
            <div className="flex h-14 border border-grey-res-head hover:shadow-neu-menu-input mx-72 mt-5  rounded-xl items-center">
                <input
                    type="text"
                    className="flex-grow bg-background-body  rounded-xl outline-none h-10 pl-10  mx-10"
                    placeholder="item1"
                />
                <input
                    type="text"
                    className="bg-background-body rounded-xl outline-none h-10 pl-8 mx-10"
                    placeholder="₹ price"
                />
            </div>
        </div>
    )
}
