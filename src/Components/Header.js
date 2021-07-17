import React from "react";
import ReactDOM from "react-dom";
export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: true,
      inputs: [
        {
          type: "text",
          id: "name",
          placeholder: "full name",
          ref: React.createRef(),
        },
        {
          type: "email",
          id: "email",
          placeholder: "email",
          ref: React.createRef(),
        },
        {
          type: "tel",
          id: "phone",
          placeholder: "phone number",
          ref: React.createRef(),
        },
        {
          type: "text",
          id: "street",
          placeholder: "street and number",
          ref: React.createRef(),
        },
        {
          type: "text",
          id: "city",
          placeholder: "city",
          ref: React.createRef(),
        },
        {
          type: "number",
          id: "zip",
          placeholder: "zip code",
          ref: React.createRef(),
        },
        {
          type: "text",
          id: "country",
          placeholder: "country",
          ref: React.createRef(),
        },
      ],
    };

    /*  this.name = React.createRef();
    this.email = React.createRef();
    this.phone = React.createRef();
    this.street = React.createRef();
    this.city = React.createRef();
    this.zip = React.createRef();
    this.country = React.createRef(); */

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // Need to loop over inputs and get values for all of them.
    this.state.inputs.map((input) => {
      const node = ReactDOM.findDOMNode(this.ref[input.id]);
      // do what you want to do with `node`
      console.log(node);
    });
  }

  /*   renderInput(input) {
    return (
      <Input 
        id={input.id} 
        key={input.id} 
        ref={input.id} 
        type={input.type} 
        placeholder={input.placeholder} 
      />
    );
  } */
  render() {
    return (
      <header className="header">
        {
          this.state.edit && (
            <form>
              {this.state.inputs.map((input) => (
                <input
                  id={input.id}
                  key={input.id}
                  ref={this.ref}
                  type={input.type}
                  placeholder={input.placeholder}
                />
              ))}
              <button type="submit" onClick={this.handleSubmit}>
                submit
              </button>
            </form>
          )

          /* (
          <form className="header__form">
            <div className="form__input">
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="full name" />
            </div>

            <div className="form__input">
              <label for="email">Your Email</label>
              <input type="email" id="email" placeholder="email" />
            </div>

            <div className="form__input">
              <label for="phone">Your Phone Number</label>
              <input type="tel" id="phone" placeholder="phone number" />
            </div>

            <div className="form__input">
              <label for="street">Street</label>
              <input type="text" id="street" placeholder="street and number" />
            </div>

            <div className="form__input">
              <label for="city">City</label>
              <input type="text" id="city" placeholder="city" />
            </div>

            <div className="form__input">
              <label for="zip">Zip Code</label>
              <input type="number" id="zip" placeholder="zip code" />
            </div>

            <div className="form__input">
              <label for="country">Country</label>
              <input type="text" id="country" placeholder="country" />
            </div>
          </form>
        ) */
        }
      </header>
    );
  }
}
