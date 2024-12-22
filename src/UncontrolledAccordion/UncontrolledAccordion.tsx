import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log("Accordion rendering");

  let [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <AccordionTittle title={props.titleValue} />
      <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>
      {!collapsed && <AccordionBody />}
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
