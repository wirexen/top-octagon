import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center bg-primary rounded">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="currentColor">
                  <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18l6.35 3.53L12 11.24 5.65 7.71 12 4.18zM5 16.29V9.04l6 3.33v7.25l-6-3.33zm8 3.33v-7.25l6-3.33v7.25l-6 3.33z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold">TopOctagon</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Professional barcode scanner and generator app for Android. Scan, create, and manage barcodes with ease.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/features" className="hover:text-accent transition-colors">Features</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>2024 TopOctagon Technologies. All rights reserved.</p>
          <a 
            href="mailto:topoctagontechnologies@gmail.com" 
            className="hover:text-accent transition-colors"
          >
            topoctagontechnologies@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
