import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Helmet } from "react-helmet-async";

const posts = [
  {
    slug: "understanding-hypertension",
    category: "Chronic Disease Management",
    title: "Understanding Hypertension: What Every Patient Should Know",
    excerpt: "High blood pressure often has no symptoms, but left untreated it can lead to serious health complications. Learn about prevention, monitoring, and management strategies.",
    link: "/primary-care-baltimore",
  },
  {
    slug: "anxiety-vs-normal-worry",
    category: "Mental Health Education",
    title: "Anxiety vs. Normal Worry: When to Seek Professional Help",
    excerpt: "Everyone experiences worry, but when does it become something more? Discover the signs that it may be time to talk to a behavioral health provider.",
    link: "/behavioral-health-baltimore",
  },
  {
    slug: "benefits-of-preventive-care",
    category: "Preventive Care",
    title: "Why Preventive Care Visits Matter More Than You Think",
    excerpt: "Routine wellness visits are your best defense against chronic disease. Learn what to expect and why annual check-ups should be a priority.",
    link: "/primary-care-baltimore",
  },
  {
    slug: "telehealth-guide",
    category: "Telehealth & Digital Health",
    title: "Your Complete Guide to Telehealth: What to Expect",
    excerpt: "Virtual visits are convenient, secure, and effective. Here's everything you need to know about getting started with telehealth.",
    link: "/telehealth-maryland",
  },
];

const Blog = () => (
  <PageLayout>
    <Helmet>
      <title>Health Blog & Resources | DeluxMed Primary & Behavioral Health</title>
      <meta name="description" content="Health education resources from DeluxMed. Articles on chronic disease management, mental health, preventive care, and telehealth. Stay informed about your health." />
      <link rel="canonical" href={`${import.meta.env.VITE_SITE_URL || "https://deluxmed.com"}/blog`} />
    </Helmet>

    <section className="bg-section-alt">
      <div className="container py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">Blog &amp; Resources</h1>
        <p className="text-muted-foreground max-w-xl">Stay informed with evidence-based health education from our team. We publish new resources regularly to help you make confident health decisions.</p>
      </div>
    </section>

    <section className="container py-14">
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.slug} className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow flex flex-col">
            <span className="text-xs font-semibold font-sans uppercase tracking-wider text-primary mb-2">{post.category}</span>
            <h2 className="text-lg font-display font-bold text-foreground mb-2">{post.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.excerpt}</p>
            <Link to={post.link} className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-4">
              Read more <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Blog;
