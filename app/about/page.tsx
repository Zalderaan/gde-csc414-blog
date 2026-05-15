import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BookOpen, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="relative w-64 h-64 shrink-0 rounded-2xl overflow-hidden border-2 border-primary/20 bg-muted">
           <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
             <User className="w-20 h-20 text-primary/40" />
           </div>
           {/* Replace with actual image when available */}
           <Image 
            src="/about_profile.png" 
            alt="Godfrey Eclarinal"
            fill
            className="object-cover opacity-90 hover:opacity-100 transition-opacity"
           />
        </div>
        <div className="space-y-6 flex-1">
          <div className="space-y-2">
            <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">Student Developer</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Godfrey Eclarinal</h1>
            <p className="text-xl text-muted-foreground font-medium">BSCS 4A — Gordon College</p>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a Computer Science student at Gordon College, passionate about software development, cybersecurity, and system architecture. This blog serves as a digital portfolio for my seminars and educational trips, documenting my journey into the professional tech landscape.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              Olongapo City, Philippines
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap className="w-4 h-4 text-primary" />
              Gordon College
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="w-5 h-5 text-primary" />
              Course Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <span className="text-muted-foreground">Course Code</span>
              <span className="font-medium">CSC414</span>
              
              <span className="text-muted-foreground">Course Name</span>
              <span className="font-medium">CS Seminars & Educational Trips</span>
              
              <span className="text-muted-foreground">Academic Year</span>
              <span className="font-medium">2025-2026</span>
              
              <span className="text-muted-foreground">Department</span>
              <span className="font-medium">CCS</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="w-5 h-5 text-primary" />
              Student Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <span className="text-muted-foreground">Name</span>
              <span className="font-medium">Godfrey Eclarinal</span>
              
              <span className="text-muted-foreground">Program</span>
              <span className="font-medium">BS Computer Science</span>
              
              <span className="text-muted-foreground">Section</span>
              <span className="font-medium">BSCS 4A</span>
              
              <span className="text-muted-foreground">Status</span>
              <Badge className="w-fit">Active</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-8 pt-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Purpose of this Blog</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground">
            <p>
              This blog is more than just a requirement; it is a documentation of the real-world experiences and insights gained through seminars, webinars, and industry visits. Each report reflects my understanding of how theoretical concepts learned in the classroom translate into industry standards and emerging technologies.
            </p>
            <p>
              From exploring cybersecurity trends to visiting telecommunications centers and participating in regional hackathons, these activities have broadened my perspective as a future IT professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
