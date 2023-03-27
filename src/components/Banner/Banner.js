import EstheticSale from './esthetic/esthetic';

let setEndDate = new Date('April 26, 23 01:00:40 GMT+00:00');
let setStartDate = new Date('March 27, 23 01:00:40 GMT+00:00');


let startDate = setStartDate.getTime();
let endDate = setEndDate.getTime();
let now = Date.now();

export default function Banner(props) {
  return (
    <>
      {now > startDate && now < endDate ? (
        <>
          <EstheticSale />
        </>
      ) : (
        ''
      )}
    </>
  );
}
