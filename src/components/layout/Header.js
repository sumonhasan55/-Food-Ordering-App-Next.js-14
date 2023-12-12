import Link from 'next/link'

const Header = () => {
    return (
        <header className=' flex items-center justify-between'>
            <Link className=' font-semibold text-primary ' href={''}>HM PIZZA</Link>
            <nav className='flex items-center  gap-8 font-semibold text-gray-500 '>
                <Link href={''}>Home</Link>
                <Link href={''}>Contact</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Menu</Link>
                <Link className=' bg-primary text-white px-6 py-2 rounded-full' href={''}>Login</Link>
            </nav>
        </header>
    );
};

export default Header;