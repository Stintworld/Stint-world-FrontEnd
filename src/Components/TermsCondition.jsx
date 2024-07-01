import { Link } from "react-router-dom/cjs/react-router-dom.min";
const TermsCondition = () => {
    return (
        <div className="fluid p-5" style={{ textAlign: "left", backgroundColor: "rgba(154, 53, 204, 0.09)", color: "rgb(38, 52, 180)" }}>
            <h2 className="fs-3">Stint.world Terms and Conditions </h2>
            <div>
                These Terms and Conditions ("Terms", "Conditions", "Agreement") constitute a legally binding agreement between you ("User", "you", or "your") and Stint.world ("we", "us", or "our") regarding your access and use of the Stint.world website (the "Service").
                <p className="mt-3">Also read our <Link to="/privacypolicy">Privacy & Policy</Link></p>
                <h6 className="mt-5"> 1. Acceptance of Terms</h6>

                By accessing or using the Service, you agree to be bound by these Terms. These Terms apply to all users of the Service, including but not limited to job seekers, employers, and other visitors. If you disagree with any part of the Terms, you may not access or use the Service.

                <h6 className="mt-5">2. User Accounts</h6>

                You may be required to create an account ("Account") to access and use certain features of the Service. You are responsible for maintaining the confidentiality of your Account information, including your login credentials, and for all activities that occur under your Account. You agree to notify us immediately of any unauthorized use of your Account or any other security breach.

                <h6 className="mt-5">3. Job Seekers</h6>

                You represent and warrant that you have the right to create an Account and use the Service in accordance with these Terms.
                You agree to provide accurate and complete information in your profile and any other communications on the Service.
                You are solely responsible for the content you upload or post on the Service.
                You agree to use the Service for lawful purposes only and not to engage in any activities that violate the rights of others.

                <h6 className="mt-5">4. Employers</h6>

                You represent and warrant that you have the legal authority to post job openings on the Service.
                You agree to comply with all applicable laws and regulations related to employment practices.
                You agree to provide accurate and complete information in your job postings.
                You agree to treat all job applicants with respect and comply with all anti-discrimination laws.


                <h6 className="mt-5">5. Content</h6>

                The Service may contain content uploaded by users, including job postings, profiles, and other information ("Content"). Stint.world does not claim ownership of any Content and is not responsible for the accuracy, completeness, or legality of any Content.

                <h6 className="mt-5"> 6. User Conduct</h6>

                You agree not to use the Service for any of the following purposes: <br />

                To violate the rights of others, including intellectual property rights. <br />
                To transmit any illegal, harmful, threatening, abusive, defamatory, vulgar, obscene, hateful, or racially or ethnically offensive material. <br />
                To interfere with or disrupt the Service or servers or networks connected to the Service. <br />
                To use the Service for any unauthorized commercial purpose. <br />
                To impersonate any person or entity. <br />
                To collect or store personal data about other users without their consent. <br />

                <h6 className="mt-5"> 7. Disclaimer</h6>

                The Service is provided "as is" and "as available" without any warranties of any kind, express or implied. Stint.world disclaims all warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.

                Stint.world does not warrant that the Service will be uninterrupted, secure, or error-free. Stint.world does not warrant that the results that may be obtained from the use of the Service will be accurate or reliable.

                <h6 className="mt-5">  8. Limitation of Liability</h6>

                In no event shall Stint.world, its directors, officers, employees, or agents be liable for any damages (including, without limitation, direct, indirect, incidental, consequential, or punitive damages, loss of profits, loss of data, or business interruption) arising out of or in any way connected with the use of the Service, even if Stint.world has been advised of the possibility of such damages.

                <h6 className="mt-5">9. Indemnification</h6>

                You agree to indemnify and hold harmless Stint.world, its directors, officers, employees, and agents from and against any and all claims, losses, damages, expenses (including attorneys' fees) arising out of or in any way connected with your use of the Service.

                <h6 className="mt-5"> 10. Termination</h6>

                We may terminate your access to the Service at any time, for any reason, without notice. We may also remove any Content from the Service at any time, for any reason.

                <h6 className="mt-5">11. Governing Law</h6>

                These Terms shall be governed and construed in accordance with the laws of Government of India, without regard to its conflict of law provisions.

                <h6 className="mt-5"> Fees and Payment</h6>
                <span style={{ fontWeight: "600" }}>Jobseeker Registration Fees</span> : You are responsible for paying any applicable registration fees using Rozarpay.
                <br /> <br />
                1) Registration fees (Including professional Resume and job assistance)<br />
                2) Software Courses fees(excluding Registration fees, i.e there will be separate fees for each course)<br />
                3) Live Project explanation fees with experience letter<br />            
                
                
                
                <br /><span style={{ fontWeight: "600" }}>Refunds</span> : We may offer refunds for registration fees under certain circumstances. Please refer to our <Link to="/refundpolicy"> refund policy </Link> for details

                <h6 className="mt-5">Registration</h6>

                To register as a jobseeker, you will need to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials.

                <h6 className="mt-5">12. Entire Agreement</h6>

                These Terms constitute the entire agreement between you and Stint.world regarding the use of the Service.
            </div>
        </div>

    );
}

export default TermsCondition;