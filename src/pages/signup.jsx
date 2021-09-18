import { useState, Suspense, useEffect, useContext } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom"
import * as Routes from "../constants/routes"
import FirebaseContext from "../context/firebase"
import useUser from "../hooks/use-User"

const variants = {
    initial: {
        opacity: 0,
        x: "100vw",
        scale: 0.5,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 0,
    },
}

const transitions = {
    type: "tween",
    ease: "easeInOut",
    duration: 1,
}

const Hello = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={transitions}
            className="flex z-0 text-4xl bg-background-body w-full h-screen items-center justify-center align-middle"
        >
            👋Hello there,
            <Link to={Routes.SIGNUP_ADMIN}>
                <button
                    type="button"
                    // onClick={() => history.push('/signup/admin')}
                    className="w-40 h-10 text-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl"
                >
                    next
                </button>
            </Link>
        </motion.div>
    )
}

const AdminEAP = () => {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [role, setRole] = useState("ADMIN")
    const [admin_name, setAdmin_Name] = useState("")
    const [admin_email, setAdmin_Email] = useState("")
    const [admin_password1, setAdmin_Password1] = useState("")
    const [admin_password2, setAdmin_Password2] = useState("")
    const [error, setError] = useState("")

    const isInvalid =
        admin_password1 === "" || admin_password2 === "" || admin_email === ""

    useEffect(() => {
        document.title = "SignUp - RestoMan"
    })

    const handleSignUp = async (event) => {
        ""
        event.preventDefault()

        if (admin_password1 === admin_password2) {
            try {
                const createdUser = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        admin_email,
                        admin_password2
                    )
                await createdUser.user.updateProfile({
                    displayName: admin_name,
                })

                await firebase.firestore().collection("users").add({
                    userId: createdUser.user.uid,
                    username: admin_name,
                    emailAddress: admin_email.toLowerCase(),
                    role: role,
                    dateCreated: Date.now(),
                })
                history.push(Routes.SIGNUP_PROFILE)
            } catch (error) {
                setAdmin_Name("")
                setAdmin_Email("")
                setAdmin_Password1("")
                setAdmin_Password2("")
                setError(error.message)
            }
        } else {
            setError("Passwords Do not match!")
        }
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={transitions}
            className="flex text-4xl w-full bg-background-body select-none h-screen items-center justify-center align-middle"
        >
            <span>
                I’m hoping you are the admin!
                <br />
                What’s your name? and your email ID.
                <br />
                Also, create a new password
            </span>
            <form
                onSubmit={handleSignUp}
                method="POST"
                autoComplete="on"
                className="flex flex-col mt-5 ml-20 items-center justify-evenly h-screen "
            >
                {error && <p className=" text-sm text-red">{error}</p>}
                <input
                    type="text"
                    placeholder="name"
                    name="name"
                    className="rounded-xl pl-2 w-80 h-10 text-lg select-none text-background-sidebar   shadow-neu-admin-input placeholder-opacity-50 "
                    onChange={({ target }) => setAdmin_Name(target.value)}
                    value={admin_name}
                />
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="rounded-xl w-80 pl-2 h-10 text-lg select-none text-background-sidebar shadow-neu-admin-input placeholder-opacity-50 "
                    onChange={({ target }) => setAdmin_Email(target.value)}
                    value={admin_email}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="rounded-xl w-80 pl-2 h-10 text-lg select-none text-background-sidebar shadow-neu-admin-input placeholder-opacity-50 "
                    onChange={({ target }) => setAdmin_Password1(target.value)}
                    value={admin_password1}
                    // autoComplete="new-password"
                />
                <input
                    type="password"
                    placeholder="retype-password"
                    name="password"
                    className="rounded-xl w-80 h-10 pl-2 text-lg select-none text-background-sidebar shadow-neu-admin-input placeholder-opacity-50 "
                    onChange={({ target }) => setAdmin_Password2(target.value)}
                    value={admin_password2}
                    // autoComplete="new-password"
                />
                <div>
                    <Link to={Routes.SIGNUP_HELLO}>
                        <button
                            type="button"
                            // onClick={() => history.push("/signup/hello")}
                            className="w-40 h-10 mx-10 pl-2 atext-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl"
                        >
                            prev
                        </button>
                    </Link>
                    <button
                        type="submit"
                        disabled={isInvalid}
                        className={`w-40 h-10 mx-10 text-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl ${
                            isInvalid && `opacity-50`
                        }`}
                    >
                        next
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

const Profile = () => {
    const history = useHistory()
    const {
        user: { userId },
    } = useUser()
    const { firebase } = useContext(FirebaseContext)

    const [res_name, setRes_name] = useState("")
    const [res_add, setRes_add] = useState("")
    const [res_web, setRes_web] = useState("")
    const [res_type, setRes_type] = useState("")
    const [error, setError] = useState("")

    const isInvalid = res_name === "" || res_add === "" || res_type === ""

    const handleInput = async (event) => {
        event.preventDefault()

        if (!isInvalid) {
            try {
                await firebase.firestore().collection("restaurants").add({
                    Name: res_name,
                    Address: res_add,
                    Website: res_web,
                    Type: res_type,
                    addedBy: userId,
                    dateCreated: Date.now(),
                })

                history.push(Routes.DASHBOARD)
            } catch (error) {
                setRes_name("")
                setRes_add("")
                setRes_web("")
                setRes_type("")
                setError(error.message)
            }
        } else {
            setError("Passwords Do not match!")
        }
    }
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={variants}
            transition={transitions}
            className="flex z-20 flex-col p-10 text-4xl bg-background-body w-full select-none h-screen justify-between items-center align-middle"
        >
            <div className="mt-10">
                <span className="text-background-sidebar">
                    We are gonna need more information about your restaurant
                </span>
                <form
                    onSubmit={handleInput}
                    method="POST"
                    autoComplete="on"
                    className="grid grid-cols-2 gap-10 mt-10 justify-center align-middle"
                >
                    {error && <p className=" text-sm text-red">{error}</p>}
                    <label className="text-grey-res-head tracking-wide select-none">
                        Restaurant name
                    </label>
                    <input
                        type="text"
                        name="restaurantName"
                        placeholder="restaurant"
                        onChange={({ target }) => setRes_name(target.value)}
                        value={res_name}
                        className="rounded-xl w-80 h-10 text-lg select-none resize text-background-sidebar ml-10 shadow-neu-admin-input placeholder-opacity-50 "
                    />
                    <label className="text-grey-res-head tracking-wide select-none">
                        Address
                    </label>
                    <textarea
                        type="text"
                        name="address"
                        placeholder="address"
                        minlength="10"
                        maxLength="300"
                        aria-multiline
                        onChange={({ target }) => setRes_add(target.value)}
                        value={res_add}
                        className="rounded-xl w-80 h-24 text-lg resize select-none text-background-sidebar ml-10 shadow-neu-admin-input placeholder-opacity-50 "
                    />
                    <label className="text-grey-res-head tracking-wide select-none">
                        Website
                    </label>
                    <input
                        type="url"
                        name="website"
                        placeholder="website"
                        onChange={({ target }) => setRes_web(target.value)}
                        value={res_web}
                        className="rounded-xl w-80 h-10 text-lg select-none text-background-sidebar ml-10 shadow-neu-admin-input placeholder-opacity-50 "
                    />
                    <label className="text-grey-res-head tracking-wide select-none">
                        Restaurant type
                    </label>
                    <span className="items-center align-middle justify-evenly ml-10">
                        <label className="text-grey-res-head text-lg">
                            Veg
                        </label>
                        <input
                            type="radio"
                            placeholder="Veg"
                            value="Veg"
                            name="rest-type"
                            onChange={({ target }) => setRes_type(target.value)}
                            className="rounded-full text-lg select-none text-background-sidebar mx-5 shadow-neu-admin-input placeholder-opacity-50 "
                        />
                        <label className="text-grey-res-head text-lg">
                            Non-Veg
                        </label>
                        <input
                            type="radio"
                            placeholder="Non-Veg"
                            value="Non-Veg"
                            name="rest-type"
                            onChange={({ target }) => setRes_type(target.value)}
                            className="rounded-full text-lg select-none text-background-sidebar ml-10 shadow-neu-admin-input placeholder-opacity-50 "
                        />
                    </span>
                    <Link to={Routes.SIGNUP_ADMIN}>
                        <button
                            type="button"
                            // onClick={() => history.push("/signup/admin")}
                            className="w-40 h-10 mx-10 text-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl"
                        >
                            prev
                        </button>
                    </Link>
                    <button
                        type="submit"
                        className="w-40 h-10 text-blue-nav-full bg-background-sidebar rounded-xl text-center text-xl self-end"
                    >
                        next
                    </button>
                </form>
            </div>
        </motion.div>
    )
}

function Signup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation()

    return (
        <div className="overflow-x-hidden bg-background-body">
            <Suspense fallback={<p>Loading...</p>}>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route
                            path={Routes.SIGNUP_PROFILE}
                            component={Profile}
                        />
                        <Route
                            path={Routes.SIGNUP_ADMIN}
                            component={AdminEAP}
                        />
                        <Route path={Routes.SIGNUP_HELLO} component={Hello} />
                    </Switch>
                </AnimatePresence>
            </Suspense>
        </div>
    )
}

export default Signup
