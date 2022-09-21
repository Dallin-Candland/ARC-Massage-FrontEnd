// import { useState } from "react";
// import { OverlayTrigger, Popover } from "react-bootstrap";
import "./packageSale.css";
import { Alert } from "react-bootstrap";

export default function PackageSale(props) {
  return (
    <>
      <Alert variant="warning">
        <div className="width1024 packageBanner">
          <Alert.Heading>
            Our Packages are on sale
          </Alert.Heading>
          <p>
            Normally our packages are only buy 5, get <strong>one</strong> free, we are running a
            sale until the 27th of September for:
          </p>
          <p>
            Buy 5 and get, wait for it, <strong>two</strong> free!
          </p>
          <hr />
          Please email{" "}
          <Alert.Link href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Packages">
            support@arcmassageandwellness.com
          </Alert.Link>{" "}
          or call <Alert.Link href="tel:2064753574">(206) 475-3574</Alert.Link>{" "}
          for more information.
        </div>
      </Alert>
    </>
  );
}

// export default function PackageSale(props) {
//   const [open, setOpen] = useState(false);

//   const popover = (
//     <Popover id="popover-basic">
//       <Popover.Header as="h3">Package Sale?!?</Popover.Header>
//       <Popover.Body>
//         Packages are buy 5 and get, wait for it, <strong>2</strong> free!
//       </Popover.Body>
//       <Popover.Body>
//         Email{" "}
//         <a
//           className="emailLink"
//           href="mailto:support@arcmassageandwellness.com?subject=To ARC Massage and Wellness - Packages"
//         >
//           support@arcmassageandwellness.com
//         </a>{" "}
//         or Call{" "}
//         <a href="tel:2064753574">(206) 475-3574</a>
//       </Popover.Body>
//     </Popover>
//   );

//   const enter = () => setOpen(open ? false : true);

//   const Example = (
//     <OverlayTrigger
//       trigger="click"
//       placement="bottom"
//       overlay={popover}
//       onEnter={enter}
//       onExit={enter}
//     >
//       {/* <Button variant="danger">Did someone say Sale?</Button> */}
//       <div className='saleButton'>Did someone say Sale?</div>
//     </OverlayTrigger>
//   );
//   return (
//     <>
//       <div className="packageSale">{Example}</div>
//       <div className={open ? " makeSpace" : "noSpace"}></div>
//     </>
//   );
// }
