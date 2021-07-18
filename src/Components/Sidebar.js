import React from "react";
import { SidebarSection } from "./SidebarSection";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [
        {
          edit: true,
          title: "Languages",
          bullets: ["french", "german", "english"],
        },
      ],
    };
  }
  render() {
    return (
      <aside className="sidebar">
        {this.state.sections.map((section) => (
          <SidebarSection
            edit={section.edit}
            title={section.title}
            bullets={section.bullets}
          />
        ))}
        <button>Add Section</button>
      </aside>
    );
  }
}
