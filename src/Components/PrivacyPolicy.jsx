import { Link } from "react-router-dom/cjs/react-router-dom.min";
const PrivacyPolicy = () => {
    return (
        <div className="fluid p-5" style={{ textAlign: "left", backgroundColor: "rgba(154, 53, 204, 0.09)", color: "rgb(38, 52, 180)" }}>
            <h2 className="fs-3">Stint.world Privacy Policy </h2>
            <div>
                Stint.world ("we", "us", or "our") operates the stint.world website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

                <p className="mt-3">Also read our <Link to="/termscondition">Terms & Conditions</Link></p>

                <h6 className="mt-5">Information We Collect</h6>

                We collect several different types of information for various purposes to improve our Service to you.

                <h6 className="mt-5">Personal Data</h6>

                While using our Service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to: <br />

                Email address <br />
                First name and last name <br />
                Phone number <br />
                Educational background (for job seekers) <br />
                Skill set and experience (for job seekers) <br />
                Company information (for employers)<br />


                <h6 className="mt-5">  Usage Data</h6>

                We may also collect information about how you access and use the Service ("Usage Data"). This Usage Data may include information such as your computer's IP address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                <h6 className="mt-5"> Tracking Technologies and Cookies</h6>

                We may utilize cookies and other tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies are also used like beacons, scripts, and tags to collect and track information and to improve and analyze our Service.

                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

                <h6 className="mt-5">Use of Your Information</h6>

                Stint.world uses the collected data for various purposes: <br />

                To provide and maintain the Service <br />
                To improve and personalize the Service <br />
                To facilitate communication between job seekers and employers <br />
                To send you updates and other promotional information (with your consent) <br />
                To fulfill a legal obligation <br />



                <h6 className="mt-5">Disclosure of Your Information</h6>

                We may disclose your Personal Data in the good faith belief that such action is necessary to: <br />

                To comply with a legal obligation <br />
                To protect the rights or property of Stint.world <br />
                To prevent or investigate possible wrongdoing in connection with the Service <br />
                To protect the personal safety of users of the Service or the public <br />


                <h6 className="mt-5">Security</h6>

                The security of your data is important to us. We use commercially reasonable efforts to protect your Personal Data, but no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

                <h6 className="mt-5"> International Transfers</h6>

                Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.

                Your consent to this Privacy Policy followed by your submission of such information represents your agreement to this transfer.

                <h6 className="mt-5">Children's Privacy</h6>

                Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.

                <h6 className="mt-5"> Changes to This Privacy Policy</h6>

                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.


                <h6 className="mt-5"> Information Sharing</h6>
                <span style={{ fontWeight: "600" }}>Employers</span> : We may share your profile information with employers when you apply for jobs. We will only share the information you have made publicly visible on your profile.
                <br /><span style={{ fontWeight: "600" }}>Service Providers</span> : We may share your Information with third-party service providers who assist us in operating the Application, such as hosting providers, data analytics providers, and customer support providers. These providers are contractually obligated to protect your Information.
                <br /><span style={{ fontWeight: "600" }}>Legal Requirements</span> : We may disclose your Information if required by law, court order, or to protect the rights and safety of ourselves or others.
                <h6 className="mt-5"> Your Rights and Choices</h6>
                <span style={{ fontWeight: "600" }}>Access and Update Your Information</span> : You can access and update your profile information at any time through your account settings.
                <br /><span style={{ fontWeight: "600" }}>Data Deletion</span> : You may request deletion of your account and Information. We will comply with your request within a reasonable time frame, subject to legal and regulatory obligations.
                <br /><span style={{ fontWeight: "600" }}>Marketing Preferences</span> : You can control your marketing communication preferences through your account settings or by following unsubscribe instructions in our emails.


                <h6 className="mt-5">Payment Information</h6>
                When using Razorpay for registration fees, we do not directly collect your payment card details. Razorpay securely processes this information. We may collect transaction IDs or receipts for payment verification. Please refer to our <Link to="/refundpolicy"> refund policy </Link> for details.
                <br /> <br />
                1) Registration fees (Including professional Resume and job assistance)<br />
                2) Software Courses fees(excluding Registration fees, i.e there will be separate fees for each course)<br />
                3) Live Project explanation fees with experience letter<br />




                <h6 className="mt-5">Usage Data</h6>
                We may collect information about your use of the Application, such as pages visited, searches conducted, and job applications submitted.


                <h6 className="mt-5">Contact Us</h6>

                If you have any questions about this Privacy Policy, please contact us by email at mgc25999@gmail.com.
            </div>
        </div>
    );
}

export default PrivacyPolicy;