function Input({type="text", placeholder})
{
    return(
        <input type={type} placeholder={placeholder} className="w-full rounded-lg border border-black-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600"/>
    )

}
export default Input;