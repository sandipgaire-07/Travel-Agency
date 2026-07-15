function Input({type="text", placeholder,defaultValue, readOnly, register, errors})
{
    return(
        <div className="w-full">
            <input type={type} placeholder={placeholder} defaultValue={defaultValue} readOnly={readOnly} {...register} className="w-full rounded-lg border border-black-200 px-4 py-3 text-sm outline-none transition focus:border-teal-600"/>
        {
            errors &&(
                <p className="text-red-500 text-sm">{errors.message}</p>
            )
        }
        </div>
        
        
    )

}
export default Input;