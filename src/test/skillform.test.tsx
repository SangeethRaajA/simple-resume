import SkillFormNew from "../components/molecules/Form/SkillFormNew";
import { render, screen } from "@testing-library/react";

describe("SkillFormNew", () => {
  it("renders the component", () => {
    const skills = ["HTML", "CSS"];
    const updateFields = jest.fn();

    render(<SkillFormNew skills={skills} updateFields={updateFields} />);

    // Check if the component renders with existing skills
    expect(screen.getByText("HTML")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });
});
