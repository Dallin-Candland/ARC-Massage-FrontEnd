import "./medical.css";

export default function Medical(props) {
  return (
    <>
      <section className="medicalSection">
        <h1 className="medicalTitle">Major Medical - PIP - L&I Information</h1>
        <p>
          At this moment, we do <strong>NOT</strong> accept Major Medical, L&I,
          or PIP.
        </p>
        <p>We will possibly accept insurance in the future, but no at this moment</p>

        <section>
          <h3 className='medicalTitle'>Referral</h3>
          <p>
            If you bring in a referral from your doctor, we will provide you with a superbill in
            which you can send to your insurance to get a possible reimbursement 
            through your insurance company.
          </p>
          <p>
            You can request a referral from your doctor based on your current complaints/issues.
          </p>
          <p>If you do not bring in a referral, we will still provide you with a superbill, but your chance of receiving a reimbursement  through your insurance is much higher if they accept superbill and have a current referral.</p>
        </section>

        <section>
          <h3 className='medicalTitle'>Superbill</h3>
          <p>
            We highly encourage you to contact your insurance to see if they
            accept a superbill.
          </p>
          <p>
            We will not give reimbursement  if insurance denies your superbill.
            Through this process, we can not guarantee that insurance will
            accept the superbill, but it is the closest we can provide to make
            your insurance cover the massage.
          </p>
          <p>The superbill will be an itemized receipt given to the patient that records out-of-network services done. This is required for submitting to your insurance company for out-of-network providers such as our company. This allows the insurance to reimburse the client.</p>
        </section>

        <section>
          <h3 className='medicalTitle'>Contact us for any Information you have about superbill</h3>
        <p></p>
        </section>

      </section>
    </>
  );
}
