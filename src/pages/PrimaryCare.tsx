import { Link } from "react-router-dom";
import { CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const services = [
  "Preventive care and wellness visits",
  "Annual physical exams",
  "Chronic disease management",
  "Medication management",
  "Acute illness care",
  "Women's health",
  "Men's health",
  "Lab work and diagnostics",
];

const chronic = [
  "Hypertension (high blood pressure)",
  "Diabetes (Type 1 & Type 2)",
  "Asthma",
  "Heart disease",
  "High cholesterol",
  "Thyroid disorders",
];

const PrimaryCare = () => (
  <PageLayout>
    <Helmet>
      <title>Primary Care in Baltimore, MD | DeluxMed Health</title>
      <meta name="description" content="Comprehensive primary care in Baltimore. Preventive care, chronic disease management, annual physicals, and acute illness treatment. In-person and telehealth appointments available." />
      <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://deluxmed.com"}/primary-care-baltimore`} />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Primary Care",
        "areaServed": { "@type": "AdministrativeArea", "name": "Baltimore, MD" },
        "provider": { "@type": "MedicalOrganization", "name": "DeluxMed Health Group, LLC" },
        "url": `${(import.meta.env.VITE_SITE_URL || "https://deluxmed.com")}/primary-care-baltimore`
      })}</script>
    </Helmet>

    <section className="bg-primary">
      <div className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">Primary Care in Baltimore</h1>
        <p className="text-primary-foreground/80 max-w-xl">Comprehensive, patient-centered primary care services for adults. From preventive wellness to chronic condition management, we're your ongoing health partner.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Our Primary Care Services</h2>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-trust shrink-0" />
                <span className="text-foreground">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Chronic Disease Management</h2>
          <p className="text-muted-foreground mb-4">We develop personalized treatment plans for ongoing conditions, helping you manage your health with confidence.</p>
          <ul className="space-y-3">
            {chronic.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-section-alt">
      <div className="container py-14">
        <h2 className="text-2xl font-display font-bold text-foreground mb-4">Telehealth-Integrated Primary Care</h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Can't make it to our Baltimore office? Many primary care services are available through our HIPAA-compliant telehealth platform. Follow up on lab results, manage medications, and receive wellness counseling—all from the comfort of your home.
        </p>
        <Button asChild className="mt-6">
          <Link to="/telehealth-maryland">Learn About Telehealth</Link>
        </Button>
      </div>
    </section>

    <section className="container py-14 text-center">
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Schedule Your Primary Care Visit</h2>
      <p className="text-muted-foreground mb-6">Take the first step toward better health today.</p>
      <Button asChild size="lg"><Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Book Appointment</Link></Button>
    </section>
  </PageLayout>
);

export default PrimaryCare;
