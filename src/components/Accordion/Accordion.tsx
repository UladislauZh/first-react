import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

// function Accordion(props: AccordionPropsType) {
//   console.log("Accordion rendering");
//   if (props.collapsed === true) {
//     return (
//       <div>
//         <AccordionTittle title={props.titleValue} />
//         <AccordionBody />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <AccordionTittle title={props.titleValue} />{" "}
//       </div>
//     );
//   }
// }

function Accordion(props: AccordionPropsType) {
  console.log("Accordion rendering");
  return (
    <div>
      <AccordionTittle title={props.titleValue} />
      {!props.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTittlePropsType = {
  title: string;
};

function AccordionTittle(props: AccordionTittlePropsType) {
  console.log("Tittle rendering");
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  console.log("Body rendering");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default Accordion;
