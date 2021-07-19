import React from "react";
import { SidebarSection } from "./SidebarSection";
import uniqid from "uniqid";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }

  deleteSection(e) {
    const index = this.state.sections
      .map((section) => section.name)
      .indexOf(e.target.name);
    console.log(index);
    let updatedSections = Object.assign({}, this.state);
    updatedSections.sections.splice(index, 1);
    console.log(this.state.sections);
    this.setState({
      updatedSections,
    });
  }

  addSection() {
    let updatedSections = Object.assign({}, this.state);
    updatedSections.sections.push({
      edit: true,
      title: "",
      bullets: [],
      name: uniqid(),
    });
    this.setState({
      updatedSections,
    });
  }

  handleChange(e) {
    let value = e.target.value;
    if (e.target.id === "bullets") {
      value = value.split(",");
    }
    const index = this.state.sections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = Object.assign({}, this.state);
    updatedSections.sections[index][field] = value;
    this.setState({
      updatedSections,
    });

    /* console.log(this.state.sections); */
  }

  toggleEdit(e) {
    e.preventDefault();
    const index = this.state.sections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = Object.assign({}, this.state);
    updatedSections.sections[index].edit =
      !updatedSections.sections[index].edit;
    this.setState({
      updatedSections,
    });
  }
  render() {
    return (
      <aside className="sidebar">
        {this.state.sections.length === 0 && (
          <p className="sidebar__description">
            <em>
              Sidebar -- Add any extra relevant information here, including
              skills
            </em>
          </p>
        )}
        {this.state.sections.map((section) => (
          <SidebarSection
            edit={section.edit}
            title={section.title}
            bullets={section.bullets}
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            name={section.name}
            deleteSection={this.deleteSection}
          />
        ))}
        <button className="sidebar__button--add" onClick={this.addSection}>
          Add Section
        </button>
      </aside>
    );
  }
}
