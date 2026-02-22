import { CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const accepted = [
  "Medicare",
  "Medicaid",
  "Blue Cross Blue Shield",
  "Aetna",
  "Cigna",
  "UnitedHealthcare",
  "And many more — call to verify",
];

const Insurance = () => (
  <PageLayout>
    <Helmet>
      <title>Insurance & Payment Information | DeluxMed Health Baltimore</title>
      <meta name="description" content="Insurance and payment information for DeluxMed Primary & Behavioral Health Services. We accept Medicare, Medicaid, and major insurance plans. Call to verify your coverage." />
      <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://deluxmed.com"}/insurance-payment`} />
    </Helmet>

    <section className="bg-section-alt">
      <div className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Insurance &amp; Payment Information</h1>
        <p className="text-muted-foreground max-w-xl">We accept a wide range of insurance plans and are committed to making healthcare accessible and affordable.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Accepted Insurance Plans</h2>
          <p className="text-muted-foreground mb-4">We work with many major insurance carriers. If your plan is not listed below, please contact us—we're happy to verify your coverage.</p>
          <ul className="space-y-3">
            {accepted.map((plan) => (
              <li key={plan} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-trust shrink-0" />
                <span className="text-foreground">{plan}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-semibold font-sans text-foreground mb-2">Verify Your Insurance</h3>
            <p className="text-sm text-muted-foreground mb-4">Call our office to verify your insurance coverage before your appointment. Our team will help you understand your benefits and any out-of-pocket costs.</p>
            <Button asChild>
              <a href="tel:+12407808930">Call to Verify: (240) 780-8930</a>
            </Button>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-semibold font-sans text-foreground mb-2">Self-Pay Options</h3>
            <p className="text-sm text-muted-foreground">For patients without insurance, we offer competitive self-pay rates. Contact us to learn more about our pricing and payment plans.</p>
          </div>
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-semibold font-sans text-foreground mb-2">Telehealth Coverage</h3>
            <p className="text-sm text-muted-foreground">Most insurance plans now cover telehealth visits at the same rate as in-person appointments. We can help verify your telehealth benefits.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="container py-14 text-center">
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Questions About Billing?</h2>
      <p className="text-muted-foreground mb-6">Our team is happy to help with insurance questions and payment arrangements.</p>
      <Button asChild size="lg"><Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Contact Us</Link></Button>
    </section>
  </PageLayout>
);

export default Insurance;
