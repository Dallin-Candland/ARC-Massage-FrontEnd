import { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import "./packageSale.css";

export default function PackageSale(props) {
  const [open, setOpen] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Package Sale?!?</Popover.Header>
      <Popover.Body>
        Packages are buy 5 and get, wait for it, <strong>2</strong> free!
      </Popover.Body>
      <Popover.Body>
        Email{" "}
        <a
          className="emailLink"
          href="mailto:nicollecandland.lmt@gmail.com?subject=To ARC Massage - Packages"
        >
          nicollecandland.lmt@gmail.com
        </a>{" "}
        or Call{" "}
        <a href="tel:2064753574">(206) 475-3574</a>
      </Popover.Body>
    </Popover>
  );

  const enter = () => setOpen(open ? false : true);

  const Example = (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={popover}
      onEnter={enter}
      onExit={enter}
    >
      {/* <Button variant="danger">Did someone say Sale?</Button> */}
      <div className='saleButton'>Did someone say Sale?</div>
    </OverlayTrigger>
  );
  return (
    <>
      <div className="packageSale">{Example}</div>
      <div className={open ? " makeSpace" : "noSpace"}></div>
    </>
  );
}
