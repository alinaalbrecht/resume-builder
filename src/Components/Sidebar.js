import React from "react";
import { SidebarSection } from "./SidebarSection";
import uniqid from "uniqid";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          edit: true,
          title: "",
          bullets: [],
          name: uniqid(),
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addSection = this.addSection.bind(this);
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

    console.log(this.state.sections);
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
        {this.state.sections.map((section) => (
          <SidebarSection
            edit={section.edit}
            title={section.title}
            bullets={section.bullets}
            handleChange={this.handleChange}
            toggleEdit={this.toggleEdit}
            name={section.name}
          />
        ))}
        <button onClick={this.addSection}>Add Section</button>
      </aside>
    );
  }
}
