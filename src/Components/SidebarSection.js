export const SidebarSection = (props) => {
  return (
    <section>
      {props.edit && (
        <div>
          <h2>{props.title}</h2>
          <ul>
            {props.bullets.map((bullet) => (
              <li>{bullet}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
