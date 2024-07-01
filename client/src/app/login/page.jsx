import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <>
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Login</h2>
                <form>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                        <input type="email" id="email" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
                        <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required/>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
                    </div>
                </form>
                <p className='text-sm mt-3'>Not a user? <Link href='register' className='text-blue-600' >Register now</Link></p>
            </div>
        </>
    )
}
