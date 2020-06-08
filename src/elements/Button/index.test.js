import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// import button karena ini yang mau ditesting
import Button from "./index";

// pengecekkan/test button itu ketika disable
test("Should not allowed click Button if isDisabled is present", () => {
  const { container } = render(<Button isDisable></Button>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

// pengecekkan/test render loading/spinner
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  // ekspektasinya ketika ada text/kata "loading" mau kapital / tidak yg penting loading yg ada didalam document. "i" merupakan regex
  expect(getByText(/loading/i)).toBeInTheDocument();
  // ekspektasinya ketika ada "container" dengan <span> didalam document
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  //button tipe link yg berada diluar (eksternal)
  const {container} = render(<Button type="link" isExternal></Button>)
  // pengecekkan <a> tag di container dalam document
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> Component", () => {
  //button tipe link
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  // pengecekkan <a> tag di container dalam document
  expect(container.querySelector("a")).toBeInTheDocument();
});
