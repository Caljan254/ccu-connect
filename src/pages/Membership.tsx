import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Users, Star, Crown, Shield, Check, Loader2 } from "lucide-react";

const membershipCategories = [
  {
    icon: Users,
    name: "Ordinary Member",
    value: "ordinary",
    description: "Full voting rights at ward level. Open to all Kenyan citizens 18 years and above.",
    benefits: ["Vote in ward elections", "Attend party meetings", "Receive party updates", "Access member resources"],
    fee: "KES 200/year",
  },
  {
    icon: Star,
    name: "Associate Member",
    value: "associate",
    description: "Non-voting membership for supporters and well-wishers of CCU.",
    benefits: ["Attend public events", "Receive newsletters", "Show solidarity", "Network with members"],
    fee: "KES 100/year",
  },
  {
    icon: Crown,
    name: "Life Member",
    value: "life",
    description: "Permanent membership with enhanced privileges and recognition.",
    benefits: ["All ordinary benefits", "Life membership card", "Special recognition", "Priority event access"],
    fee: "KES 10,000 (one-time)",
  },
  {
    icon: Shield,
    name: "Founder Member",
    value: "founder",
    description: "Reserved for original founding members of CCU (closed category).",
    benefits: ["All life benefits", "Founder recognition", "Advisory role", "Legacy status"],
    fee: "By invitation",
  },
];

const counties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay",
  "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii",
  "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera",
  "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi",
  "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
  "Tharaka-Nithi", "Trans-Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];

export default function Membership() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    id_number: "",
    county: "",
    constituency: "",
    ward: "",
    membership_category: "ordinary",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("members").insert([formData]);

      if (error) throw error;

      toast({
        title: "Registration Successful!",
        description: "Your membership application has been submitted. We'll contact you soon.",
      });

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        id_number: "",
        county: "",
        constituency: "",
        ward: "",
        membership_category: "ordinary",
      });
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Join CCU - Membership Registration | Chama Cha Uzalendo Kenya</title>
        <meta name="description" content="Become a member of Chama Cha Uzalendo. Register online, learn about membership categories, benefits, and how to join the patriotic movement." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Join Chama Cha Uzalendo
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Be part of the movement for a better Kenya. Your voice matters. Your membership counts.
            </p>
          </div>
        </section>

        {/* Membership Categories */}
        <section className="container-section">
          <div className="text-center mb-12">
            <h2 className="section-title">Membership Categories</h2>
            <p className="section-subtitle mx-auto">
              Choose the membership category that best suits your level of involvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {membershipCategories.map((category) => (
              <div
                key={category.value}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <p className="font-bold text-primary mb-4">{category.fee}</p>
                <ul className="space-y-2">
                  {category.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="section-title">Register Online</h2>
                <p className="section-subtitle mx-auto">
                  Fill in your details below to register as a CCU member.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg">
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        required
                        placeholder="John Kamau Mwangi"
                      />
                    </div>
                    <div>
                      <Label htmlFor="id_number">ID Number *</Label>
                      <Input
                        id="id_number"
                        value={formData.id_number}
                        onChange={(e) => setFormData({ ...formData, id_number: e.target.value })}
                        required
                        placeholder="12345678"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        placeholder="0712345678"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="county">County *</Label>
                    <Select
                      value={formData.county}
                      onValueChange={(value) => setFormData({ ...formData, county: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your county" />
                      </SelectTrigger>
                      <SelectContent>
                        {counties.map((county) => (
                          <SelectItem key={county} value={county}>{county}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="constituency">Constituency *</Label>
                      <Input
                        id="constituency"
                        value={formData.constituency}
                        onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                        required
                        placeholder="Your constituency"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ward">Ward *</Label>
                      <Input
                        id="ward"
                        value={formData.ward}
                        onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                        required
                        placeholder="Your ward"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="membership_category">Membership Category *</Label>
                    <Select
                      value={formData.membership_category}
                      onValueChange={(value) => setFormData({ ...formData, membership_category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ordinary">Ordinary Member - KES 200/year</SelectItem>
                        <SelectItem value="associate">Associate Member - KES 100/year</SelectItem>
                        <SelectItem value="life">Life Member - KES 10,000 (one-time)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Registration"
                    )}
                  </Button>
                </div>
              </form>

              <div className="mt-8 text-center text-muted-foreground">
                <p className="text-sm">
                  You can also register in person at any CCU county office or during party events.
                  <br />
                  For assistance, call <strong>+254 721 280 573</strong> or email <strong>info@ccuparty.co.ke</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
