import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function Events() {
  const { data: events, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("published", true)
        .gte("event_date", new Date().toISOString())
        .order("event_date", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <Helmet>
        <title>Events & Rallies | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Upcoming CCU events, rallies, and meetings. Join us at our next gathering and be part of the patriotic movement." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Events & Rallies
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Join us at our upcoming events. Meet fellow patriots and be part of the movement.
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="container-section">
          {isLoading ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-xl p-6 flex gap-6">
                  <Skeleton className="w-24 h-24 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : events && events.length > 0 ? (
            <div className="space-y-6 max-w-4xl mx-auto">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground">
                    <span className="text-sm font-medium uppercase">
                      {format(new Date(event.event_date), "MMM")}
                    </span>
                    <span className="text-3xl font-display font-bold">
                      {format(new Date(event.event_date), "d")}
                    </span>
                    <span className="text-xs">
                      {format(new Date(event.event_date), "yyyy")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl md:text-2xl font-bold mb-2">{event.title}</h2>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {format(new Date(event.event_date), "h:mm a")}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-6xl mb-4 block">📅</span>
              <h2 className="font-display text-2xl font-bold mb-2">No Upcoming Events</h2>
              <p className="text-muted-foreground mb-6">
                Check back soon for upcoming CCU events and rallies.
              </p>
              <Button variant="outline" asChild>
                <a href="/contact">Contact Us for Event Inquiries</a>
              </Button>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
