import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
         <nav className="sticky top-0 z-50 w-full border-b border-green-100/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
                             <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-600 to-slate-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
                              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-slate-600 bg-clip-text text-transparent">
                  Finance
                </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
                         <Link
               to="/"
               className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
             >
               Home
             </Link>
             <Link
               to="/blogs"
               className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
             >
               Blog
             </Link>
             <Link
               to="/services"
               className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
             >
               Services
             </Link>
             <Link
               to="/contact"
               className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
             >
               Contact
             </Link>
             <Link
               to="/about"
               className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
             >
               About
             </Link>
            
            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                                 <Button variant="ghost" className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
                  <span>More</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/login" className="cursor-pointer">Login</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/sip-calculator" className="cursor-pointer">SIP Calculator</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                </DropdownMenuItem> */}
            
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
                            <Button className="bg-gradient-to-r from-green-600 to-slate-600 hover:from-green-700 hover:to-slate-700 text-white px-6 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  Book Now
                </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-6 mt-8">
                                     <Link
                     to="/"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Home
                   </Link>
                   <Link
                     to="/blogs"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Blog
                   </Link>
                   <Link
                     to="/services"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Services
                   </Link>
                   <Link
                     to="/contact"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Contact
                   </Link>
                   <Link
                     to="/about"
                     className="text-lg font-medium text-gray-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     About
                   </Link>
                   <Link
                     to="/login"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Login
                   </Link>
                   <Link
                     to="/sip-calculator"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     SIP Calculator
                   </Link>
                   <Link
                     to="/dashboard"
                     className="text-lg font-medium text-gray-700 hover:text-green-600 transition-colors"
                     onClick={() => setIsOpen(false)}
                   >
                     Dashboard
                   </Link>
                  <div className="pt-4">
                                                         <Button className="w-full bg-gradient-to-r from-green-600 to-slate-600 hover:from-green-700 hover:to-slate-700 text-white py-3 rounded-xl font-medium">
                       Book Now
                     </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
