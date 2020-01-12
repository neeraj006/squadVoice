import React, { Component } from "react";
import TextInput from "./TextInput";
import Dropdown from "./Dropdown";
import "./Form.scss";

export default class Form extends Component {
  constructor() {
    super();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
    this.zillowCheckbox = React.createRef();
    this.realtorCheckbox = React.createRef();
    this.ylopoCheckbox = React.createRef();
    this.othersCheckbox = React.createRef();
    this.googleCheckbox = React.createRef();
    this.facebookCheckbox = React.createRef();
    this.emailCheckbox = React.createRef();
    this.friendsCheckbox = React.createRef();
    this.realClosersCheckbox = React.createRef();
    this.state = {
      leadsPerMonth: null,
      totalLeads: null,
      crm: null,
      agents: null
    };
  }

  submitForm = () => {
    alert(
      `name- ${this.nameInput.current.value}
    email- ${this.emailInput.current.value}
    phone- ${this.phoneInput.current.value}
    leadsPerMonth- ${this.state.leadsPerMonth}
    totalLeads- ${this.state.totalLeads}
    crm- ${this.state.crm}
    agents- ${this.state.agents}
    sources-  ${this.zillowCheckbox.current.checked ? "zillow, " : ""} ${this.realtorCheckbox.current.checked ? "realtor, " : ""} ${this.ylopoCheckbox.current.checked ? "ylopo, " : ""}  ${this.othersCheckbox.current.checked ? "others, " : ""} 
    hear about us- ${this.googleCheckbox.current.checked ? "google" : ""} ${this.facebookCheckbox.current.checked ? "facebook, " : ""} ${this.emailCheckbox.current.checked ? "email, " : ""} ${this.friendsCheckbox.current.checked ? "friends, " : ""} ${this.realClosersCheckbox.current.checked ? "real closers, " : ""} 
    `
    );
  };

  render() {
    const { leadPlan } = this.props;
    return (
      <div className="form-container">
        <h2>Get Started With SquadVoice</h2>
        <hr />
        <span className="bold">Plan Selected:</span>
        <span>
          {leadPlan === "enterprise"
            ? "enterprise"
            : `Qualified ${leadPlan.leads_per_month}`}
        </span>
        <TextInput label="Name" type="text" reference={this.nameInput} />
        <div className="horizontal-container">
          <TextInput
            label="E-mail Address"
            type="email"
            reference={this.emailInput}
          />
          <TextInput
            label="Phone No."
            type="number"
            reference={this.phoneInput}
          />
        </div>
        <div className="horizontal-container">
          <Dropdown
            list={[100, 120, 130, 140]}
            getSelectedValue={value => this.setState({ leadsPerMonth: value })}
            label="Numbers of leads you generate in a month"
          />
          <Dropdown
            list={[1000, 2000, 3000, 4000]}
            getSelectedValue={value => this.setState({ totalLeads: value })}
            label="Total leads in your CRM"
          />
        </div>
        <div className="horizontal-container">
          <Dropdown
            list={["CRM1", "CRM2", "CRM3", "CRM4"]}
            getSelectedValue={value => this.setState({ crm: value })}
            label="Which CRM do you use"
          />
          <Dropdown
            list={[100, 200, 300, 400]}
            getSelectedValue={value => this.setState({ agents: value })}
            label="No. of agents"
          />
        </div>

        <span className="label">What are your biggest lead sources</span>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input type="checkbox" ref={this.zillowCheckbox}></input>
            Zillow
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.realtorCheckbox}></input>
            Realtor
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.ylopoCheckbox}></input>
            Ylopo
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.othersCheckbox}></input>
            Others
          </label>
        </div>
        <span className="label">How did you hear about us</span>
        <div className="checkbox-container">
          <label className="checkbox-label">
            <input type="checkbox" ref={this.googleCheckbox}></input>
            Google
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.facebookCheckbox}></input>
            Facebook
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.emailCheckbox}></input>
            Email
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.friendsCheckbox}></input>
            Friends
          </label>
          <label className="checkbox-label">
            <input type="checkbox" ref={this.realClosersCheckbox}></input>
            Real Closers
          </label>
        </div>
        <button className="submit-button" onClick={() => this.submitForm()}>
          Submit
        </button>
      </div>
    );
  }
}
