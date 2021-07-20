export const SidebarSection = (props) => {
  return (
    <article className="sidebar__section">
      {props.edit && (
        <form className="section__form">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={props.title}
            onChange={props.handleChange}
            name={props.name}
          />
          <label htmlFor="bullets">Bullet points, separated by commas</label>
          <input
            type="text"
            id="bullets"
            value={props.bullets}
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
          <h2>{props.title}</h2>
          <ul>
            {props.bullets.map((bullet) => (
              <li>{bullet}</li>
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
