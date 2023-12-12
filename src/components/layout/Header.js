
import Link from "next/link";

export default function Header() {

  return (
    <header>
 
  
      <div className=" flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link className="text-primary font-semibold text-2xl" href={'/'}>
            HM PIZZA
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
            <Link href={"/login"}>Login</Link>
            <Link className=" bg-primary text-white px-4 py-2 rounded-full" href={"/register"}>Register</Link>
        </nav>
       
      </div>
    </header>
  );
}