import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => (
  <PageLayout>
    <Helmet>
      <title>Privacy Policy & HIPAA Notice | DeluxMed Health</title>
      <meta name="description" content="Privacy policy and HIPAA notice for DeluxMed Primary & Behavioral Health Services. Learn how we protect your personal health information." />
      <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://deluxmed.com"}/privacy-policy`} />
    </Helmet>

    <section className="bg-section-alt">
      <div className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Privacy Policy &amp; HIPAA Notice</h1>
        <p className="text-muted-foreground max-w-xl">Your privacy is important to us. This policy explains how we collect, use, and protect your personal health information.</p>
      </div>
    </section>

    <section className="container py-14 md:py-18">
      <div className="max-w-3xl prose-sm">
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Notice of Privacy Practices</h2>
            <p>DeluxMed Primary &amp; Behavioral Health Services, operated by DeluxMed Health Group, LLC, is committed to protecting the privacy and security of your protected health information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA).</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Information We Collect</h2>
            <p>We may collect personal health information including but not limited to: name, address, date of birth, contact information, insurance details, medical history, treatment records, and billing information.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">How We Use Your Information</h2>
            <p>Your PHI may be used for treatment, payment, and healthcare operations as permitted by HIPAA. This includes coordinating your care, processing insurance claims, and improving our healthcare services.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Right to access your medical records</li>
              <li>Right to request corrections to your records</li>
              <li>Right to request restrictions on how your information is used</li>
              <li>Right to receive an accounting of disclosures</li>
              <li>Right to receive a copy of this notice</li>
              <li>Right to file a complaint if you believe your rights have been violated</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Telehealth Privacy</h2>
            <p>All telehealth visits are conducted through HIPAA-compliant video platforms with end-to-end encryption. We do not record telehealth sessions without your express written consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Website Data</h2>
            <p>This website may collect non-identifiable usage data such as page visits and device type for the purpose of improving user experience. This data is not linked to your medical records.</p>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground mb-3">Contact Information</h2>
            <p>For questions about this privacy policy or to exercise your rights regarding your health information, please contact us:</p>
            <address className="not-italic mt-2">
              <p className="font-semibold text-foreground">DeluxMed Primary &amp; Behavioral Health Services</p>
              <p>1503 E North Ave<br />Baltimore, MD 21213</p>
              <p><a href="tel:+12407808930" className="text-primary hover:underline">Phone: (240) 780-8930</a></p>
            </address>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-xs">DeluxMed Primary &amp; Behavioral Health Services is operated by DeluxMed Health Group, LLC.</p>
            <p className="text-xs mt-1">This notice is effective as of January 1, 2025, and applies to all patients and visitors of DeluxMed Health Group, LLC.</p>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default PrivacyPolicy;
