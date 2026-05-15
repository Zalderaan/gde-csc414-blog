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
    <article className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-6">
        <Button variant="ghost" asChild className="px-0 -ml-2 text-muted-foreground hover:text-foreground">
          <Link href="/blogs" className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blogs
          </Link>
        </Button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <Badge className="bg-primary text-primary-foreground">
              {post.type}
            </Badge>
            {post.mode && (
              <Badge variant="outline" className="border-primary/50 text-primary">
                {post.mode}
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            {post.title}
          </h1>

          {(post.venue || post.role) && (
            <div className="flex flex-wrap w-full bg-background/50 gap-x-8 gap-y-2 text-sm text-muted-foreground border-y border-border py-4">
              {post.venue && (
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px]">Location</span>
                  <span>{post.venue}</span>
                </div>
              )}
              {post.role && (
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px]">My Role</span>
                  <span>{post.role}</span>
                </div>
              )}
              {post.organizers && post.organizers.length > 0 && (
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground uppercase tracking-wider text-[10px]">Organized By</span>
                  <span>{post.organizers.join(", ")}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {post.coverImage && (
        <div className="w-full aspect-video md:h-[400px] relative rounded-xl overflow-hidden border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 py-2 bg-muted/30">
          {post.excerpt}
        </p>

        {post.sections ? (
          <div className="space-y-12 mt-12">
            {post.sections.details && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">I. Details of the event/activity</h2>
                <div className="text-lg leading-relaxed whitespace-pre-wrap">{post.sections.details}</div>
              </section>
            )}
            {post.sections.learnings && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">II. Reflections on the seminar/activity (learnings)</h2>
                <div className="text-lg leading-relaxed whitespace-pre-wrap">{post.sections.learnings}</div>
              </section>
            )}
            {post.sections.practicalApplications && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">III. Reflections on practical application</h2>
                <div className="text-lg leading-relaxed whitespace-pre-wrap">{post.sections.practicalApplications}</div>
              </section>
            )}
            {post.sections.positiveFeedback && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">IV. Positive feedback</h2>
                <div className="text-lg leading-relaxed whitespace-pre-wrap">{post.sections.positiveFeedback}</div>
              </section>
            )}
            {post.sections.suggestions && (
              <section className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">V. Suggestions for improvements</h2>
                <div className="text-lg leading-relaxed whitespace-pre-wrap">{post.sections.suggestions}</div>
              </section>
            )}
          </div>
        ) : (
          <div className="mt-8 text-lg leading-relaxed space-y-6 text-foreground/90 whitespace-pre-wrap">
            {post.content}
          </div>
        )}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-3 py-1 text-xs">
              #{tag}
            </Badge>
          ))}
        </div>
      )}

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
