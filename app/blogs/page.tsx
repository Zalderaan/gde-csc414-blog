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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col border-border hover:border-primary/50 transition-all duration-300">
            <CardHeader className="space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className={post.type === "Trip" ? "border-blue-500/50 text-blue-500" : "border-primary/50 text-primary"}>
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
            <CardFooter className="pt-0">
              <Button variant="outline" asChild className="w-full hover:bg-primary hover:text-primary-foreground border-border hover:border-primary">
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
