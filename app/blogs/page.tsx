import { blogPosts } from "@/lib/data";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Coursework Reports</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Detailed documentation of seminars attended and educational trips undertaken during the CS curriculum.
        </p>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="break-inside-avoid mb-8 flex flex-col border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
            {post.coverImage && (
              <div className="relative w-full h-48 border-b border-border bg-muted/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.coverImage} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            )}
            <CardHeader className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {post.type}
                </Badge>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </div>
              <CardTitle className="text-xl leading-tight">
                {post.title}
              </CardTitle>
              <CardDescription className="text-sm line-clamp-3">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardFooter className="">
              <Button variant="default" asChild className=" w-full text-primary-foreground hover:text-background hover:bg-primary border-border hover:border-primary">
                <Link href={`/blogs/${post.slug}`} className="gap-2">
                  View Full Report <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
