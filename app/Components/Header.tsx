"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Waves, 
  Menu, 
  X, 
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  PhoneCall,
  Mail
} from 'lucide-react';
import { ThemeSwitch } from './ThemeSwitch';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      setIsLoggedIn(true);
      const email = atob(adminToken).split(':')[0];
      setUsername(email);
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Accommodations", 
      children: [
        { href: "/rooms/ocean-view", label: "Ocean View Suites" },
        { href: "/rooms/beachfront", label: "Beachfront Villas" },
        { href: "/rooms/garden", label: "Garden Bungalows" }
      ]
    },
    { href: "/dining", label: "Dining" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        scrolled 
          ? "bg-card shadow-md py-3" 
          : "bg-background py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="font-bold text-xl tracking-tight">Rupa's Surf</span>
              <Badge variant="outline" className="ml-2 text-xs bg-primary/10 text-primary">Resort</Badge>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link, index) => 
                  !link.children ? (
                    <NavigationMenuItem key={index}>
                      <Link href={link.href} legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                          {link.label}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {link.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium">{child.label}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side - Auth and Theme */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <PhoneCall className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            
            <ThemeSwitch />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSwitch />
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center py-4 border-b">
                    <Link href="/" className="flex items-center gap-2">
                      <div className="relative h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <Waves className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-bold text-lg">Rupa's Surf</span>
                    </Link>
                    <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none">
                      <span className="sr-only">Close</span>
                    </SheetClose>
                  </div>

                  <nav className="flex-1 overflow-auto py-6">
                    <div className="flex flex-col space-y-3">
                      {navLinks.map((link, index) => (
                        <div key={index} className="relative">
                          {!link.children ? (
                            <SheetClose asChild>
                              <Link 
                                href={link.href}
                                className="block px-2 py-2 text-lg font-medium transition-colors hover:text-primary"
                              >
                                {link.label}
                              </Link>
                            </SheetClose>
                          ) : (
                            <details className="group">
                              <summary className="flex items-center justify-between px-2 py-2 text-lg font-medium cursor-pointer list-none hover:text-primary">
                                <span>{link.label}</span>
                                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                              </summary>
                              <div className="pl-4 mt-1 space-y-1">
                                {link.children.map((child, childIndex) => (
                                  <SheetClose key={childIndex} asChild>
                                    <Link 
                                      href={child.href}
                                      className="block px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                      {child.label}
                                    </Link>
                                  </SheetClose>
                                ))}
                              </div>
                            </details>
                          )}
                        </div>
                      ))}
                    </div>
                  </nav>

                  <div className="border-t py-6 space-y-4">
                    <div className="flex justify-between">
                      <div className="text-muted-foreground flex items-center gap-2">
                        <PhoneCall className="h-4 w-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
