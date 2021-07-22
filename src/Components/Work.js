import React, { useState } from "react";
import { WorkSection } from "./WorkSection";
import uniqid from "uniqid";

export const Work = () => {
  const [workSections, setworkSections] = useState([]);

  const deleteSection = (e) => {
    const index = workSections
      .map((section) => section.name)
      .indexOf(e.target.name);
    setworkSections([
      ...workSections.slice(0, index),
      ...workSections.slice(index + 1),
    ]);
  };

  const addSection = () => {
    setworkSections([
      ...workSections,
      {
        edit: true,
        jobTitle: "",
        startDate: "",
        endDate: "",
        company: "",
        location: "",
        description: [],
        name: uniqid(),
      },
    ]);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    if (e.target.id === "description") {
      value = value.split(",");
    }
    const index = workSections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = [...workSections];
    updatedSections[index][field] = value;
    setworkSections(updatedSections);
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    const index = workSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = [...workSections];
    updatedSections[index].edit = !updatedSections[index].edit;
    setworkSections(updatedSections);
  };

  return (
    <section className="work">
      <h2>Professional Experience</h2>
      {workSections.length === 0 && (
        <p className="description">
          <em>Here's where you add your work experience</em>
        </p>
      )}
      {workSections.map((section) => (
        <WorkSection
          edit={section.edit}
          jobTitle={section.jobTitle}
          startDate={section.startDate}
          endDate={section.endDate}
          company={section.company}
          location={section.location}
          description={section.description}
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
    </section>
  );
};
