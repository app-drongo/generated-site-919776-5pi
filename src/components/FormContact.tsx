// Enhanced by AI on 2025-08-08T17:23:45.980Z
// Section: contact
// Category: contact

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Users,
  Headphones,
  GraduationCap,
  Atom,
  Calendar
} from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Prof. Ouhbi",
      description: "Get course information via email",
      contact: "prof.ouhbi@quantumacademy.edu",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call the Department",
      description: "Speak with our physics department",
      contact: "+1 (555) 123-4567",
      action: "Call Now"
    },
    {
      icon: MessageSquare,
      title: "Student Support",
      description: "Chat with student advisors",
      contact: "Available Mon-Fri, 9AM-5PM",
      action: "Start Chat"
    }
  ]

  const campusLocations = [
    {
      city: "Main Campus",
      address: "123 Quantum Avenue, Physics Building",
      timezone: "EST (UTC-5)"
    },
    {
      city: "Research Center",
      address: "456 Particle Lane, Laboratory Wing",
      timezone: "EST (UTC-5)"
    },
    {
      city: "Online Learning",
      address: "Virtual Classroom Access",
      timezone: "All Timezones"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Course Registration
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Register for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Physics Courses with Prof. Ouhbi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expand your understanding of the universe through our comprehensive physics courses. 
            Complete the form below to secure your spot in Prof. Ouhbi's renowned classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Registration Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <GraduationCap className="size-6 text-primary" />
                Student Registration
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for physics courses with Prof. Ouhbi.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="student@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="course" className="block text-sm font-medium mb-2">
                    Preferred Course *
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="e.g., Quantum Physics, Particle Physics"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your academic background or any questions about the courses..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Submit Registration
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Course Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Contact Information
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Campus Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Course Locations
              </h3>
              <div className="space-y-3">
                {campusLocations.map((location, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{location.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {location.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Schedule */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Calendar className="size-5 text-primary" />
                  Course Schedule
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantum Physics</span>
                    <span>Mon/Wed 10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Particle Physics</span>
                    <span>Tue/Thu 1:00 PM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Advanced Relativity</span>
                    <span>Fri 9:00 AM - 12:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Atom className="size-4" />
                    Lab sessions scheduled separately for each course
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}