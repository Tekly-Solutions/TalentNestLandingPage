import React from 'react';
import NavBar from '../Components/Navbar/NavBar';
import Footer from '../Components/Footer/Footer';

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow container mx-auto py-12 px-4 max-w-4xl">
        <article className="prose prose-slate lg:prose-lg">
          <h1 className="text-4xl font-bold mb-2">TalentNest Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective date: November 24, 2025</p>

          <p className="mb-4">
            This Privacy Policy explains how Tekly Solutions ("we", "us", "our") collects, uses, shares, and protects personal information when you use TalentNest (the "Service"), including web and mobile applications, APIs, and related backend services.
          </p>

          <p className="mb-6">
            If you are using the Service on behalf of an organization, the organization is the data controller and is responsible for compliance with applicable data protection laws. This policy describes how we, as the Service provider, process data to provide the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Account & Identity Data:</strong> name, email address, username, job title, role (admin/manager/employee), department, employee ID.
            </li>
            <li>
              <strong>Contact & Communication Data:</strong> work phone number, work email, and messages sent through the Service (e.g., support requests).
            </li>
            <li>
              <strong>Employment & HR Records:</strong> leave/absence requests and history, employment dates, roles, organizational relationships (manager reports), and other HR-related entries.
            </li>
            <li>
              <strong>Documents & Files:</strong> files and attachments you upload (employee documents, contracts, certificates), including file metadata.
            </li>
            <li>
              <strong>Authentication & Security Data:</strong> OTP codes (transient), password hashes, login timestamps, session identifiers, IP addresses, and audit logs.
            </li>
            <li>
              <strong>Usage & Technical Data:</strong> device identifiers, browser and operating system, pages visited, API request logs, error logs, and performance metrics.
            </li>
            <li>
              <strong>Derived / Aggregated Data:</strong> anonymized or aggregated statistics for analytics and product improvement.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-3">We use personal data to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Provide, maintain, and improve the Service (authentication, user management, org charts, leave workflows, document storage).</li>
            <li>Process leave requests, store employee documents, generate reports and organizational visualizations.</li>
            <li>Communicate with users and respond to support inquiries.</li>
            <li>Secure the Service, detect and prevent fraud, and perform security investigations.</li>
            <li>Comply with legal obligations and enforce our Terms of Service.</li>
            <li>Produce aggregated and anonymized analytics.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Lawful Bases (where applicable)</h2>
          <p className="mb-3">Depending on the jurisdiction and your relationship with the organization using the Service, lawful bases for processing may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Performance of a contract (e.g., employment administration).</li>
            <li>Legitimate interests (e.g., security, fraud prevention, product improvement) balanced against data subject rights.</li>
            <li>Consent, where required for specific features.</li>
            <li>Legal compliance.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing and Disclosure</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Within Your Organization:</strong> Data you upload or create is normally accessible to authorized users within your organization according to roles and permissions (admins, managers, employees).
            </li>
            <li>
              <strong>Service Providers:</strong> We share data with trusted third-party processors who perform services for us (email/OTP providers, cloud storage, analytics). These processors are contractually bound to protect data and only act on our instructions.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose data to comply with legal obligations, respond to lawful requests by public authorities, or to protect rights and safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, data may be transferred as part of the business transaction. We will notify customers and users where required by law.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Storage, Retention, and Deletion</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Storage:</strong> We store data on secure servers and cloud providers. Storage locations may be outside your country — see "International Transfers" below.
            </li>
            <li>
              <strong>Retention:</strong> We retain personal data as long as necessary to provide the Service, fulfill contractual obligations, meet legal obligations, or as requested by the organization that owns the account. Typical retention for user account data is the lifetime of the account plus a limited buffer for backups and legal holds.
            </li>
            <li>
              <strong>Deletion & Export:</strong> Account administrators may export or delete organizational data using provided tools. If you need assistance exporting or deleting data, contact our support address below.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Security</h2>
          <p className="mb-6">
            We implement technical and organizational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. Measures include access controls, encryption in transit (TLS), audit logging, and regular security assessments. However, no system is perfectly secure; we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. International Transfers</h2>
          <p className="mb-6">
            Data may be transferred to and processed in countries other than the one in which the user or organization is located. When transfers occur, we will protect personal data using appropriate safeguards (standard contractual clauses, where applicable) or rely on adequacy decisions where available.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Rights</h2>
          <p className="mb-3">Subject to local law, data subjects may have rights including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Access: request a copy of personal data we process about you.</li>
            <li>Rectification: correct inaccurate or incomplete personal data.</li>
            <li>Deletion: request deletion of personal data (subject to contractual or legal exceptions).</li>
            <li>Portability: receive a copy of certain personal data in a structured, machine-readable format.</li>
            <li>Restrict or object to processing where applicable.</li>
          </ul>
          <p className="mb-6">
            Requests should be submitted to the controller for your organization. If you need assistance, contact our support address below and we will cooperate with your administrator.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Children</h2>
          <p className="mb-6">
            The Service is not intended for children under 16. We do not knowingly collect personal data from children under this age. If you become aware that a child has provided us with personal data, contact us to have the data removed.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Cookies and Tracking</h2>
          <p className="mb-6">
            Our frontend may use cookies and similar technologies to provide and improve the Service (session cookies, analytics). Third-party analytics providers may use cookies as described in their privacy policies. You can control cookie settings via your browser; note that disabling certain cookies may affect functionality.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Third-Party Links and Integrations</h2>
          <p className="mb-6">
            The Service may contain links to third-party websites or integrate third-party tools. We are not responsible for the privacy practices of those external services. Please consult their privacy policies before providing personal data.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Changes to this Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will post the updated policy with a new effective date. For material changes affecting existing customers, we will provide notice to account administrators.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact & Data Protection Officer</h2>
          <p className="mb-3">If you have questions, requests, or concerns about this Privacy Policy or our processing of personal data, contact:</p>
          <p className="mb-1">Tekly Solutions</p>
          <p className="mb-1">Website: <a href="https://teklysolutions.com" className="text-blue-600 hover:underline">https://teklysolutions.com</a></p>
          <p className="mb-1">Email: <a href="mailto:info@teklysolutions.com" className="text-blue-600 hover:underline">info@teklysolutions.com</a></p>
          <p className="mb-1">Call (United Kingdom): <a href="tel:+447471452398" className="text-blue-600 hover:underline">+44 74 7145 2398</a></p>
          <p className="mb-6">Call (Sri Lanka): <a href="tel:+94716723326" className="text-blue-600 hover:underline">+94 71 672 3326</a></p>
          <p className="mb-6">
            If you are a resident of the European Economic Area or other jurisdiction with a supervisory authority, you have the right to lodge a complaint with your local data protection authority.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">14. Additional Notes for Administrators / Controllers</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Controller Responsibilities:</strong> Organizations using TalentNest act as data controllers for their users' data. Controllers must ensure lawful bases for processing, provide required notices to employees, and honor data subject requests consistent with applicable law.
            </li>
            <li>
              <strong>Processor Addendum:</strong> If you need a data processing agreement (DPA) or specific contractual language for GDPR compliance, contact us and we can provide a DPA template.
            </li>
          </ul>
        </article>
      </main>

      <Footer />
    </div>
  );
}