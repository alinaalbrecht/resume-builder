export const EducationSection = (props) => {
  return (
    <article className="education__section">
      {props.edit && (
        <form className="section__form">
          <label htmlFor="degreeType">Degree Type</label>
          <input
            type="text"
            id="degreeType"
            value={props.degreeType}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="startDate">start date</label>
          <input
            type="text"
            id="startDate"
            value={props.startDate}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="endDate">end date</label>
          <input
            type="text"
            id="endDate"
            value={props.endDate}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="university">university</label>
          <input
            type="text"
            id="university"
            value={props.university}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="location">location</label>
          <input
            type="text"
            id="location"
            value={props.location}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="finalGrade">
            final grade or degree classification
          </label>
          <input
            type="text"
            id="finalGrade"
            value={props.finalGrade}
            onChange={props.handleChange}
            name={props.name}
          />

          <button
            className="button--edit"
            name={props.name}
            onClick={props.toggleEdit}
          >
            submit
          </button>
        </form>
      )}
      {!props.edit && (
        <div className="section__display">
          <h3>
            {props.degreeType}, {props.startDate} - {props.endDate}
          </h3>
          <p>
            {props.university}, {props.location}
          </p>
          <p>Final Grade: {props.finalGrade}</p>

          <button
            className="button--edit"
            name={props.name}
            onClick={props.toggleEdit}
          >
            edit
          </button>
        </div>
      )}
      <button
        className="button--delete"
        name={props.name}
        onClick={props.deleteSection}
      >
        delete
      </button>
    </article>
  );
};
