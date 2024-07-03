import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RefundPolices = () => {
    return (
        <div className="fluid p-5 vh-100" style={{ textAlign: "left", backgroundColor: "rgba(154, 53, 204, 0.09)", color: "rgb(38, 52, 180)" }}>
            <h3 className="mb-3"> Refund polices</h3>
            <p>1. If he gets job assistance within 20 days refund policy is not applicable for any candidate.</p>
            <p>2. Candidates who don't receive job assistance within 20 days are eligible for a full refund, which will be processed within 20 additional business days. </p>
            <p>3. If candidates subscribe for software courses then the amount will not be refunded and can refer for anyone who is interested.</p>
            <p>4. Once live project started then the amount is not refunded for any candidate.</p>
            <p>5. Cancellation is not  applicable if wrong information is suggested and misused of our website.</p>
            <p>6. Cancellation policy is not applicable if the candidate is not provided the proper information about the vitae.</p>
            <p>7. Cancellation is applicable only if candidate is not satisfied with the service provided by us.</p>            
            <p>Know more about our <Link to="/privacypolicy"> Privacy Policy </Link> and <Link to="/termscondition"> Terms & Condition. </Link></p>
        </div>
    );
}

export default RefundPolices;