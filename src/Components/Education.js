import React, { useState } from "react";
import { EducationSection } from "./EducationSection";
import uniqid from "uniqid";

export const Education = () => {
  const [educationSections, seteducationSections] = useState([]);

  const deleteSection = (e) => {
    const index = educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    seteducationSections([
      ...educationSections.slice(0, index),
      ...educationSections.slice(index + 1),
    ]);
  };

  const addSection = () => {
    seteducationSections([
      ...educationSections,
      {
        edit: true,
        degreeType: "",
        startDate: "",
        endDate: "",
        university: "",
        location: "",
        finalGrade: "",
        name: uniqid(),
      },
    ]);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    const index = educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);
    const field = e.target.id;
    let updatedSections = [...educationSections];
    updatedSections[index][field] = value;
    seteducationSections(updatedSections);
  };

  const toggleEdit = (e) => {
    e.preventDefault();
    const index = educationSections
      .map((section) => section.name)
      .indexOf(e.target.name);

    let updatedSections = [...educationSections];
    updatedSections[index].edit = !updatedSections[index].edit;
    seteducationSections(updatedSections);
  };

  return (
    <section className="education">
      <h2>Education</h2>
      {educationSections.length === 0 && (
        <p className="description">
          <em>Here's where you add your educational background</em>
        </p>
      )}
      {educationSections.map((section) => (
        <EducationSection
          edit={section.edit}
          degreeType={section.degreeType}
          startDate={section.startDate}
          endDate={section.endDate}
          university={section.university}
          location={section.location}
          finalGrade={section.finalGrade}
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
