
export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-100 w-[1288px] h-[52px] mt-5 mx-auto rounded-full px-10">
        {/* logo */}
        <div>
            <img src="/images/logo.png" alt="logo" />
        </div>
        <nav>
            <ul className="flex items-center gap-8 text-[25px] text-black font-semibold">
                <li>Our Services</li>
                <li>Industries</li>
                <li>About Us</li>
                <li>Our People</li>
                <li>Pricing</li>
                <li>Career</li>
            </ul>
        </nav>
    </header>
  )
}
