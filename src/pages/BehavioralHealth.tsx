import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const services = [
  "Anxiety treatment",
  "Depression treatment",
  "PTSD treatment",
  "Mood disorders",
  "Trauma-informed care",
  "Psychiatric medication management",
  "Teletherapy and virtual behavioral health",
];

const BehavioralHealth = () => (
  <PageLayout>
    <Helmet>
      <title>Behavioral Health & Mental Health Services Baltimore | DeluxMed</title>
      <meta name="description" content="Mental health services in Baltimore including anxiety, depression, PTSD, and mood disorder treatment. Board-certified psychiatric nurse practitioner. In-person and secure telehealth available." />
    </Helmet>

    <section className="bg-accent">
      <div className="container py-14 md:py-20">
        <Brain className="h-10 w-10 text-accent-foreground/80 mb-4" />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-3">Mental Health Services in Baltimore</h1>
        <p className="text-accent-foreground/80 max-w-xl">Compassionate, evidence-based behavioral healthcare. We provide psychiatric evaluation, medication management, and ongoing support for a range of mental health conditions.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <h2 className="text-2xl font-display font-bold text-foreground mb-6">Behavioral Health Services</h2>
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {services.map((s) => (
          <div key={s} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border">
            <CheckCircle2 className="h-5 w-5 text-trust shrink-0" />
            <span className="text-foreground text-sm font-medium">{s}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-section-alt">
      <div className="container py-14">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">Our Approach to Behavioral Health</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed mb-4">
          Mental health is an essential part of overall well-being. Our integrated model means your behavioral health provider works alongside your primary care—ensuring coordinated treatment that considers the full picture of your health.
        </p>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Whether you're experiencing anxiety, navigating depression, or managing trauma, we offer a safe, judgment-free environment with flexible appointment options, including secure telehealth visits throughout Maryland.
        </p>
      </div>
    </section>

    <section className="container py-14 text-center">
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Start Your Mental Health Journey</h2>
      <p className="text-muted-foreground mb-6">You don't have to face it alone. Reach out and schedule a confidential consultation.</p>
      <Button asChild size="lg"><Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Schedule Appointment</Link></Button>
    </section>
  </PageLayout>
);

export default BehavioralHealth;
