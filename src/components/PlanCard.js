import React from "react";
import "./PlanCard.scss";
export default function PlanCard({ plan, leads, onPlanSelected }) {
  const leadPlan = plan[`qualify_${leads}`];
  const isEnterprise = plan === "enterprise";
  const isMostPopular = !isEnterprise && leadPlan.leads_per_month === 40;
  return (
    <div className="plan-card">
      <div className={`most-popular-tag ${isMostPopular ? "visible" : ""}`}>
        <span>Most Popular!</span>
      </div>
      <div className="card-header">
        <span>
          {isEnterprise
            ? "Enterprise"
            : `Qualified ${leadPlan.leads_per_month}`}
        </span>
      </div>

      {isEnterprise ? (
        <div className="card-content enterprise">
          <p>
            Want more than 80 <br />
            qualified leads each <br />
            &emsp;&emsp;&emsp;month?
          </p>
        </div>
      ) : (
        <div className="card-content">
          <h1>{`$${leadPlan.price_per_live_transfer}`}</h1>
          <p>Per Qualified Lead</p>
          <hr />
          <p>Qualified Leads Per Month</p>
          <p>{leadPlan.leads_per_month}</p>
          <hr />
          <p>Platform Fee Per Month</p>
          <p>{`$${leadPlan.platform_price}`}</p>
        </div>
      )}
      {!isEnterprise && (
        <div className="card-footer">
          <span>{`$${leadPlan.package_price}/mo`}</span>
        </div>
      )}
      <button
        className={`card-button ${isMostPopular ? "invert" : ""}`}
        onClick={() => onPlanSelected(leadPlan)}
      >
        {isEnterprise ? "Get In Touch" : "Start Your Trial"}
      </button>
    </div>
  );
}
