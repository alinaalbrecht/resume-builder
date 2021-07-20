import React from "react";
import { EducationSection } from "./EducationSection";
import uniqid from "uniqid";

export class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educationSections: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }
  deleteSection(e) {
    const index = this.state.educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = Object.assign({}, this.state);
    updatedSections.educationSections.splice(index, 1);

    this.setState({
      updatedSections,
    });
  }

  addSection() {
    let updatedSections = Object.assign({}, this.state);
    updatedSections.educationSections.push({
      edit: true,
      degreeType: "",
      startDate: "",
      endDate: "",
      university: "",
      location: "",
      finalGrade: "",
      name: uniqid(),
    });
    this.setState({
      updatedSections,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    const index = this.state.educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = Object.assign({}, this.state);
    updatedSections.educationSections[index][field] = value;
    this.setState({
      updatedSections,
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    const index = this.state.educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = Object.assign({}, this.state);
    updatedSections.educationSections[index].edit =
      !updatedSections.educationSections[index].edit;
    this.setState({
      updatedSections,
    });
  }
  render() {
    return (
      <section className="education">
        <h2>Education</h2>
        {this.state.educationSections.length === 0 && (
          <p className="description">
            <em>Here's where you add your educational background</em>
          </p>
        )}
        {this.state.educationSections.map((section) => (
          <EducationSection
            edit={section.edit}
            degreeType={section.degreeType}
            startDate={section.startDate}
            endDate={section.endDate}
            university={section.university}
            location={section.location}
            finalGrade={section.finalGrade}
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            name={section.name}
            deleteSection={this.deleteSection}
            key={section.name}
          />
        ))}
        <button className="button--add" onClick={this.addSection}>
          Add Section
        </button>
      </section>
    );
  }
}
