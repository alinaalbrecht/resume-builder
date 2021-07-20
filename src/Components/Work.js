import React from "react";
import { WorkSection } from "./WorkSection";
import uniqid from "uniqid";

export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workSections: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }
  deleteSection(e) {
    const index = this.state.workSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = Object.assign({}, this.state);
    updatedSections.workSections.splice(index, 1);

    this.setState({
      updatedSections,
    });
  }

  addSection() {
    let updatedSections = Object.assign({}, this.state);
    updatedSections.workSections.push({
      edit: true,
      jobTitle: "",
      startDate: "",
      endDate: "",
      company: "",
      location: "",
      description: [],
      name: uniqid(),
    });
    this.setState({
      updatedSections,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    if (e.target.id === "description") {
      value = value.split(",");
    }
    const index = this.state.workSections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = Object.assign({}, this.state);
    updatedSections.workSections[index][field] = value;
    this.setState({
      updatedSections,
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    const index = this.state.workSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = Object.assign({}, this.state);
    updatedSections.workSections[index].edit =
      !updatedSections.workSections[index].edit;
    this.setState({
      updatedSections,
    });
  }
  render() {
    return (
      <section className="work">
        <h2>Professional Experience</h2>
        {this.state.workSections.length === 0 && (
          <p className="description">
            <em>Here's where you add your work experience</em>
          </p>
        )}
        {this.state.workSections.map((section) => (
          <WorkSection
            edit={section.edit}
            jobTitle={section.jobTitle}
            startDate={section.startDate}
            endDate={section.endDate}
            company={section.company}
            location={section.location}
            description={section.description}
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
