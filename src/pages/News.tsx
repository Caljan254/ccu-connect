import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";

export default function News() {
  const { data: articles, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .eq("category", "news")
        .order("published_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>News & Updates | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Latest news and updates from Chama Cha Uzalendo. Stay informed about party activities, events, and political developments." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Stay informed about the latest developments, announcements, and activities of CCU.
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="container-section">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden">
                  <Skeleton className="aspect-video" />
                  <div className="p-6">
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    {article.featured_image ? (
                      <img src={article.featured_image} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl">📰</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {article.published_at && format(new Date(article.published_at), "MMMM d, yyyy")}
                    </div>
                    <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/news/${article.slug}`}
                      className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📰</span>
              <h2 className="font-display text-2xl font-bold mb-2">No News Yet</h2>
              <p className="text-muted-foreground">
                Check back soon for the latest updates from CCU.
              </p>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
