import React, { Component } from "react";
import PlanCard from "./components/PlanCard";
import "./App.scss";
import { data } from "./data";
import Modal from "./components/Modal";
import Form from "./components/Form/Form";

const defaultPlanIndex = 2;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlan: data.plans[defaultPlanIndex],
      isModalOpen: false,
      leadPlan: null
    };
  }

  renderAveragePlans = () => {
    return data.plans.map(plan => (
      <div
        className={`average-plan ${
          this.isPlanSelected(plan) ? "selected" : ""
        }`}
        onClick={() => this.setState({ selectedPlan: plan })}
        key={plan.min}
      >
        <span>{this.mapPlanToPlanName(plan)}</span>
      </div>
    ));
  };

  isPlanSelected = plan => {
    return this.state.selectedPlan === plan ? true : false;
  };

  mapPlanToPlanName = plan => {
    if (plan.max === "infinite") {
      return `$${plan.min}K+`;
    } else {
      return `$${plan.min}K - $${plan.max}K`;
    }
  };

  onPlanSelected = leadPlan => {
    this.setState({
      isModalOpen: true,
      leadPlan: leadPlan ? leadPlan : "enterprise"
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="app-container">
          <Modal
            isModalOpen={this.state.isModalOpen}
            closeModal={() => this.closeModal()}
          >
            <Form leadPlan={this.state.leadPlan} />
          </Modal>
          <div className="average-plan-container">
            {this.renderAveragePlans()}
          </div>

          <div className="plan-card-container">
            <PlanCard
              plan={this.state.selectedPlan}
              leads={20}
              onPlanSelected={leadPlan => this.onPlanSelected(leadPlan)}
            />
            <PlanCard
              plan={this.state.selectedPlan}
              leads={40}
              onPlanSelected={leadPlan => this.onPlanSelected(leadPlan)}
            />
            <PlanCard
              plan={this.state.selectedPlan}
              leads={80}
              onPlanSelected={leadPlan => this.onPlanSelected(leadPlan)}
            />
            <PlanCard
              plan="enterprise"
              onPlanSelected={leadPlan => this.onPlanSelected(leadPlan)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
