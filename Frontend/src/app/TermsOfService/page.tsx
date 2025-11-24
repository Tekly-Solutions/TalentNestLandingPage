import React from 'react'
import NavBar from '../Components/Navbar/NavBar'
import Footer from '../Components/Footer/Footer'

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-grow container mx-auto py-12 px-4 max-w-4xl">
        <article className="prose prose-slate lg:prose-lg">
          <h1 className="text-4xl font-bold mb-2">TalentNest Terms of Service</h1>
          <p className="text-gray-600 mb-8">Effective date: November 24, 2025</p>

          <p className="mb-4">
            These Terms of Service ("Terms") govern your access to and use of TalentNest and related services (the "Service"), owned and operated by Tekly Solutions ("we", "us", or "our"). By accessing or using the Service (including the TalentNest web and mobile applications, APIs, and backend services), you agree to be bound by these Terms.
          </p>

          <p className="mb-6">
            If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these Terms, and references to "you" or "your" include that organization.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Services and Scope</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Provided Services:</strong> TalentNest is an HR / people-management platform that includes features such as organizational charts, user roles (admin/manager/employee), leave and absence management, document storage and employee records, OTP-based authentication, and administrative APIs and dashboards.
            </li>
            <li>
              <strong>Access:</strong> We may provide the Service through multiple components including a backend server, REST APIs, and frontend clients. We may modify, suspend, or discontinue the Service (or features) at any time.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Accounts, Authentication, and Users</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Account Types:</strong> The Service supports multiple roles (e.g., Admin, Manager, Employee). Certain features and data access depend on your role and permissions.
            </li>
            <li>
              <strong>Registration & Security:</strong> You are responsible for keeping account credentials secure. We provide OTP and other authentication mechanisms; you must not bypass or share credentials. Notify us immediately of unauthorized access.
            </li>
            <li>
              <strong>Customer Responsibilities:</strong> If you administer accounts for others (e.g., employees), you are responsible for proper use, access provisioning, and for ensuring those users comply with these Terms.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Data, Privacy and Use of Employee Information</h2>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Data Collected:</strong> The Service processes information you or your users provide, including personal data (name, email, job title), employment records, documents uploaded to the platform, leave requests, and logs. The backend may record operational logs, audit trails, and OTP/session data.
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Privacy Policy:</strong> Processing of personal data is subject to our <a href="/PrivacyPolicy" className="text-blue-600 hover:underline">Privacy Policy</a>. You must ensure you have the necessary consents and lawful basis to upload and process employee personal data. You are responsible for compliance with privacy laws (e.g., GDPR, CCPA) that apply to your data subjects.
                </li>
              </ul>
            </li>
            <li>
              <strong>License to Use Data:</strong> By submitting data to the Service you grant us a worldwide, non-exclusive, royalty-free license to host, use, reproduce, and transmit that data as necessary to provide the Service and as described in our Privacy Policy.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Acceptable Use & Prohibited Conduct</h2>
          <p className="mb-3">You must not, and must not permit others to, use the Service to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Violate laws, third-party rights or data protection requirements.</li>
            <li>Upload malware, distribute spam, or attempt unauthorized access to systems.</li>
            <li>Interfere with the integrity or performance of the Service.</li>
            <li>Collect other users' credentials or impersonate another person.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Ownership:</strong> The Service, its software, documentation, user interface, and trademarks are the intellectual property of Tekly Solutions or its licensors. Except for the limited license below, we retain all rights.
            </li>
            <li>
              <strong>Limited License:</strong> Subject to these Terms and your compliance, we grant you a limited, revocable, non-exclusive license to access and use the Service for your internal business purposes.
            </li>
            <li>
              <strong>Your Data:</strong> You retain ownership of the data you submit to the Service. You grant us the licenses described above to operate the Service.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Services and Integrations</h2>
          <p className="mb-6">
            The Service may integrate with third-party services (email providers for OTP, storage providers, analytics). Those services are governed by separate terms and privacy practices. We are not responsible for third-party services; you use them at your own risk.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Security</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Our Measures:</strong> We take commercially reasonable administrative, technical and physical measures to protect data. This does not guarantee absolute security.
            </li>
            <li>
              <strong>Your Measures:</strong> You must take reasonable steps to protect credentials and sensitive information and follow best practices when using the Service.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Backups, Retention and Deletion</h2>
          <p className="mb-6">
            We may retain copies and backups of data for operational, legal, or security reasons. If you need to delete or export data, use the tools provided in the Service or contact support. We are not responsible for data loss caused by your actions or third-party integrations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Fees and Payments</h2>
          <p className="mb-6">
            If fees apply for use of the Service (paid tiers, add-ons), they will be described in a separate order, subscription agreement, or billing configuration. All fees are non-refundable except as expressly provided. If you do not pay fees when due, we may suspend or terminate service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Disclaimers</h2>
          <p className="mb-6 uppercase">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE." TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Limitation of Liability</h2>
          <p className="mb-6 uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER WE NOR OUR AFFILIATES WILL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE. OUR AGGREGATE LIABILITY FOR DIRECT DAMAGES ARISING FROM THE SERVICE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT OF FEES YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD 100.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify and hold harmless Tekly Solutions and its officers, employees and agents from any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of your misuse of the Service, violation of these Terms, or infringement of third-party rights.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Termination</h2>
          <p className="mb-6">
            We may suspend or terminate accounts that violate these Terms or for non-payment. You may terminate your account at any time by following the account deletion procedures. Upon termination, your access will end; data may be deleted according to our retention policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">14. Governing Law and Dispute Resolution</h2>
          <p className="mb-6">
            These Terms are governed by the laws of [Insert Jurisdiction — e.g., "the State of California, USA"] without regard to conflict of laws rules. Any dispute arising out of or relating to these Terms will be subject to the exclusive jurisdiction of the courts located in [Insert Location], unless you and we agree to arbitration.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">15. Changes to These Terms</h2>
          <p className="mb-6">
            We may modify these Terms at any time. We will provide notice of material changes, such as via email to account administrators or by posting a revised Terms document. Continued use after notice constitutes acceptance of the updated Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">16. Miscellaneous</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Severability:</strong> If any provision is invalid, the remainder of the Terms will remain in effect.
            </li>
            <li>
              <strong>Entire Agreement:</strong> These Terms, together with any separate ordering or subscription terms, constitute the entire agreement between you and us regarding the Service.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">17. Contact</h2>
          <p className="mb-6">
            For questions, notice of claims, or support, contact us:
            <br />
            Email: <a href="mailto:info@teklysolutions.com" className="text-blue-600 hover:underline">info@teklysolutions.com</a>
            <br />
            Website: <a href="https://teklysolutions.com" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://teklysolutions.com</a>
            <br />
            Call (United Kingdom): <a href="tel:+447471452398" className="text-blue-600 hover:underline">+44 74 7145 2398</a>
            <br />
            Call (Sri Lanka): <a href="tel:+94716723326" className="text-blue-600 hover:underline">+94 71 672 3326</a>
          </p>
        </article>
      </main>

      <Footer />
    </div>
  )
}