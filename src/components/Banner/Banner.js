import PackageSale from "./sale/PackageSale";

let setDate = new Date("January 15, 23 01:00:40 GMT+00:00");
let endDate = setDate.getTime();
let now = Date.now();

let difference = endDate - now;

export default function Banner(props) {
  return (
    <>
      {difference > 0 ? (
        <>
          <PackageSale />
        </>
      ) : (
        ""
      )}
    </>
  );
}
