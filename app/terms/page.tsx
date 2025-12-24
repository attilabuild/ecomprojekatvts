import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using CodeAcademy (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use of the Service</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Eligibility</h3>
            <p className="mb-4">
              You must be at least 13 years old to use our Service. By using the Service, you represent and warrant that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Account Registration</h3>
            <p className="mb-4">
              To access certain features, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your information as necessary</li>
              <li>Maintain the security of your password</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Course Access and License</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 License Grant</h3>
            <p className="mb-4">
              Upon enrollment in a course, we grant you a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial use.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Restrictions</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reproduce, redistribute, or resell course content</li>
              <li>Share your account credentials with others</li>
              <li>Use course content for commercial purposes</li>
              <li>Remove any copyright or proprietary notices</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Pricing</h3>
            <p className="mb-4">
              Course prices are displayed on our website. We reserve the right to change prices at any time, but price changes will not affect courses you have already purchased.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Payment Processing</h3>
            <p>
              Payments are processed through secure third-party payment processors. By making a purchase, you agree to provide valid payment information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Refund Policy</h2>
            <p className="mb-4">
              We offer a 30-day money-back guarantee for paid courses. To request a refund:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact us within 30 days of purchase</li>
              <li>Provide your order number and reason for refund</li>
              <li>Refunds will be processed to the original payment method</li>
            </ul>
            <p className="mt-4">
              Free courses are not eligible for refunds. Once a refund is processed, your access to the course will be revoked.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Intellectual Property</h2>
            <p>
              All content on our Service, including courses, text, graphics, logos, and software, is the property of CodeAcademy or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. User Conduct</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Transmit any harmful or malicious code</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to the Service</li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your account and access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Disclaimers</h2>
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which CodeAcademy operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mt-2">
              Email: legal@codeacademy.com<br />
              Address: 123 Learning Street, Education City, EC 12345
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

