"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Waves,
  Palmtree,
  Instagram,
  ChevronRight,
  Star,
  Users,
  Car,
  Utensils,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-background">
      
      {/* Hero Banner */}
      <section 
        id="home" 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/beach.jpg"
            alt="Surfers Paradise"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Surf, Relax, Explore
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Your perfect beach getaway with world-class surfing, authentic experiences, and unforgettable adventures
            </p>
            <Button  className="bg-primary hover:bg-blue-600 text-white text-lg">
              Book Now
            </Button>
          </motion.div>
        </div>
        
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 border border-primary text-black bg-blue-200 px-4 py-1">
                Welcome to Rupa&apos;s Surf Resort
              </Badge>
              <h1 className="text-4xl font-bold mb-6">Your Beach Home <span className="text-primary">Away From Home</span></h1>
              <p className="text-lg mb-6">
                Nestled on the pristine shores of Sri Lanka, our surf resort offers the perfect blend of adventure and relaxation. 
                Whether you&apos;re catching your first wave or looking for the perfect break, our experienced team is here to make your
                stay unforgettable.
              </p>
              <Button className="mt-4">
                Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Rupas Surf Resort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-card p-5 rounded-xl shadow-lg">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p className="text-sm font-medium mt-1">300+ 5-star reviews</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Tiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border border-primary text-black bg-blue-200 px-4 py-1">
              Explore Our Offerings
            </Badge>
            <h1 className="text-4xl font-bold mb-4">What We <span className="text-primary">Offer</span></h1>
            <p className="text-lg max-w-3xl mx-auto">
              From comfortable accommodations to exciting adventures, we have everything you need for an amazing stay.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Rooms", 
                description: "Comfortable beachfront accommodations for every budget",
                icon: <Users className="h-10 w-10 text-blue-500" />,
                image: "/about.jpg",
                link: "/rooms"
              },
              { 
                title: "Surf Camp", 
                description: "Lessons and guided sessions for all skill levels",
                icon: <Waves className="h-10 w-10 text-red-500" />,
                image: "/about.jpg",
                link: "/surf"
              },
              { 
                title: "Safari", 
                description: "Explore the local wildlife and natural wonders",
                icon: <Palmtree className="h-10 w-10 text-green-500" />,
                image: "/about.jpg",
                link: "/safari"
              },
              { 
                title: "Restaurant", 
                description: "Fresh local cuisine with ocean views",
                icon: <Utensils className="h-10 w-10 text-yellow-500" />,
                image: "/about.jpg",
                link: "/restaurant"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 relative">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 p-3  rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <p className="mb-6">{item.description}</p>
                  <Link href={item.link}>
                    <Button variant="outline" className="group-hover:bg-blue-500 group-hover:text-white border border-primary transition-colors duration-300">
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border border-primary text-black bg-blue-200 px-4 py-1">
              Happy Guests
            </Badge>
            <h1 className="text-4xl font-bold mb-4">What Our Guests <span className="text-primary">Say</span></h1>
            <p className="text-lg max-w-3xl mx-auto">
              Don't just take our word for it, hear from those who have experienced our hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Los Angeles, USA",
                avatar: "/404.png",
                rating: 5,
                text: "My first surfing experience and it was amazing! The instructors were patient and friendly, and the accommodation was perfect."
              },
              {
                name: "Marcus Torres",
                location: "Sydney, Australia",
                avatar: "/404.png",
                rating: 5,
                text: "As an experienced surfer, I was blown away by the quality of waves and the convenience of the location. The team went above and beyond."
              },
              {
                name: "Emma Chen",
                location: "Tokyo, Japan",
                avatar: "/404.png",
                rating: 5,
                text: "The safari tour was the highlight of my trip! Got to see elephants up close and our guide was so knowledgeable. The food at the restaurant was exceptional too."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full bg-card border-none shadow-xl hover:shadow-xl transition-shadow duration-300">
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
                    <p className="">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border border-primary text-black bg-blue-200 px-4 py-1">
              Instagram
            </Badge>
            <h1 className="text-4xl font-bold mb-4">Follow Our <span className="text-primary">Adventures</span></h1>
            <p className="text-lg  max-w-3xl mx-auto">
              Stay updated with our latest surfing adventures, guest experiences, and beautiful beach moments.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="aspect-square w-full rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src="/beach.jpg" 
                    alt="Instagram post" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border border-primary text-black bg-blue-200 px-4 py-1">
              Experiences
            </Badge>
            <h1 className="text-4xl font-bold mb-4">More Than Just <span className="text-primary">Surfing</span></h1>
            <p className="text-lg max-w-3xl mx-auto">
              Discover all the exciting activities we offer for a complete Sri Lankan experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Surf Lessons",
                description: "Learn to ride the waves with our expert instructors in private or group sessions.",
                icon: <Waves className="h-8 w-8 text-blue-500" />,
                image: "/beach.jpg"
              },
              {
                title: "Taxi Services",
                description: "Convenient transportation to nearby attractions and airport transfers.",
                icon: <Car className="h-8 w-8 text-blue-500" />,
                image: "/beach.jpg"
              },
              {
                title: "Wildlife Safari",
                description: "Explore local national parks and encounter exotic wildlife in their natural habitat.",
                icon: <Palmtree className="h-8 w-8 text-blue-500" />,
                image: "/beach.jpg"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 relative">
                  <Image 
                    src={activity.image} 
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg mr-3">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-bold">{activity.title}</h3>
                  </div>
                  <p className=" mb-6">{activity.description}</p>
                  <Button>
                    Explore Activity <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Beach Adventure?</h1>
            <p className="text-xl mb-10 text-white/90">
              Book your stay now and get ready for sun, surf, and unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-500 hover:bg-white/90 transition-colors duration-300 text-lg px-8">
                Book Your Stay
              </Button>
              <Button size="lg" variant="outline" className="bg-black border border-primary text-white text-lg px-8">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <div className="w-32 h-32 rounded-full bg-blue-400/30 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0">
          <div className="w-40 h-40 rounded-full bg-blue-400/30 blur-3xl"></div>
        </div>
      </section>
    </main>
  );
}
