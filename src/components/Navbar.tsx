import { ThemeControler } from "./ThemeControler"

export const Navbar = () => {
    return (
        <div className="navbar justify-between font-bold fixed py-2 md:top-4 md:right-4 md:w-fit right-0 top-0 w-full  bg-base-100/95 shadow-2xl z-50 md:rounded-full p-4">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Welcome</a></li>
                    <li><a>Vision</a></li>
                    <li><a>Customizing</a></li>
                    <li>
                        <a>Ressources</a>
                        <ul className="p-2">
                            <li><a>Code</a></li>
                            <li><a>Concepts</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <ul className="menu menu-horizontal px-1 space-x-8 hidden md:flex">
                <li><a>Welcome</a></li>
                <li><a>Vision</a></li>
                <li><a>Customizing</a></li>
                <li>
                    <details>
                        <summary>Ressources</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
            <ThemeControler/>
            <a href="https://opencollective.com/utopia-project"><button className="btn bg-emerald-700 text-white rounded-full self-endend ml-8">Support Funding</button></a>
        </div>
    )
}
