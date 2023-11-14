const Layout = ({children}) => {
    return (
        <div className="flex flex-col items-center mt-20 bg-gray-900 text-green-300">
            {children}
        </div>
    )
}

export {Layout}