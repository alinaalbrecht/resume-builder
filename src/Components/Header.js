import React from "react";
import uniqid from "uniqid";
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      inputs: [
        {
          type: "text",
          id: "name",
          value: "",
          key: uniqid(),
        },
        {
          type: "email",
          id: "email",
          value: "",
          key: uniqid(),
        },
        {
          type: "tel",
          id: "phone",
          value: "",
          key: uniqid(),
        },
        {
          type: "text",
          id: "street",
          value: "",
          key: uniqid(),
        },
        {
          type: "text",
          id: "city",
          value: "",
          key: uniqid(),
        },
        {
          type: "number",
          id: "zip",
          value: "",
          key: uniqid(),
        },
        {
          type: "text",
          id: "country",
          value: "",
          key: uniqid(),
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }
  handleChange(e) {
    const index = this.state.inputs
      .map((input) => input.id)
      .indexOf(e.target.id);
    let updatedInputs = Object.assign({}, this.state);
    updatedInputs.inputs[index].value = e.target.value;
    this.setState({
      updatedInputs,
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState((state) => ({
      edit: !state.edit,
    }));
  }

  render() {
    return (
      <header className="header">
        {this.state.edit && (
          <form className="header__form">
            {this.state.inputs.map((input) => (
              <div key={input.key} className="form__input">
                <label htmlFor={input.id}>{input.id}</label>
                <input
                  id={input.id}
                  type={input.type}
                  value={input.value}
                  onChange={this.handleChange}
                />
              </div>
            ))}
            <button className="button--edit" onClick={this.toggleEdit}>
              submit
            </button>
          </form>
        )}
        {!this.state.edit && (
          <div className="header__display">
            <h1>{this.state.inputs[0].value}</h1>
            {this.state.inputs.slice(1).map((input) => (
              <p key={input.key}>{input.value}</p>
            ))}
            <button className="button--edit" onClick={this.toggleEdit}>
              Edit
            </button>
          </div>
        )}
      </header>
    );
  }
}
