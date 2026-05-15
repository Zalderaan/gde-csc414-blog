import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const featuredPosts = blogPosts.slice(0, 2);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="py-20 space-y-8">
        <div className="space-y-4">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Coursework Blog
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
            CS Seminars & <br />
            <span className="text-primary">Educational Trips</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A curated compilation of academic seminars and field trips documented as part of my computer science coursework. Exploring the intersection of theory and industry practice.
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/blogs">Explore Blogs</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="space-y-12">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Posts</h2>
            <p className="text-muted-foreground">The most recent highlights from our seminars and trips.</p>
          </div>
          <Button variant="ghost" asChild className="hidden md:flex">
            <Link href="/blogs" className="gap-2">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{post.type}</Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base line-clamp-2">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="link" asChild className="px-0 text-primary">
                  <Link href={`/blogs/${post.slug}`} className="gap-2">
                    Read Report <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
