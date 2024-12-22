import React, { useState } from "react";

type RatingPropsType = {
  // value: 0 | 1 | 2 | 3 | 4 | 5;
};

export function UncontrolledRating(props: RatingPropsType) {
  console.log("Rating rendering");

  let [value, setValue] = useState(0);

  return (
    <div>
      <Star selected={value > 0} />
      <button
        onClick={() => {
          setValue(1);
        }}
      >
        1
      </button>
      <Star selected={value > 1} />
      <button
        onClick={() => {
          setValue(2);
        }}
      >
        1
      </button>
      <Star selected={value > 2} />
      <button
        onClick={() => {
          setValue(3);
        }}
      >
        1
      </button>
      <Star selected={value > 3} />
      <button
        onClick={() => {
          setValue(4);
        }}
      >
        1
      </button>
      <Star selected={value > 4} />
      <button
        onClick={() => {
          setValue(5);
        }}
      >
        1
      </button>
    </div>
  );

  type StarPropsType = {
    selected: boolean;
  };

  function Star(props: StarPropsType) {
    console.log("Star rendering");

let [on, setOn] = useState(false);

props.selected ? <span><b> star </b></span> : <span> star </span>

  //   if (props.selected === true) {
  //     return (
  //       <span>
  //         <b> star </b>
  //       </span>
  //     );
  //   } else {
  //     return <span> star </span>;
  //   }
  // }

  //   if (props.value === 1) {
  //     return (
  //       <div>
  //         <Star selected={true} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //       </div>
  //     );
  //   }
  //   if (props.value === 2) {
  //     return (
  //       <div>
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //       </div>
  //     );
  //   }
  //   if (props.value === 3) {
  //     return (
  //       <div>
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //       </div>
  //     );
  //   }
  //   if (props.value === 4) {
  //     return (
  //       <div>
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={false} />
  //       </div>
  //     );
  //   }
  //   if (props.value === 5) {
  //     return (
  //       <div>
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //         <Star selected={true} />
  //       </div>
  //     );
  //   } else
  //     return (
  //       <div>
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //         <Star selected={false} />
  //       </div>
  //     );
}
