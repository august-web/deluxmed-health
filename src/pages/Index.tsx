import { Link } from "react-router-dom";
import { Shield, Award, CreditCard, Heart, Brain, Activity, Stethoscope, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import heroBg from "@/assets/hero-bg.jpg";
import { Helmet } from "react-helmet-async";

const conditions = [
  { icon: Activity, label: "Hypertension Management" },
  { icon: Heart, label: "Diabetes Management" },
  { icon: Activity, label: "Asthma Care" },
  { icon: Heart, label: "Heart Disease Management" },
  { icon: Activity, label: "High Cholesterol Care" },
  { icon: Brain, label: "Depression" },
  { icon: Brain, label: "Anxiety" },
  { icon: Brain, label: "PTSD" },
  { icon: Brain, label: "Mood Disorders" },
];

const Index = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>DeluxMed Primary & Behavioral Health | Baltimore, MD</title>
        <meta name="description" content="Integrated primary care and behavioral health services in Baltimore, Maryland. Board-certified nurse practitioner offering in-person and secure telehealth visits. Schedule your appointment today." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "DeluxMed Primary & Behavioral Health Services",
          "legalName": "DeluxMed Health Group, LLC",
          "telephone": "(240) 780-8930",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1503 E North Ave",
            "addressLocality": "Baltimore",
            "addressRegion": "MD",
            "postalCode": "21213",
            "addressCountry": "US"
          },
          "url": "https://deluxmed.com",
          "medicalSpecialty": ["PrimaryCare", "Psychiatric"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Healthcare Services",
            "itemListElement": [
              { "@type": "MedicalProcedure", "name": "Primary Care" },
              { "@type": "MedicalProcedure", "name": "Behavioral Health" },
              { "@type": "MedicalProcedure", "name": "Telehealth" }
            ]
          }
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Modern medical clinic interior" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative container py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-4 animate-fade-in">
              Whole-Person Primary &amp; Behavioral Healthcare in Baltimore, Maryland
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              Secure Telehealth &amp; In-Person Services
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button asChild size="lg">
                <Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Schedule Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <a href="tel:+12407808930"><Phone className="h-4 w-4 mr-2" />Call Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/insurance-payment">Verify Insurance</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-card border-b border-border">
        <div className="container py-6 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Shield className="h-5 w-5 text-trust" /> HIPAA-Compliant</span>
          <span className="flex items-center gap-2"><Award className="h-5 w-5 text-primary" /> Board-Certified Nurse Practitioner</span>
          <span className="flex items-center gap-2"><CreditCard className="h-5 w-5 text-accent" /> Insurance Accepted</span>
        </div>
      </section>

      {/* Integrated Care */}
      <section className="bg-section-alt">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Integrated Primary &amp; Behavioral Healthcare
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At DeluxMed, we believe your physical and mental health are deeply connected. Our integrated care model addresses the whole person—combining primary care with behavioral health support so you receive coordinated, comprehensive treatment under one roof.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Chronic Disease Management", desc: "Personalized plans for hypertension, diabetes, and more." },
              { icon: Brain, title: "Anxiety Treatment", desc: "Evidence-based approaches to help you manage anxiety." },
              { icon: Heart, title: "Depression Treatment", desc: "Compassionate care with medication management and support." },
              { icon: Activity, title: "Virtual Primary Care", desc: "Convenient telehealth visits from the comfort of home." },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground font-sans mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-10">
          Conditions We Treat
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {conditions.map((c) => (
            <div key={c.label} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
              <CheckCircle2 className="h-5 w-5 text-trust shrink-0" />
              <span className="text-sm font-medium text-foreground">{c.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-primary">
        <div className="container py-14 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Care Designed to Be Accessible
          </h2>
          <p className="max-w-xl mx-auto opacity-90 leading-relaxed">
            Our primary location is in Baltimore, Maryland. Through our secure telehealth platform, we also serve patients throughout Maryland—bringing quality healthcare wherever you are.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <Link to="/telehealth-maryland">Learn About Telehealth</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
          Ready to Take the Next Step?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Whether you need a routine check-up or behavioral health support, we're here for you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><Link to="/contact">Schedule Appointment</Link></Button>
          <Button asChild variant="outline" size="lg"><a href="tel:+12407808930">Call (240) 780-8930</a></Button>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
