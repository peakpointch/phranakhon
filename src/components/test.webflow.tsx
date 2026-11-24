import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";

function Test() {
  return <div>test component</div>;
}

export default declareComponent(Test, {
  name: "Test",
});
