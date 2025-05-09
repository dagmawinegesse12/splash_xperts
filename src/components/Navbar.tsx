import { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Reservation', href: '#reservation' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-gray-700">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="flex items-center">
                    <img
                        src="/logo.jpg"
                        alt="Logo"
                        className="h-10 w-10 rounded-full object-cover"
                    />
                    <h1 className="text-xl font-bold text-white">Splash XPERTS</h1>

                </a>
                {/* <h1 className="text-xl font-bol/d text-white">Splash XPERTS</h1> */}

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-white hover:text-blue-200 transition font-medium"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Instagram Icon */}
                    <a
                        href="https://www.instagram.com/splash_xperts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-pink-400 transition"
                        title="Follow us on Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden px-4 pb-4 space-y-2  border-t">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-white-700 hover:text-blue-600 font-medium"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="https://www.instagram.com/splash_xperts/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-white-700 hover:text-pink-500 font-medium"
                    >
                        Instagram
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
