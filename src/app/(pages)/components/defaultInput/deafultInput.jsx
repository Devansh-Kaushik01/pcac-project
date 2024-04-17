import React from 'react'

function DefaultInput({ classNames, type, placeholder }) {
    return (
        <div className='w-full'>
            <input
                type={type}
                className={`w-full border-0 border-b border-white p-0 h-12 !bg-transparent
           !focus:outline-0 focus:border-0 focus:border-b focus:ring-0 outline-none
           !rounded-none ${classNames}`}
                placeholder={placeholder}
            />
        </div>
    )
}
export default DefaultInput;