"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Waves, 
  Menu, 
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  PhoneCall,
  X,
  Info
} from 'lucide-react';
import { ThemeSwitch } from './ThemeSwitch';
import { Button } from '@/components/ui/button';
import { cn } from "@/lib/utils";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  useEffect(() => {
    // Set initial scroll state
    setScrolled(window.scrollY > 50);
    
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollPosition > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown !== null) {
        const currentRef = dropdownRefs.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    // Listen to both events to catch all scrolling
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  // Split navigation links for balanced layout
  type NavLink = {
    href: string;
    label: string;
    children?: { href: string; label: string; }[];
  };
  
  const leftNavLinks: NavLink[] = [
      { href: "/", label: "Home" },
      { href: "/rooms", label: "Accommodations", 
        children: [
          { href: "/rooms/ocean-view", label: "Ocean View Suites" },
          { href: "/rooms/beachfront", label: "Beachfront Villas" },
          { href: "/rooms/garden", label: "Garden Bungalows" }
        ]
      },
      { href: "/surf", label: "Surf" },
    ];
  
  const rightNavLinks: NavLink[] = [
    { href: "/safari", label: "Safari" },
    { href: "/restaurant", label: "Restaurant" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      <header 
        className={cn(
          "fixed w-full z-50 transition-all duration-500", 
          scrolled 
            ? "bg-background backdrop-blur-sm shadow-md py-1" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Nav Links (Desktop) */}
            <nav className="hidden lg:flex flex-1 items-center justify-start">
              <ul className="flex items-center space-x-1">
                {leftNavLinks.map((link, index) => (
                  <li 
                    key={index} 
                    className="relative"           
                  >
                    {!link.children ? (
                      <Link 
                        href={link.href}
                        className={cn(
                          "px-3 py-2 rounded-md font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 block transition-all duration-200",
                          scrolled ? "text-sm h-8" : "text-base h-10"
                        )}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className={cn(
                            "px-3 py-2 rounded-md font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 flex items-center justify-between gap-1 transition-all duration-200 w-full",
                            scrolled ? "text-sm h-8" : "text-base h-10",
                            activeDropdown === index && "bg-accent/50 text-foreground"
                          )}
                          aria-expanded={activeDropdown === index}
                          aria-haspopup="true"
                        >
                          {link.label}
                          <ChevronDown 
                            className={cn(
                              "transition-transform duration-200",
                              activeDropdown === index ? "rotate-180" : "rotate-0",
                              scrolled ? "h-3 w-3" : "h-4 w-4"
                            )} 
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute top-full left-0 mt-1 py-2 bg-card border rounded-md shadow-lg w-[220px] z-50"
                              ref={el => { dropdownRefs.current[index] = el; }}
                            >
                              {link.children.map((child, childIndex) => (
                                <Link
                                  key={childIndex}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Center Logo */}
            <div className={cn(
              "flex flex-col items-center justify-center transition-all duration-500",
              scrolled ? "scale-90" : "scale-100"
            )}>
              <Link href="/" className="text-center">
                <div className="mt-1 text-center">
                  <h1 className={cn(
                    "font-bold tracking-tight transition-all duration-300",
                    scrolled ? "text-lg" : "text-2xl"
                  )}>Rupa&apos;s Surf</h1>
                  <p className={cn(
                    "transition-all duration-300",
                    scrolled ? "text-[10px] -mt-0.5" : "text-xs"
                  )}>by Rupa</p>
                </div>
              </Link>
            </div>

            {/* Right Side - Nav Links (Desktop) */}
            <nav className="hidden lg:flex flex-1 items-center justify-end">
              <ul className="flex items-center space-x-1">
                {rightNavLinks.map((link, index) => (
                  <li 
                    key={index} 
                    className="relative"           
                  >
                    <Link 
                      href={link.href}
                      className={cn(
                        "px-3 py-2 rounded-md font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 block transition-all duration-200",
                        scrolled ? "text-sm h-8" : "text-base h-10"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                
                {/* Social and Contact */}
                <div className="flex items-center ml-4 gap-2">
                  <div className={cn(
                    "hidden xl:flex items-center gap-1 text-muted-foreground hover:text-foreground transition-all duration-300",
                    scrolled ? "text-xs" : "text-sm"
                  )}>
                    <PhoneCall className={cn(
                      "transition-all duration-300",
                      scrolled ? "h-3 w-3" : "h-4 w-4"
                    )} />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  
                  <div className="flex items-center gap-1 ml-2">
                    <Button size="icon" variant="ghost" className={cn(
                      "rounded-full transition-all duration-300",
                      scrolled ? "h-7 w-7" : "h-8 w-8"
                    )}>
                      <Instagram className={cn(
                        "transition-all duration-300",
                        scrolled ? "h-3.5 w-3.5" : "h-4 w-4"
                      )} />
                    </Button>
                    <Button size="icon" variant="ghost" className={cn(
                      "rounded-full transition-all duration-300",
                      scrolled ? "h-7 w-7" : "h-8 w-8"
                    )}>
                      <Facebook className={cn(
                        "transition-all duration-300",
                        scrolled ? "h-3.5 w-3.5" : "h-4 w-4"
                      )} />
                    </Button>
                  </div>
                  
                  <ThemeSwitch />
                </div>
              </ul>
            </nav>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <ThemeSwitch />
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={cn(
                    "transition-all duration-300",
                    scrolled ? "h-8 w-8" : "h-10 w-10"
                  )}>
                    <Menu className={cn(
                      "transition-all duration-300",
                      scrolled ? "h-4 w-4" : "h-5 w-5"
                    )} />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center py-4 border-b">
                      <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Waves className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <span className="font-bold text-lg">Rupa&apos;s Surf</span>
                          <p className="text-xs text-muted-foreground -mt-1">by Rupa</p>
                        </div>
                      </Link>
                      <SheetClose className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-accent/80">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </SheetClose>
                    </div>

                    <nav className="flex-1 overflow-auto py-6">
                      <div className="flex flex-col space-y-3">
                        {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
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
                          <Button size="icon" variant="ghost" className="rounded-full">
                            <Instagram className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="rounded-full">
                            <Facebook className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost" className="rounded-full">
                            <Twitter className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <Button className="w-full">Book Now</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      {/* Alert that appears when scrolled */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            className="fixed top-0 w-full z-40 pt-16 sm:pt-14"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Alert className="max-w-5xl mx-auto rounded-lg border border-primary bg-blue-200 text-primary shadow-sm">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <AlertDescription className="text-xs sm:text-sm flex-1">
                  Special offer: Book now and get 15% off on your stay! Use code <span className="font-bold">RUPA15</span> at checkout.
                </AlertDescription>
                <Button size="sm" variant="outline" className="h-7 text-xs border-primary bg-primary text-white hover:bg-primary/20">
                  Book Now
                </Button>
                <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </Alert>          
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;            