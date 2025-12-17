import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-center mb-12">
              Last updated: December 2024
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By downloading, installing, or using the Barcode Scanner & Maker application 
                  ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do 
                  not agree to these Terms, do not use the App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TopOctagon Technologies grants you a limited, non-exclusive, non-transferable, 
                  revocable license to use the App for personal, non-commercial purposes in 
                  accordance with these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree not to use the App to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Generate fraudulent or misleading barcodes</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Distribute malware or harmful content</li>
                  <li>Reverse engineer or modify the App</li>
                  <li>Use the App for any illegal purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The App is provided "as is" without warranties of any kind, either express or 
                  implied. We do not guarantee that the App will be error-free or uninterrupted. 
                  Scanning accuracy may vary based on barcode quality, lighting conditions, and 
                  device capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, TopOctagon Technologies shall not be 
                  liable for any indirect, incidental, special, consequential, or punitive damages 
                  resulting from your use of or inability to use the App.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of the App after changes constitutes 
                  acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, contact us at:{" "}
                  <a 
                    href="mailto:topoctagontechnologies@gmail.com" 
                    className="text-accent hover:underline"
                  >
                    topoctagontechnologies@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
