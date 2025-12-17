import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: December 2024
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TopOctagon Technologies ("we," "our," or "us") operates the Barcode Scanner & Maker 
                  mobile application (the "App"). This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you use our App. Please read this 
                  Privacy Policy carefully. By using the App, you agree to the collection and use of 
                  information in accordance with this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                <h3 className="text-lg font-medium mb-2">Information You Provide</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The App is designed to work without requiring personal information. We do not 
                  require you to create an account or provide personal details to use the core 
                  functionality of the App.
                </p>
                
                <h3 className="text-lg font-medium mb-2">Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect certain information automatically when you use the App, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>Device information (device type, operating system version)</li>
                  <li>App usage statistics (features used, session duration)</li>
                  <li>Crash reports and performance data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Camera Permission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App requires camera access to scan barcodes. Camera access is used solely for 
                  the purpose of scanning barcodes and QR codes. We do not store, transmit, or share 
                  any images or video captured by your camera. All camera processing happens locally 
                  on your device.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All barcode data, scan history, and generated codes are stored locally on your 
                  device. We do not upload or sync this data to any external servers. This means:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>Your scan history remains private on your device</li>
                  <li>Generated barcodes are stored only on your device</li>
                  <li>No cloud backup or synchronization of your data</li>
                  <li>Uninstalling the App will delete all locally stored data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App may use third-party services that may collect information. These services 
                  have their own privacy policies addressing how they use such information:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>Google Play Services</li>
                  <li>Google Analytics for Firebase (for anonymous usage analytics)</li>
                  <li>Firebase Crashlytics (for crash reporting)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App may display advertisements provided by third-party advertising networks. 
                  These networks may use cookies and similar technologies to collect information 
                  about your device and app usage to provide personalized advertising. You can opt 
                  out of personalized advertising in your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our App is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or 
                  guardian and believe your child has provided us with personal information, 
                  please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect the 
                  information we process. However, no method of electronic transmission or storage 
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal 
                  information, including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-muted-foreground">
                  <li>The right to access information we have about you</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to opt out of certain data processing</li>
                  <li>The right to data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  updated" date. You are advised to review this Privacy Policy periodically for 
                  any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
                </p>
                <div className="mt-4 p-4 bg-secondary rounded-lg">
                  <p className="font-medium">TopOctagon Technologies</p>
                  <p className="text-muted-foreground">
                    Email:{" "}
                    <a 
                      href="mailto:topoctagontechnologies@gmail.com" 
                      className="text-accent hover:underline"
                    >
                      topoctagontechnologies@gmail.com
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Website:{" "}
                    <a 
                      href="https://topoctagon.space" 
                      className="text-accent hover:underline"
                    >
                      topoctagon.space
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
