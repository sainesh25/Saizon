import Link from 'next/link'
import { getProducts } from '@/app/service/api'

export async function getServerSideProps() {
    try {
        const products = await getProducts();
        return {
            props: {
                products,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                products: [], // Fallback in case of an error
            },
        };
    }
}
export default function HomePage({ products }) {



    return (
        <>
            <div className="flex bg-slate-900 justify-center min-h-screen items-center">
                {products?.map((product) => (
                    <div key={product.id} className="text-white">
                        {product.name}
                    </div>
                ))}
                <Link href={'/register'} className='bg-sky-600 m-6 text-center rounded-md w-32 p-2 text-white'>Register</Link>
                <Link href={'/login'} className='bg-sky-600 m-6 text-center rounded-md w-32 p-2 text-white'>Login</Link>
            </div>
        </>
    )
}
