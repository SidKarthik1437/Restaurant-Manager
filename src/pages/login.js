function Login() {
    return (
        <div className="flex flex-col h-screen w-full bg-background-body items-center justify-center">
            <div>
                <span className="text-center font-normal text-5xl tracking-widest ">
                    Login
                </span>
            </div>
            <div className="border-0 mt-20 rounded-xl">
                <input
                    type="email"
                    placeholder="Email"
                    className="rounded-xl pl-2 w-80 h-10 text-lg select-none text-background-sidebar   shadow-neu-admin-input placeholder-opacity-50 "
                />
            </div>
            <div className="border-0 mt-10 rounded-xl">
                <input
                    type="password"
                    placeholder="Password"
                    className="rounded-xl pl-2 w-80 h-10 text-lg select-none text-background-sidebar   shadow-neu-admin-input placeholder-opacity-50 "
                />
            </div>
            <div className="pt-10">
                <button
                    className="w-40 h-10 mx-10 text-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl"
                    type="submit"
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
