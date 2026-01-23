import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Heart, CreditCard, Smartphone, Building, Shield } from "lucide-react";

const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

export default function Donate() {
  return (
    <>
      <Helmet>
        <title>Donate to CCU - Support the Patriotic Movement | Chama Cha Uzalendo</title>
        <meta name="description" content="Support Chama Cha Uzalendo with your donation. Help fund campaigns, community programs, and the fight for a better Kenya." />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="bg-secondary pattern-overlay py-20">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-16 h-16 mx-auto text-secondary-foreground mb-4" />
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4">
              Support Our Cause
            </h1>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto">
              Your contribution helps us build a stronger, more united Kenya. Every shilling counts.
            </p>
          </div>
        </section>

        {/* Donation Options */}
        <section className="container-section">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Make a Donation</h2>
              <p className="section-subtitle mx-auto">
                Choose how you'd like to support CCU's mission for a better Kenya.
              </p>
            </div>

            {/* Amount Selection */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6">Select Amount (KES)</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 border-2 border-border rounded-lg font-bold hover:border-primary hover:bg-primary/5 transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    {amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground">Or enter custom amount:</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="flex-1 max-w-xs px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                />
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6">Payment Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <button className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left">
                  <Smartphone className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">M-Pesa</h4>
                  <p className="text-muted-foreground text-sm">Pay via M-Pesa Paybill</p>
                </button>
                <button className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left">
                  <CreditCard className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Card Payment</h4>
                  <p className="text-muted-foreground text-sm">Visa, Mastercard accepted</p>
                </button>
                <button className="p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors text-left">
                  <Building className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-bold mb-1">Bank Transfer</h4>
                  <p className="text-muted-foreground text-sm">Direct bank deposit</p>
                </button>
              </div>
            </div>

            {/* M-Pesa Details */}
            <div className="bg-muted rounded-2xl p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2">
                <Smartphone className="w-6 h-6 text-primary" />
                M-Pesa Paybill Details
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-muted-foreground mb-1">Paybill Number</p>
                  <p className="text-2xl font-bold font-mono">XXXXXX</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Account Name</p>
                  <p className="text-2xl font-bold">CCU Donations</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Paybill integration coming soon. Contact us for donation assistance.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="donate" size="xl" className="mb-4">
                <Heart className="w-5 h-5 mr-2" />
                Proceed to Donate
              </Button>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Your donation is secure and goes directly to party activities
              </p>
            </div>
          </div>
        </section>

        {/* What Your Donation Supports */}
        <section className="bg-primary pattern-overlay py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                What Your Donation Supports
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { emoji: "📢", title: "Campaigns", description: "Voter outreach, rallies, and political campaigns across Kenya" },
                { emoji: "🎓", title: "Training", description: "Leadership development and civic education programs" },
                { emoji: "🤝", title: "Community", description: "Grassroots programs and community development initiatives" },
              ].map((item) => (
                <div key={item.title} className="text-center text-primary-foreground">
                  <span className="text-5xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
