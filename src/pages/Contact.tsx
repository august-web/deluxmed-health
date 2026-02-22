import { Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const Contact = () => (
  <PageLayout>
    <Helmet>
      <title>Contact & Schedule Appointment | DeluxMed Health Baltimore</title>
      <meta name="description" content="Schedule an appointment at DeluxMed Primary & Behavioral Health Services in Baltimore, MD. Call (240) 780-8930 or request an appointment online. In-person and telehealth available." />
      <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://deluxmed.com"}/contact`} />
    </Helmet>

    <section className="bg-primary">
      <div className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-3">Contact &amp; Schedule Appointment</h1>
        <p className="text-primary-foreground/80 max-w-xl">We're here to help. Reach out to schedule an appointment, ask a question, or verify your insurance coverage.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold font-sans text-foreground">Phone</h3>
                <a href="tel:+12407808930" className="text-primary hover:underline">Phone: (240) 780-8930</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold font-sans text-foreground">Address</h3>
                <address className="not-italic text-muted-foreground">
                  1503 E North Ave<br />Baltimore, MD 21213
                </address>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold font-sans text-foreground">Hours</h3>
                <p className="text-muted-foreground">Mondays @ 9AM - 6PM to Fridays @ 10AM - 5PM</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="tel:+12407808930"><Phone className="h-4 w-4 mr-2" />Call Now</a>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6 md:p-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-2">Request an Appointment</h2>
          <p className="text-sm text-muted-foreground mb-6">Fill out the form below and our team will contact you to confirm your appointment.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">First Name</label>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm" required />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-1.5">Last Name</label>
                <input type="text" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm" required />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Phone Number</label>
              <input type="tel" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Preferred Service</label>
              <select className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm">
                <option>Primary Care</option>
                <option>Behavioral Health</option>
                <option>Telehealth</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-1.5">Message (Optional)</label>
              <textarea rows={3} className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Calendar className="h-4 w-4 mr-2" />Request Appointment
            </Button>
            <p className="text-xs text-muted-foreground text-center">Your information is protected under our <a href="/privacy-policy" className="underline">HIPAA Privacy Policy</a>.</p>
          </form>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contact;
