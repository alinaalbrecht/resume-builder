export const WorkSection = (props) => {
  return (
    <article className="work__section">
      {props.edit && (
        <form className="section__form">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            value={props.jobTitle}
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
          <label htmlFor="company">company</label>
          <input
            type="text"
            id="company"
            value={props.company}
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
          <label htmlFor="description">
            accomplishments and responsibilities
          </label>
          <input
            type="text"
            id="description"
            value={props.description}
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
            {props.jobTitle}, {props.startDate} - {props.endDate}
          </h3>
          <p>
            {props.company}, {props.location}
          </p>
          <ul>
            {props.description.map((bullet, index) => (
              <li key={index + 1}>{bullet}</li>
            ))}
          </ul>

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
