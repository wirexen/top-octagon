import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Scan, QrCode, History, Share2, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroPhone from "@/assets/hero-phone.png";
import barcodePattern from "@/assets/barcode-pattern.png";
import scanningAction from "@/assets/scanning-action.png";

const features = [
  {
    icon: Scan,
    title: "Fast Scanning",
    description: "Instantly scan any barcode or QR code using your device camera with high accuracy recognition.",
  },
  {
    icon: QrCode,
    title: "Create Barcodes",
    description: "Generate QR codes and barcodes for URLs, text, contacts, WiFi, and more in seconds.",
  },
  {
    icon: History,
    title: "Scan History",
    description: "Keep track of all your scanned codes with automatic history saving and search functionality.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share scanned results or generated codes instantly via any app on your device.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays on your device. No cloud storage, no tracking, complete privacy.",
  },
  {
    icon: Zap,
    title: "Lightweight",
    description: "Optimized app size with minimal battery usage. Works offline without internet.",
  },
];

const supportedFormats = [
  "QR Code", "Code 128", "Code 39", "EAN-13", "EAN-8", 
  "UPC-A", "UPC-E", "ITF", "Codabar", "Data Matrix", "PDF417"
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Barcode Scanner & Maker
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                The fastest and most reliable barcode scanner and generator for Android. 
                Scan any code instantly or create your own in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Button variant="accent" size="lg" asChild>
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get it on Google Play
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <img 
                src={heroPhone} 
                alt="TopOctagon barcode scanner app interface showing QR code scanning" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Barcode Pattern Banner */}
      <section className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={barcodePattern} 
          alt="Various barcodes and QR codes pattern" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for barcode scanning and creation in one simple app.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-all hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Formats</h2>
            <p className="text-muted-foreground">
              Comprehensive support for all major barcode standards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {supportedFormats.map((format) => (
              <span
                key={format}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with Image */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={scanningAction} 
                alt="Person scanning a barcode with smartphone in retail store" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">How It Works</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Open the App</h3>
                    <p className="text-sm text-muted-foreground">
                      Launch the app and choose to scan or create a barcode.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scan or Generate</h3>
                    <p className="text-sm text-muted-foreground">
                      Point your camera at any code or enter data to generate one.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Use & Share</h3>
                    <p className="text-sm text-muted-foreground">
                      View results, copy to clipboard, or share with any app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Download the app now and start scanning barcodes in seconds.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Free on Google Play
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
