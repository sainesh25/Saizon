import React from 'react'
import Link from 'next/link'
export default function HomePage() {
    return (
        <>
            <div className="flex justify-center min-h-screen items-center">
                <Link href={'/register'} className='bg-sky-600 m-6 text-center rounded-md w-32 p-2 text-white'>Register</Link>
                <Link href={'/login'} className='bg-sky-600 m-6 text-center rounded-md w-32 p-2 text-white'>Login</Link>
            </div>
        </>
    )
}
