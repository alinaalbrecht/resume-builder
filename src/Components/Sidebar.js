import React, { useState } from "react";
import { SidebarSection } from "./SidebarSection";
import uniqid from "uniqid";

export const Sidebar = (props) => {
  const [sections, setSections] = useState([]);

  const deleteSection = (e) => {
    const index = sections
      .map((section) => section.name)
      .indexOf(e.target.name);

    setSections([...sections.slice(0, index), ...sections.slice(index + 1)]);
  };

  const addSection = () => {
    setSections([
      ...sections,
      {
        edit: true,
        title: "",
        bullets: [],
        name: uniqid(),
      },
    ]);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.id === "bullets") {
      value = value.split(",");
    }
    const index = sections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    const index = sections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = [...sections];
    updatedSections[index].edit = !updatedSections[index].edit;
    setSections(updatedSections);
  };

  return (
    <aside className="sidebar">
      {sections.length === 0 && (
        <p className="description">
          <em>
            Sidebar -- Add any extra relevant information here, including skills
          </em>
        </p>
      )}
      {sections.map((section) => (
        <SidebarSection
          edit={section.edit}
          title={section.title}
          bullets={section.bullets}
          handleChange={handleChange}
          toggleEdit={toggleEdit}
          name={section.name}
          deleteSection={deleteSection}
          key={section.name}
        />
      ))}
      <button className="button--add" onClick={addSection}>
        Add Section
      </button>
    </aside>
  );
};
