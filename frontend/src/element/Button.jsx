

const Button = ({children,onClick,parentClassName}) => {
  return (
        <div className={`${parentClassName} bg-indigo-300 rounded hover:-translate-x-0.5 hover:-translate-y-0.5`}>
             <button
             onClick={onClick}
                className="w-full bg-indigo-300 text-black hover:bg-indigo-600 hover:-text-white px-2 py-2 hover:-translate-x-1.5 hover:-translate-y-1.5"
                type="submit">
                        {children}
                 {/* {(pageType===pageType.LOGIN)?'Log In' : 'Register'} */}
             </button>
</div>
  )
}

export default Button