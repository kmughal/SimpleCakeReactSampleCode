import * as React from "react";

import { CakeViewer } from "./index";
import { render } from "@testing-library/react";

describe("Cake Viewer Component tests", () => {
  it("should display 'Your list is empty.' when there are not cakes", () => {
    const component = () => render(<CakeViewer cakes={[]} />);
    const { getByText } = component();
    expect(getByText("Your list is empty.")).not.toBeNull();
  });
  it("should display cakes when there are cakes", () => {
    const component = () =>
      render(
        <CakeViewer
          cakes={[
            {
              id: "1",
              name: "Cake_1",
              comment: "COMMENT_1",
              imageUrl: "http://www.fake.com/fake_image_1.png",
              yumFactor: 4,
            },
            {
              id: "2",
              name: "Cake_2",
              comment: "COMMENT_2",
              imageUrl: "http://www.fake.com/fake_image_2.png",
              yumFactor: 2,
            },
          ]}
        />
      );
    const { getByTestId, getByText } = component();

    expect(getByTestId("1")).toBeInTheDocument();
    expect(getByTestId("2")).toBeInTheDocument();

    expect(getByText(/Cake_1/i)).toBeInTheDocument();
    expect(getByText(/COMMENT_1/i)).toBeInTheDocument();
    expect(getByTestId("image-1")).toBeInTheDocument();
    expect(getByTestId("rating-1")).toBeInTheDocument();
    expect(getByTestId("rating-1")).toHaveAttribute("aria-label", "4 Stars");
  });
});
