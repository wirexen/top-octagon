import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Scan, QrCode, History, Share2, Shield, Zap, 
  Flashlight, Copy, Search, Download, Smartphone, Clock 
} from "lucide-react";
import featuresHero from "@/assets/features-hero.png";

const allFeatures = [
  {
    icon: Scan,
    title: "Lightning Fast Scanning",
    description: "Our advanced scanning engine recognizes barcodes instantly. Just point your camera and get results in milliseconds. Works even with damaged or partially obscured codes.",
  },
  {
    icon: QrCode,
    title: "Barcode Generator",
    description: "Create professional QR codes and barcodes for any purpose. Generate codes for URLs, text, phone numbers, emails, WiFi networks, contacts, and more.",
  },
  {
    icon: Flashlight,
    title: "Built-in Flashlight",
    description: "Scan barcodes in low light conditions with the integrated flashlight feature. Perfect for warehouses, stores, or any dimly lit environment.",
  },
  {
    icon: History,
    title: "Complete Scan History",
    description: "Never lose a scanned code. All your scans are automatically saved with timestamps, making it easy to find and reference past scans.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Quickly find any code in your history with powerful search. Filter by date, type, or content to locate exactly what you need.",
  },
  {
    icon: Copy,
    title: "One-Tap Copy",
    description: "Copy scanned content to your clipboard with a single tap. Instantly paste URLs, text, or any data wherever you need it.",
  },
  {
    icon: Share2,
    title: "Universal Sharing",
    description: "Share scanned results or generated codes through any app on your device. Send via messaging, email, social media, or cloud storage.",
  },
  {
    icon: Download,
    title: "Save & Export",
    description: "Download generated barcodes as high-resolution images. Perfect for printing, sharing, or using in documents and marketing materials.",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description: "Your data never leaves your device. No cloud uploads, no tracking, no analytics. Complete privacy for all your scanning activities.",
  },
  {
    icon: Zap,
    title: "Offline Mode",
    description: "Full functionality without internet connection. Scan and create barcodes anywhere, anytime, even without cellular or WiFi access.",
  },
  {
    icon: Smartphone,
    title: "Clean Interface",
    description: "Simple, intuitive design that anyone can use. No clutter, no confusing options. Just point, scan, and get results.",
  },
  {
    icon: Clock,
    title: "Batch Scanning",
    description: "Scan multiple barcodes in rapid succession. Perfect for inventory management, product cataloging, or any high-volume scanning task.",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={featuresHero} 
          alt="QR codes pattern background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto px-4">
              Discover all the powerful features that make our barcode scanner 
              the best choice for Android users.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Experience all these features and more
            </p>
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on Google Play
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
