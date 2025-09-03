"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Menu,
  X,
  CheckCircle,
  Users,
  Award,
  Clock,
  Home,
  Building,
  Hammer,
  Wrench,
  Zap,
  ClipboardList,
} from "lucide-react"

export default function JTConstructionWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [ctaSource, setCtaSource] = useState("")

  const scrollToContact = (service = "", source = "") => {
    setSelectedService(service)
    setCtaSource(source)
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const callNow = () => {
    window.location.href = "tel:+1234567890"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-[0_4px_20px_rgba(0,0,83,0.15)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/jt-logo.png"
                alt="JT Construction Logo"
                width={50}
                height={50}
                className="w-10 h-10 md:w-12 md:h-12 drop-shadow-[0_2px_8px_rgba(0,0,83,0.3)]"
              />
              <span className="text-xl md:text-2xl font-bold text-foreground">JT Construction</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-[0_2px_4px_rgba(0,0,83,0.2)]"
              >
                About
              </a>
              <a
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-[0_2px_4px_rgba(0,0,83,0.2)]"
              >
                Services
              </a>
              <a
                href="#gallery"
                className="text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-[0_2px_4px_rgba(0,0,83,0.2)]"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-[0_2px_4px_rgba(0,0,83,0.2)]"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-muted-foreground hover:text-foreground transition-colors hover:drop-shadow-[0_2px_4px_rgba(0,0,83,0.2)]"
              >
                Reviews
              </a>
              <Button
                onClick={callNow}
                variant="outline"
                size="sm"
                className="ml-4 bg-transparent shadow-[0_4px_12px_rgba(0,0,83,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,83,0.3)] transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border shadow-[0_8px_20px_rgba(0,0,83,0.1)]">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reviews
                </a>
                <Button
                  onClick={callNow}
                  variant="outline"
                  size="sm"
                  className="w-fit bg-transparent shadow-[0_4px_12px_rgba(0,0,83,0.2)]"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-construction.jpg"
            alt="Construction site background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance drop-shadow-[0_4px_12px_rgba(0,0,83,0.3)]">
              Do it right, get it out of sight
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
              Professional general contracting services in Stockton and throughout North California. Quality
              craftsmanship you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToContact("General Consultation", "Hero Section")}
                size="lg"
                className="text-base shadow-[0_6px_20px_rgba(0,0,83,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Book Appointment
              </Button>
              <Button
                onClick={callNow}
                variant="outline"
                size="lg"
                className="text-base bg-transparent shadow-[0_6px_20px_rgba(0,0,83,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
                About JT Construction
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                With years of experience serving North California, we're committed to delivering exceptional
                construction services that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <Users className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.3)]" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Skilled professionals with decades of combined experience</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <Award className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.3)]" />
                  <CardTitle>Quality Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Premium materials and meticulous attention to detail</p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.3)]" />
                  <CardTitle>On Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Reliable project completion within agreed timelines</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button
                onClick={() => scrollToContact("General Consultation", "About Section")}
                size="lg"
                className="shadow-[0_6px_20px_rgba(0,0,83,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive general contracting services for residential and commercial projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Home Renovations",
                description: "Complete home makeovers, kitchen and bathroom remodels, room additions",
                icon: Home,
              },
              {
                title: "New Construction",
                description: "Custom homes, commercial buildings, and ground-up construction projects",
                icon: Building,
              },
              {
                title: "Roofing Services",
                description: "Roof repairs, replacements, and installations with quality materials",
                icon: Hammer,
              },
              {
                title: "Concrete Work",
                description: "Driveways, foundations, patios, and decorative concrete solutions",
                icon: Wrench,
              },
              {
                title: "Electrical & Plumbing",
                description: "Licensed electrical and plumbing installations and repairs",
                icon: Zap,
              },
              {
                title: "Project Management",
                description: "Full project oversight from planning to completion",
                icon: ClipboardList,
              },
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="overflow-hidden shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader className="text-center">
                    <IconComponent className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.3)]" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-pretty">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => scrollToContact(service.title, "Services Section")}
                      className="w-full shadow-[0_4px_12px_rgba(0,0,83,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,83,0.3)] transition-all duration-300"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
              Our Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              See the quality and craftsmanship in our completed projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/gallery-1.jpg",
              "/images/gallery-2.jpg",
              "/images/gallery-3.jpg",
              "/images/gallery-4.jpg",
              "/images/gallery-5.jpg",
              "/images/gallery-6.jpg",
              "/images/gallery-7.jpg",
              "/images/gallery-8.jpg",
            ].map((imageSrc, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden rounded-lg shadow-[0_6px_20px_rgba(0,0,83,0.2)] hover:shadow-[0_10px_28px_rgba(0,0,83,0.3)] transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={`Construction Project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToContact("Project Consultation", "Gallery Section")}
              size="lg"
              className="shadow-[0_6px_20px_rgba(0,0,83,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
              Service Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Flexible pricing options to fit your project needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic Package",
                price: "Starting at $5,000",
                description: "Perfect for small repairs and minor renovations",
                features: [
                  "Basic repairs and maintenance",
                  "Small room updates",
                  "Minor electrical/plumbing work",
                  "30-day warranty",
                  "Free consultation",
                ],
              },
              {
                name: "Standard Package",
                price: "Starting at $25,000",
                description: "Ideal for medium-scale renovation projects",
                features: [
                  "Full room renovations",
                  "Kitchen/bathroom remodels",
                  "Roofing and siding work",
                  "90-day warranty",
                  "Project management included",
                  "Material sourcing assistance",
                ],
                popular: true,
              },
              {
                name: "Premium Package",
                price: "Starting at $75,000",
                description: "Complete construction and major renovation projects",
                features: [
                  "New construction projects",
                  "Whole home renovations",
                  "Commercial construction",
                  "1-year warranty",
                  "Dedicated project manager",
                  "Premium material options",
                  "Architectural consultation",
                ],
              },
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? "border-primary shadow-[0_12px_32px_rgba(0,0,83,0.25)]" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground shadow-[0_4px_12px_rgba(0,0,83,0.3)]">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
                    {plan.price}
                  </div>
                  <CardDescription className="text-pretty">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 drop-shadow-[0_1px_4px_rgba(0,0,83,0.2)]" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => scrollToContact(plan.name, "Pricing Section")}
                    className="w-full shadow-[0_4px_12px_rgba(0,0,83,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,83,0.3)] transition-all duration-300"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Don't just take our word for it - hear from satisfied customers across North California
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Stockton, CA",
                rating: 5,
                text: "JT Construction transformed our outdated kitchen into a modern masterpiece. The attention to detail and professionalism was outstanding.",
              },
              {
                name: "Mike Rodriguez",
                location: "Sacramento, CA",
                rating: 5,
                text: "From start to finish, the team was reliable and delivered exactly what they promised. Our new deck is perfect for family gatherings.",
              },
              {
                name: "Lisa Chen",
                location: "Modesto, CA",
                rating: 5,
                text: "Excellent communication throughout the entire bathroom renovation. They stayed on budget and completed the work ahead of schedule.",
              },
              {
                name: "David Thompson",
                location: "Fresno, CA",
                rating: 5,
                text: "Professional, clean, and efficient. JT Construction exceeded our expectations on our home addition project.",
              },
              {
                name: "Maria Garcia",
                location: "San Jose, CA",
                rating: 5,
                text: "The quality of workmanship is exceptional. Our new roof looks amazing and we haven't had any issues since installation.",
              },
              {
                name: "Robert Kim",
                location: "Oakland, CA",
                rating: 5,
                text: "Honest pricing, quality work, and great customer service. I would definitely recommend JT Construction to anyone.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card shadow-[0_8px_24px_rgba(0,0,83,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,83,0.25)] transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-[0_1px_4px_rgba(0,0,83,0.2)]"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-pretty">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => scrollToContact("Customer Referral", "Testimonials Section")}
              size="lg"
              className="shadow-[0_6px_20px_rgba(0,0,83,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Join Our Happy Customers
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 drop-shadow-[0_2px_8px_rgba(0,0,83,0.2)]">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Ready to start your project? Contact us today for a free consultation and estimate.
              </p>
            </div>

            <Card className="shadow-[0_12px_32px_rgba(0,0,83,0.2)]">
              <CardContent className="p-6">
                {selectedService && (
                  <div className="mb-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary mb-1">Service Interest:</p>
                    <p className="text-foreground font-semibold">{selectedService}</p>
                    {ctaSource && <p className="text-xs text-muted-foreground mt-1">From: {ctaSource}</p>}
                  </div>
                )}

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        className="shadow-[0_2px_8px_rgba(0,0,83,0.1)] focus:shadow-[0_4px_12px_rgba(0,0,83,0.2)] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        required
                        className="shadow-[0_2px_8px_rgba(0,0,83,0.1)] focus:shadow-[0_4px_12px_rgba(0,0,83,0.2)] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="shadow-[0_2px_8px_rgba(0,0,83,0.1)] focus:shadow-[0_4px_12px_rgba(0,0,83,0.2)] transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder={
                        selectedService
                          ? `Tell us more about your ${selectedService.toLowerCase()} project, timeline, and any specific requirements...`
                          : "Tell us about your project, timeline, and any specific requirements..."
                      }
                      rows={5}
                      required
                      className="shadow-[0_2px_8px_rgba(0,0,83,0.1)] focus:shadow-[0_4px_12px_rgba(0,0,83,0.2)] transition-all duration-300"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-[0_6px_20px_rgba(0,0,83,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,83,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message & Get Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Or contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={callNow}
                  variant="outline"
                  size="lg"
                  className="shadow-[0_4px_12px_rgba(0,0,83,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,83,0.3)] transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (555) 123-4567
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="shadow-[0_4px_12px_rgba(0,0,83,0.2)] hover:shadow-[0_6px_16px_rgba(0,0,83,0.3)] transition-all duration-300 transform hover:-translate-y-1 bg-transparent"
                >
                  <a href="mailto:Boocksenriquez@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12 shadow-[0_-8px_24px_rgba(0,0,83,0.15)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/jt-logo.png"
                  alt="JT Construction Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 brightness-0 invert drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]"
                />
                <span className="text-xl font-bold">JT Construction</span>
              </div>
              <p className="text-accent-foreground/80 mb-4 text-pretty">
                Professional general contracting services throughout North California. Do it right, get it out of sight.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80">Stockton, CA & North California</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-accent-foreground/80">Boocksenriquez@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Home Renovations</li>
                <li>New Construction</li>
                <li>Roofing Services</li>
                <li>Concrete Work</li>
                <li>Electrical & Plumbing</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center">
            <p className="text-accent-foreground/60">
              © 2024 JT Construction. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
