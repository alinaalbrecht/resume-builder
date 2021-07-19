export const SidebarSection = (props) => {
  return (
    <section>
      {props.edit && (
        <form className="">
          <input
            type="text"
            id="title"
            value={props.title}
            onChange={props.handleChange}
            name={props.name}
          />
          <input
            type="text"
            id="bullets"
            value={props.bullets}
            onChange={props.handleChange}
            name={props.name}
          />
          <button name={props.name} onClick={props.toggleEdit}>
            submit
          </button>
        </form>
      )}
      {!props.edit && (
        <div>
          <h2>{props.title}</h2>
          <ul>
            {props.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
          <button name={props.name} onClick={props.toggleEdit} className="">
            edit
          </button>
        </div>
      )}
      <button name={props.name} onClick={props.deleteSection}>
        delete
      </button>
    </section>
  );
};
