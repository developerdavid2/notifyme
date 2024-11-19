import React from "react";
import { FaClock } from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-6 md:max-w-3xl py-40">
      {/* Page Header */}
      <h1 className="md:h1 h4 font-bold text-center mb-4">Terms of Service</h1>
      <div className="flex items-center justify-center mb-15">
        <div className="flex items-center rounded-full px-4 py-2 text-gray-700 sm:text-sm text-xs shadow-md border border-gray-700">
          <FaClock className="mr-2 text-gray-800" />
          Last Updated: November 8, 2024
        </div>
      </div>

      {/* Introduction */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Introduction</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        Welcome to NotifyME! These Terms of Service govern your use of our
        application. By accessing or using NotifyME, you agree to comply with
        these terms. If you do not agree, please refrain from using our app.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* User Agreement */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">User Agreement</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        By creating an account on NotifyME, you agree to provide accurate
        information and maintain the security of your credentials. You must not
        use the app for any unlawful or unauthorized purpose.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Use of Service */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Use of Service</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        NotifyME is designed to provide notifications for job listings on
        Upwork. Any misuse of the service, including unauthorized scraping or
        violation of Upwork’s terms, is strictly prohibited and may result in
        account suspension or legal action.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Limitation of Liability */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Limitation of Liability</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        NotifyME is provided &ldquo;as-is&rdquo; without warranties of any kind.
        We are not liable for any errors, delays, or disruptions in service.
        Users are solely responsible for decisions made based on the
        notifications provided by the app.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Termination */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Termination</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        We reserve the right to terminate or suspend your access to NotifyME at
        any time for any reason, including a violation of these terms. Upon
        termination, your access to the app will be revoked, and any associated
        data may be deleted.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Modifications */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Modifications</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        NotifyME reserves the right to modify these Terms of Service at any
        time. Users will be notified of changes via email or an in-app
        announcement. Continued use of the app constitutes acceptance of the
        updated terms.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Governing Law */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Governing Law</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        These terms are governed by and construed in accordance with the laws of
        the jurisdiction where NotifyME operates. Any disputes shall be resolved
        through arbitration or the appropriate court in that jurisdiction.
      </p>
      <div className="bg-gray-800/50 h-px pointer-events-none" />

      {/* Contact Us */}
      <h4 className="h5 md:h4 font-black mt-6 mb-4">Contact Us</h4>
      <p className="leading-relaxed mb-6 body-3 text-n-4">
        If you have any questions about these Terms of Service, please contact
        us at{" "}
        <a
          href={`mailto:support@notifyme.com`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-800 hover:text-blue-400 flex"
          style={{ display: "inline-block" }}>
          support@notifyme.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsOfService;
