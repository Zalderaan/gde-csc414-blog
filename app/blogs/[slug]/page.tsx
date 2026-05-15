import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <div className="space-y-6">
        <Button variant="ghost" asChild className="px-0 -ml-2 text-muted-foreground hover:text-foreground">
          <Link href="/blogs" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </Button>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Badge className="bg-primary text-primary-foreground">
              {post.type}
            </Badge>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-muted/30">
          {post.excerpt}
        </p>
        <div className="mt-8 text-lg leading-relaxed space-y-6 text-foreground/90">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="pt-12 border-t border-border">
        <Button variant="outline" asChild>
          <Link href="/blogs">
            Return to Listing
          </Link>
        </Button>
      </div>
    </article>
  );
}
