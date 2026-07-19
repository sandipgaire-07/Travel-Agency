function Input({type="text", placeholder,defaultValue, register, errors})
{
    return(
        <div className="w-full">
            <input type={type} placeholder={placeholder} defaultValue={defaultValue}  {...register} className="w-full rounded-lg border bg-gray-100  border-black-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500" required/>
        {
            errors &&(
                <p className="text-red-500 text-sm">{errors.message}</p>
            )
        }
        </div>
        
        
    )

}
export default Input;