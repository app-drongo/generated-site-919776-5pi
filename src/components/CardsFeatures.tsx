// Enhanced by AI on 2025-08-08T17:22:27.645Z
// Section: features
// Category: features

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  BookOpen, 
  Atom, 
  GraduationCap, 
  Award, 
  Calendar,
  Users,
  Calculator,
  Star
} from "lucide-react"
import Link from "next/link"

export default function Features() {
  const courses = [
    {
      icon: Atom,
      title: "Quantum Physics",
      description: "Explore the fascinating world of quantum mechanics and particle behavior with Prof. Ouhbi.",
      badge: "Advanced"
    },
    {
      icon: Zap,
      title: "Electromagnetism",
      description: "Master the principles of electricity, magnetism, and electromagnetic waves in this comprehensive course.",
      badge: "Intermediate"
    },
    {
      icon: BookOpen,
      title: "Classical Mechanics",
      description: "Build a strong foundation in Newtonian physics and understand the laws that govern motion.",
      badge: "Beginner"
    },
    {
      icon: Calculator,
      title: "Mathematical Physics",
      description: "Develop the mathematical tools and techniques essential for solving complex physics problems.",
      badge: "Intermediate"
    },
    {
      icon: GraduationCap,
      title: "Thermodynamics",
      description: "Study energy transfer, heat, work, and the fundamental laws governing physical systems.",
      badge: "Intermediate"
    },
    {
      icon: Star,
      title: "Astrophysics",
      description: "Journey through the cosmos and understand the physics behind celestial objects and phenomena.",
      badge: "Advanced"
    },
    {
      icon: Users,
      title: "Physics Lab Practicals",
      description: "Hands-on laboratory sessions to apply theoretical concepts through practical experiments.",
      badge: "All Levels"
    },
    {
      icon: Calendar,
      title: "Exam Preparation",
      description: "Intensive review sessions designed to help you excel in your physics examinations.",
      badge: "All Levels"
    },
    {
      icon: Award,
      title: "Research Methods",
      description: "Learn scientific research methodologies and participate in physics research projects with Prof. Ouhbi.",
      badge: "Advanced"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Physics Courses
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enroll in Physics Courses with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professor Ouhbi
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover a range of physics courses designed to deepen your understanding of the universe,
            from fundamental principles to advanced theoretical concepts.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {course.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to begin your physics journey with Prof. Ouhbi?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Register Now
            </Link>
            <Link href="/course-details" className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View Course Details
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}