import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Star/Rating";

function App() {
  return (
    <div>
      <PageTittle title={"This is APP component"} />
      <PageTittle title={"My frinends"} />
      Article 1
      <Rating value={3} />
      <Accordion titleValue={"Menu"} collapsed={true} />
      <Accordion titleValue={"Users"} collapsed={false} />
      Article 2
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTittlePropsType = {
  title: string;
};

function PageTittle(props: PageTittlePropsType) {
  console.log("PageTittle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
