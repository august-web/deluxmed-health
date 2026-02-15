import { Link } from "react-router-dom";
import { Award, BookOpen, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const credentials = [
  "Doctor of Nursing Practice (DNP) – Candidate",
  "Master of Science in Nursing (MSN)",
  "Master of Public Health (MPH)",
  "Family Nurse Practitioner – Board Certified (FNP-BC)",
  "Psychiatric Mental Health Nurse Practitioner – Certified (PMHNP-C)",
];

const expertise = [
  "Integrated primary and psychiatric care",
  "Chronic disease management",
  "Psychiatric evaluation and medication management",
  "Preventive healthcare and wellness",
  "Trauma-informed care",
  "Healthcare systems leadership",
  "Quality improvement in clinical practice",
];

const ProviderProfile = () => (
  <PageLayout>
    <Helmet>
      <title>Doreen Ackom-Owusu, DNP(c), MSN, FNP-BC, PMHNP-C | DeluxMed</title>
      <meta name="description" content="Meet Doreen Ackom-Owusu, a board-certified family and psychiatric nurse practitioner at DeluxMed in Baltimore. Dual-certified in primary care and mental health with advanced clinical expertise." />
    </Helmet>

    <section className="bg-section-alt">
      <div className="container py-14 md:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-primary mb-3">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold font-sans uppercase tracking-wider">Our Provider</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Doreen Ackom-Owusu
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            DNP(c), MSN, MPH, FNP-BC, PMHNP-C
          </p>
        </div>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">About Doreen</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Doreen Ackom-Owusu is a dual board-certified nurse practitioner specializing in both family medicine and psychiatric mental health. With advanced training in primary care and behavioral health, she offers a truly integrated approach to patient care.
            </p>
            <p>
              Her clinical practice bridges the gap between physical and mental health—ensuring patients receive comprehensive, coordinated treatment. Doreen is passionate about chronic disease management, preventive care, and removing barriers to mental health services.
            </p>
            <p>
              Beyond clinical care, Doreen brings leadership experience in healthcare systems and quality improvement, with a focus on advancing health equity and patient outcomes across diverse communities.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-display font-bold text-foreground">Education &amp; Credentials</h2>
            </div>
            <ul className="space-y-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-trust shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Areas of Expertise</h2>
            <ul className="space-y-2">
              {expertise.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-primary">
      <div className="container py-14 text-center text-primary-foreground">
        <h2 className="text-2xl font-display font-bold mb-4">Schedule an Appointment with Doreen</h2>
        <p className="opacity-80 mb-6 max-w-lg mx-auto">Experience compassionate, expert care. Book your visit—in person or via telehealth.</p>
        <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Schedule Now</Link>
        </Button>
      </div>
    </section>
  </PageLayout>
);

export default ProviderProfile;
