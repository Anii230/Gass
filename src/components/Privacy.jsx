import React from 'react';
import "./Components.css";

const Privacy = () => {
    return (
        <div className="p-container">
        <div className="privacy-container">
            <section className="privacy-header">
                <h1>Privacy Policy</h1>
            </section>

            <section className="privacy-content">
                <h2>Introduction</h2>
                <p>
                    At Gass, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information
                    when you use our platform. By using our services, you agree to the collection and use of information as outlined in this policy.
                </p>

                <h2>Information We Collect</h2>
                <p>
                    We collect personal information that you provide when creating an account, such as your name, email address, and profile details.
                    We may also collect technical information such as your IP address, browser type, and operating system when you use our services.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    Your information is used to provide and improve our services, ensure the security of our platform, and communicate with you
                    regarding updates, promotions, or other service-related information. We do not sell or share your information with third parties
                    without your consent, except where required by law.
                </p>

                <h2>Your Rights</h2>
                <p>
                    You have the right to access, modify, or delete your personal information at any time. You may also request that we limit the
                    processing of your information under certain circumstances. To exercise these rights, please contact us at privacy@gass.com.
                </p>

                <h2>Security Measures</h2>
                <p>
                    We use industry-standard security measures to protect your information from unauthorized access, use, or disclosure. However,
                    no system is completely secure, and we cannot guarantee the absolute security of your data.
                </p>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on
                    our website and updating the effective date. Please review the policy periodically for updates.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy Policy, please contact us at privacy@gass.com.
                </p>
            </section>
        </div>
        </div>
    );
}

export default Privacy
