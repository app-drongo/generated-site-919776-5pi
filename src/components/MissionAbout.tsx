// Enhanced by AI on 2025-08-08T17:23:10.501Z
// Section: about
// Category: about

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  Award, 
  Globe,
  ArrowRight,
  Quote,
  Star,
  BookOpen,
  Atom,
  Calendar
} from "lucide-react"
import Link from "next/link"

export default function About() {
  const courses = [
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Explore the fascinating world of quantum mechanics and particle physics with comprehensive lectures and hands-on experiments."
    },
    {
      icon: BookOpen,
      title: "Classical Mechanics",
      description: "Master the fundamental principles of motion, energy, and forces that govern the physical world around us."
    },
    {
      icon: GraduationCap,
      title: "Theoretical Physics",
      description: "Delve into advanced mathematical models that explain and predict physical phenomena across multiple disciplines."
    },
    {
      icon: Calendar,
      title: "Modern Physics",
      description: "Study relativity, nuclear physics, and contemporary discoveries shaping our understanding of the universe."
    }
  ]

  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "2000+", label: "Students Taught", icon: Users },
    { value: "98%", label: "Pass Rate", icon: GraduationCap },
    { value: "12", label: "Research Papers", icon: BookOpen }
  ]

  const benefits = [
    {
      name: "Small Class Sizes",
      description: "Maximum of 20 students per class for personalized attention and guidance."
    },
    {
      name: "Hands-on Labs",
      description: "Weekly laboratory sessions to apply theoretical concepts in practical experiments."
    },
    {
      name: "Expert Guidance",
      description: "Direct mentorship from Prof. Ouhbi and his team of experienced teaching assistants."
    },
    {
      name: "Career Support",
      description: "Guidance for academic progression and career opportunities in physics and related fields."
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            2023-2024 Enrollment Open
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Advanced Physics Courses with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professor Ouhbi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join our comprehensive physics program designed to develop your theoretical knowledge
            and practical skills under the guidance of renowned physicist Prof. Ouhbi.
          </p>
        </div>

        {/* Professor Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Meet Professor Ouhbi</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 15 years of experience in teaching and research, Professor Ouhbi is a leading
                expert in theoretical physics and quantum mechanics.
              </p>
              <p>
                His innovative teaching methods combine rigorous theoretical foundations with
                practical applications, helping students develop a deep understanding of complex
                physical concepts.
              </p>
              <p>
                Professor Ouhbi has published numerous research papers in prestigious journals and
                has mentored hundreds of students who have gone on to successful careers in academia,
                research, and industry.
              </p>
            </div>
            <Button className="group" asChild>
              <Link href="/courses">
                Explore All Courses
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="size-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                      <Quote className="size-8 text-primary" />
                    </div>
                    <blockquote className="text-lg font-medium max-w-sm">
                      "Physics is not just about equations, but about understanding the fundamental nature of our universe."
                    </blockquote>
                    <cite className="text-sm text-muted-foreground">- Prof. Ouhbi</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Courses */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Available Courses</h3>
            <p className="text-muted-foreground">
              Comprehensive physics courses designed to build your knowledge from fundamentals to advanced concepts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => {
              const Icon = course.icon
              return (
                <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-3">{course.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-4">Program Benefits</h3>
            <p className="text-muted-foreground">
              What makes our physics program stand out from the rest.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="size-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-1">{benefit.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="group" asChild>
              <Link href="/curriculum">
                View Full Curriculum
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-primary fill-current" />
                ))}
              </div>
              <blockquote className="text-xl lg:text-2xl font-medium mb-6 max-w-3xl mx-auto">
                "Professor Ouhbi's quantum physics course completely transformed my understanding of the subject. 
                His clear explanations and practical approach made complex concepts accessible and engaging."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="size-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-secondary-foreground font-bold">
                  MA
                </div>
                <div className="text-left">
                  <div className="font-semibold">Mohammed Alaoui</div>
                  <div className="text-sm text-muted-foreground">PhD Candidate, Physics Department</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enrollment CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Begin Your Physics Journey?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Enrollment for the 2023-2024 academic year is now open. Limited spots available.
          </p>
          <Button size="lg" className="group" asChild>
            <Link href="/enroll">
              Apply for Enrollment
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}