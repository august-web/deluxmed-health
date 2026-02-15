import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, Monitor, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Convenient visits from home or office",
  "HIPAA-compliant video platform",
  "Secure patient portal for records",
  "Online scheduling 24/7",
  "Virtual chronic disease management",
  "Virtual behavioral therapy sessions",
  "Prescription and medication management",
  "Follow-up and lab review appointments",
];

const Telehealth = () => (
  <PageLayout>
    <Helmet>
      <title>Telehealth Services Maryland | Virtual Care | DeluxMed</title>
      <meta name="description" content="HIPAA-compliant telehealth services throughout Maryland. Virtual primary care, behavioral health, and chronic disease management. Secure video visits from the comfort of your home." />
    </Helmet>

    <section className="bg-primary">
      <div className="container py-14 md:py-20">
        <Monitor className="h-10 w-10 text-primary-foreground/80 mb-4" />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">Telehealth Services in Maryland</h1>
        <p className="text-primary-foreground/80 max-w-xl">Access quality healthcare from anywhere in Maryland. Our secure telehealth platform brings primary care and behavioral health services directly to you.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">How Telehealth Works</h2>
          <ol className="space-y-4">
            {[
              { step: "1", title: "Schedule Online", desc: "Book your telehealth appointment through our website or by calling our office." },
              { step: "2", title: "Receive a Secure Link", desc: "Before your appointment, you'll receive a link to our HIPAA-compliant video platform." },
              { step: "3", title: "Meet Your Provider", desc: "Connect with your provider for a face-to-face virtual visit—just like an in-person appointment." },
              { step: "4", title: "Get Your Plan", desc: "Receive prescriptions, referrals, or follow-up care instructions, all managed through your secure portal." },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-semibold font-sans text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Telehealth Benefits</h2>
          <ul className="space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-trust shrink-0" />
                <span className="text-foreground text-sm">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-section-alt">
      <div className="container py-14">
        <div className="flex items-center gap-3 mb-6">
          <Lock className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-display font-bold text-foreground">Security &amp; HIPAA Compliance</h2>
        </div>
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Your privacy is our priority. Our telehealth platform uses end-to-end encryption and complies with all HIPAA regulations to protect your personal health information. All video visits are conducted through a secure, dedicated healthcare platform—never through consumer video apps.
        </p>
      </div>
    </section>

    {/* FAQ */}
    <section className="container py-14">
      <h2 className="text-2xl font-display font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="max-w-2xl mx-auto">
        <AccordionItem value="how">
          <AccordionTrigger className="font-sans">How does telehealth work?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Telehealth allows you to see your healthcare provider via secure video from any device with an internet connection. You'll receive a private link before your appointment. During the visit, your provider can evaluate symptoms, prescribe medications, review lab results, and create treatment plans—just like an in-office visit.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="secure">
          <AccordionTrigger className="font-sans">Is telehealth secure?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Yes. We use a HIPAA-compliant platform with end-to-end encryption. Your health information is protected with the same security standards as in-person visits. We never use consumer video conferencing tools.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="benefits">
          <AccordionTrigger className="font-sans">What are the benefits of telemedicine?</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Telemedicine eliminates travel time, reduces exposure to illness, and makes healthcare more accessible. It's especially beneficial for follow-up appointments, medication management, and behavioral health visits. Most insurance plans cover telehealth visits.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="container py-14 text-center">
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">Schedule a Virtual Visit</h2>
      <p className="text-muted-foreground mb-6">Healthcare on your terms. Book a telehealth appointment today.</p>
      <Button asChild size="lg"><Link to="/contact"><Calendar className="h-4 w-4 mr-2" />Book Telehealth Visit</Link></Button>
    </section>
  </PageLayout>
);

export default Telehealth;
