"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Waves,
  Anchor,
  Sun,
  Palmtree,
  MapPin,
  PhoneCall,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  Menu,
  ChevronRight,
  Calendar,
  Star,
  Users,
  Coffee,
  Wifi,
  Bath,
  UtensilsCrossed,
  Dumbbell,
  Utensils,
  Magnet,
  WavesIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function HomePage() {
  const { scrollY } = useScroll();
  const waveOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <main className="min-h-screen w-full overflow-x-hidden mt-10">
      
      {/* Hero Section with Wave Animation */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/beach.jpg"
            alt="Oceanfront Resort"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <Badge variant="outline" className="mb-4 bg-background/30 backdrop-blur-sm text-white px-4 py-1 rounded-full animate-float">
              <Sun className="h-4 w-4 mr-2 text-yellow-300" /> Paradise Awaits
            </Badge>
            <MorphingText 
              texts={[
                "Experience The Ultimate Surfing Paradise",
                "Discover Luxury Ocean Living",
                "Ride The Perfect Wave Every Day"
              ]}
              className="text-primary mb-10 text-2xl sm:text-3xl lg:text-4xl xl:text-6xl"
            />            
            <p className="text-base sm:text-lg lg:text-xl text-white mt-8 sm:mt-12 lg:mt-16 mb-6 sm:mb-8 animate-fadeIn delay-300 px-4">
              Where azure waves meet golden shores, creating the perfect canvas for your surfing adventure.
              Discover the harmony of luxury and nature at Rupa's Surf Resort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slideUp delay-500 px-4">
              <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg">
                Book Your Stay
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg bg-background/30 backdrop-blur-sm text-white border-white/50 hover:bg-white/20">
                Explore Packages
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mt-8 sm:mt-12 lg:mt-16 px-4"
          >
            <Card className="bg-background/30 backdrop-blur-md border-white/20 text-white w-full max-w-5xl rounded-3xl">
              <CardContent className="p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-4 border-b sm:border-b md:border-b-0 md:border-r border-white/20">
                    <Anchor className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">Prime Location</h3>
                    <p className="text-center text-white/80 text-xs sm:text-sm">Directly on the world-famous surfing beach</p>
                  </div>
                  <div className="flex flex-col items-center p-4 border-b sm:border-b md:border-b-0 md:border-r border-white/20">
                    <WavesIcon className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">Infinity Pools</h3>
                    <p className="text-center text-white/80 text-xs sm:text-sm">Overlooking the ocean with breathtaking views</p>
                  </div>
                  <div className="flex flex-col items-center p-4">
                    <Palmtree className="h-6 w-6 sm:h-8 sm:w-8 mb-2 text-primary" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">Tropical Paradise</h3>
                    <p className="text-center text-white/80 text-xs sm:text-sm">Lush gardens and pristine natural surroundings</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </section>

{/* About Section */}
<section id="about" className="py-24 bg-background">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
          Our Story
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Building <span className="text-primary">Memories</span> That Last Forever</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Established in 2010, Rupa's Surf Resort has been a sanctuary for surf enthusiasts and ocean lovers seeking a perfect blend of luxury and adventure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Rupa's Surf Resort"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-card text-primary p-6 rounded-xl shadow-lg">
            <p className="text-3xl font-bold">13+</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">Where Luxury Meets the Ocean</h3>
          <p className="text-muted-foreground mb-6">
            Nestled along the pristine coastline, Rupa's Surf Resort offers an exclusive escape where the rhythmic sounds of waves create the perfect backdrop for relaxation and adventure.
          </p>
          <p className="text-muted-foreground mb-6">
            Our commitment to sustainability ensures that the natural beauty of our surroundings is preserved for generations to come. We operate with eco-friendly practices while providing world-class amenities and services.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Anchor className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Expert Surf Instructors</h4>
                <p className="text-sm text-muted-foreground">Learn from world-class surfing professionals</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Personalized Experience</h4>
                <p className="text-sm text-muted-foreground">Tailored services for each guest's preferences</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Palmtree className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tropical Paradise</h4>
                <p className="text-sm text-muted-foreground">Surrounded by lush gardens and natural beauty</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <UtensilsCrossed className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">Culinary Excellence</h4>
                <p className="text-sm text-muted-foreground">Fresh, locally-sourced cuisine and ocean views</p>
              </div>
            </div>
          </div>
          
          <Button className="mt-8">
            Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </div>
</section>

{/* Accommodations Section */}
<section id="rooms" className="py-24 bg-card">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
        Accommodations
      </Badge>
      <h1 className="text-4xl font-bold mb-4">Luxurious <span className="text-primary">Stays</span>  with Ocean Views </h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Unwind in our elegantly designed rooms and suites, each offering panoramic ocean views and the soothing sounds of waves.
      </p>
    </motion.div>
    
    <Tabs defaultValue="ocean-view" className="max-w-6xl mx-auto">
      <TabsList className="grid w-full grid-cols-3 mb-12">
        <TabsTrigger value="ocean-view">Ocean View Suites</TabsTrigger>
        <TabsTrigger value="beach-front">Beachfront Villas</TabsTrigger>
        <TabsTrigger value="garden">Garden Bungalows</TabsTrigger>
      </TabsList>
      
      <TabsContent value="ocean-view">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/about.jpg"
              alt="Ocean View Suite"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-4">Ocean View Suite</h3>
            <p className="text-muted-foreground mb-6">
              Our spacious Ocean View Suites offer breathtaking panoramas of the azure waters. Wake up to the sound of gentle waves and enjoy your morning coffee on your private balcony as you watch surfers carve through perfect waves.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <span>Up to 4 Guests</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 text-primary mr-2" />
                <span>Luxury Bathroom</span>
              </div>
              <div className="flex items-center">
                <Wifi className="h-5 w-5 text-primary mr-2" />
                <span>High-Speed WiFi</span>
              </div>
              <div className="flex items-center">
              <Coffee className="h-5 w-5 text-primary mr-2" />
              <span>In-Room Coffee Bar</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-3xl font-bold">$349</p>
              <p className="text-sm text-muted-foreground">per night</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          
          <Button size="lg">
            Book This Suite <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </TabsContent>
    
    <TabsContent value="beach-front">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/about.jpg"
            alt="Beachfront Villa"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Beachfront Villa</h3>
          <p className="text-muted-foreground mb-6">
            Just steps from the shoreline, our Beachfront Villas offer unparalleled luxury and direct access to the beach. Featuring private pools and expansive outdoor living spaces, these villas redefine oceanfront living.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span>Up to 6 Guests</span>
            </div>
            <div className="flex items-center">
              <WavesIcon className="h-5 w-5 text-primary mr-2" />
              <span>Private Pool</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-5 w-5 text-primary mr-2" />
              <span>Outdoor Shower</span>
            </div>
            <div className="flex items-center">
              <UtensilsCrossed className="h-5 w-5 text-primary mr-2" />
              <span>Kitchenette</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-3xl font-bold">$649</p>
              <p className="text-sm text-muted-foreground">per night</p>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            </div>
          </div>
          
          <Button size="lg">
            Book This Villa <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </TabsContent>
    
    <TabsContent value="garden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/about.jpg"
            alt="Garden Bungalow"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-4">Garden Bungalow</h3>
          <p className="text-muted-foreground mb-6">
            Nestled within our lush tropical gardens, these secluded bungalows offer a tranquil retreat after a day of surfing adventures. Enjoy the peaceful surroundings while still being just a short walk from the beach.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-primary mr-2" />
              <span>Up to 3 Guests</span>
            </div>
            <div className="flex items-center">
              <Palmtree className="h-5 w-5 text-primary mr-2" />
              <span>Garden View</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="h-5 w-5 text-primary mr-2" />
                    <span>Spa Bathroom</span>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="h-5 w-5 text-primary mr-2" />
                    <span>Outdoor Terrace</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-3xl font-bold">$279</p>
                    <p className="text-sm text-muted-foreground">per night</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </div>
                </div>
                
                <Button size="lg">
                  Book This Bungalow <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>

    {/* Amenities Section */}
    <section id="amenities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
            Resort Amenities
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Everything You Need For <span className="text-primary">Perfect</span>  Relaxation </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Indulge in our world-class amenities designed to elevate your stay and create unforgettable memories.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <WavesIcon className="h-10 w-10 text-primary" />,
              title: "Infinity Pools",
              description: "Three cascading infinity pools overlooking the ocean, providing the perfect vantage point to watch surfers and sunset views."
            },
            {
              icon: <Magnet className="h-10 w-10 text-primary" />,
              title: "Ocean Spa",
              description: "Rejuvenate with our signature treatments using local ingredients and techniques inspired by traditional healing practices."
            },
            {
              icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
              title: "Beachfront Dining",
              description: "Four distinctive restaurants offering fresh seafood, local specialties, and international cuisine with panoramic ocean views."
            },
            {
              icon: <Dumbbell className="h-10 w-10 text-primary" />,
              title: "Fitness Center",
              description: "State-of-the-art equipment and daily yoga sessions on our oceanfront deck to maintain your wellness routine."
            },
            {
              icon: <Anchor className="h-10 w-10 text-primary" />,
              title: "Surf Shop & School",
              description: "Professional equipment rental, expert lessons for all levels, and guided sessions to the best local surf spots."
            },
            {
              icon: <Palmtree className="h-10 w-10 text-primary" />,
              title: "Private Beach Access",
              description: "Direct access to our secluded beach with complimentary loungers, umbrellas, and beach service."
            }
          ].map((amenity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                    {amenity.icon}
                  </div>
                  <CardTitle>{amenity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg">
            View All Amenities <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>

    {/* Experiences Section */}
    <section id="experiences" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-background">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="wave-pattern" width="200" height="100" patternUnits="userSpaceOnUse">
            <path d="M0,50 C40,30 60,70 100,50 C140,30 160,70 200,50" 
                   fill="none" stroke="currentColor" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
            Ocean Adventures
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Memories <span className="text-primary">Beyond</span> Compare</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dive into adventure with our curated ocean experiences and activities designed for all skill levels.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Surf Lessons",
                  description: "Learn to ride the waves with our expert instructors in private or group sessions.",
                  icon: <Waves className="h-8 w-8" />
                },
                {
                  title: "Sunset Cruises",
                  description: "Experience breathtaking sunsets aboard our luxury catamaran with refreshments.",
                  icon: <Sun className="h-8 w-8" />
                },
                {
                  title: "Snorkeling Tours",
                  description: "Explore vibrant coral reefs and encounter marine life in our protected bay.",
                  icon: <Anchor className="h-8 w-8" />
                },
                {
                  title: "Island Hopping",
                  description: "Discover hidden beaches and secluded coves on nearby islands.",
                  icon: <Palmtree className="h-8 w-8" />
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-xl"
                >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <div className="text-primary">
                  {experience.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
              <p className="text-muted-foreground">{experience.description}</p>
            </motion.div>
          ))}
        </div>
        
        <Button className="mt-8">
          Browse All Activities <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
      
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <Image
            src="/about.jpg"
            alt="Surfing Experience"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <Badge className="bg-primary text-white mb-4 w-fit">Featured Experience</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">Premium Surf Package</h3>
            <p className="text-white/80 mb-4">
              A week-long surf adventure with professional coaching, video analysis, and access to exclusive breaks.
            </p>
            <Button variant="default">
              Learn More
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Gallery Section */}
<section id="gallery" className="py-24 bg-background">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
        Visual Journey
      </Badge>
      <h1 className="text-4xl font-bold mb-4">Capturing <span className="text-primary">Ocean</span> Magic</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Explore the beauty of Rupa's Surf Resort through our curated gallery of captivating moments.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[
        { src: "/beach.jpg", alt: "Aerial view of resort", title: "Resort Overview" },
        { src: "/beach.jpg", alt: "Surfing action", title: "Perfect Waves", featured: true },
        { src: "/beach.jpg", alt: "Infinity pool", title: "Infinity Edge" },
        { src: "/beach.jpg", alt: "Resort restaurant", title: "Oceanfront Dining" },
        { src: "/beach.jpg", alt: "Sunset view", title: "Golden Hour" },
        { src: "/beach.jpg", alt: "Beach loungers", title: "Private Beach" }
      ].map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`relative overflow-hidden rounded-xl ${item.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
          <div className={`relative ${item.featured ? 'h-[500px]' : 'h-[250px]'}`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <h3 className="text-white font-bold">{item.title}</h3>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <Button variant="outline" size="lg">
        View Full Gallery <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section id="testimonials" className="py-24 bg-card relative overflow-hidden">
  <div className="absolute bottom-0 left-0 w-full h-24 opacity-20">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="currentColor"
      />
    </svg>
  </div>
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
        Guest Experiences
      </Badge>
      <h1 className="text-4xl font-bold mb-4">Testimonials From <span className="text-primary">Paradise</span> Luxurious</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Discover why travelers choose Rupa's Surf Resort for their surfing getaways and beach vacations.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Sarah Johnson",
          location: "Los Angeles, USA",
          avatar: "/404.png",
          rating: 5,
          text: "The perfect blend of luxury and surf culture. The instructors helped me catch my first wave, and the oceanfront suite was absolutely stunning. Can't wait to return!"
        },
        {
          name: "Marcus Torres",
          location: "Sydney, Australia",
          avatar: "/404.png",
          rating: 5,
          text: "As an experienced surfer, I was blown away by the quality of waves and the convenience of the location. The staff went above and beyond to make my stay memorable. The infinity pools overlooking the break are a game-changer."
        },
        {
          name: "Emma Chen",
          location: "Tokyo, Japan",
          avatar: "/404.png",
          rating: 5,
          text: "I came for relaxation and found paradise. The spa treatments are incredible, and even though I didn't surf, watching the surfers from my balcony while sipping coffee was magical. The restaurants exceeded all expectations."
        }
      ].map((testimonial, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <Card className="h-full">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.location}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.text}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    
    <div className="mt-12 text-center">
      <Button variant="outline" size="lg">
        Read More Testimonials <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </div>
</section>

{/* Location Section */}
<section id="location" className="py-24 bg-background">
  <div className="container mx-auto px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
        Our Location
      </Badge>
      <h1 className="text-4xl font-bold mb-4">Luxurious Destination: <span className="text-primary">Rupa's Surf</span></h1>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Conveniently located in a pristine coastal setting, with easy access to the best surf spots and local attractions.
      </p>
    </motion.div>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold mb-6">Getting Here</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Resort Address</h4>
              <p className="text-muted-foreground">123 Ocean Drive, Surf Bay</p>
              <p className="text-muted-foreground">Paradise Coast, PC 98765</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Nearby Airports</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span>International Airport (PCL)</span>
                <span className="text-muted-foreground">45 minutes</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-2">
                <span>Regional Airport (RGC)</span>
                <span className="text-muted-foreground">20 minutes</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Transport Options</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Complimentary airport shuttle service</li>
              <li>Private car transfers (additional fee)</li>
              <li>Car rentals available at the resort</li>
              <li>Water taxi from nearby harbors</li>
            </ul>
          </div>
        </div>
        
        <Button className="mt-8">
          Get Directions <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-[400px] rounded-xl overflow-hidden"
      >
        <Image
          src="/about.jpg"
          alt="Resort Location Map"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg">
            <Button variant="default">
              View Interactive Map
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
    
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center">Nearby Attractions</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
                { title: "Hidden Cove", distance: "5 mins", description: "Secret surf spot with consistent waves" },
                { title: "Marine Reserve", distance: "15 mins", description: "Protected area with diverse marine life" },
                { title: "Coastal Village", distance: "20 mins", description: "Authentic local culture and cuisine" },
                { title: "Waterfall Hike", distance: "30 mins", description: "Scenic trail leading to stunning falls" }
              ].map((attraction, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-sm"
                >
                  <h4 className="font-bold mb-1">{attraction.title}</h4>
                  <p className="text-primary text-sm mb-2">{attraction.distance} away</p>
                  <p className="text-muted-foreground text-sm">{attraction.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="water-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#water-pattern)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1">
              Get In Touch
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Your Dream <span className="text-primary">Vacation</span> Awaits</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contact our reservation team to plan your perfect beachfront getaway or ask any questions about your stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reservations</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-muted-foreground">reservations@Rupa's Surf.com</p>
                    <p className="text-muted-foreground">info@Rupa's Surf.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">123 Ocean Drive, Surf Bay</p>
                    <p className="text-muted-foreground">Paradise Coast, PC 98765</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    >
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="packages">Surf Packages</option>
                      <option value="general">General Information</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
