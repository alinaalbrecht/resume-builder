import React from "react";
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
        },
        {
          type: "email",
          id: "email",
          value: "",
        },
        {
          type: "tel",
          id: "phone",
          value: "",
        },
        {
          type: "text",
          id: "street",
          value: "",
        },
        {
          type: "text",
          id: "city",
          value: "",
        },
        {
          type: "number",
          id: "zip",
          value: "",
        },
        {
          type: "text",
          id: "country",
          value: "",
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
              <div className="form__input">
                <label htmlFor={input.id}>{input.id}</label>
                <input
                  id={input.id}
                  key={input.id}
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
              <p key={input.value}>{input.value}</p>
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
