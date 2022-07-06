import React from "react";
import "./style.css";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function RewardThreeComponent() {
  return (
    <div className="rewardmainthree">
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Rules" key="1" className="tabb">
            <div>
              <p>
                1. Stake your BTR to increase the amount you can invest in our
                lock-up investments whenever you like. 1 BTR entitles you to the
                <br /> equivalent of 0.4 USD.
              </p>
              <p>
                2. Your BTR will be locked at the same time as the principal.
                When the investment matures and the interest is disbursed, your
                <br /> BTR will be returned to your curs
              </p>
              <p>
                3. The BTR to be locked up will be taken from your current
                account. Please ensure the BTR is available in advance.
              </p>
              <p>4. Eligibility: All users are eligible to participate.</p>
              <p>
                5. Final interepretation of this activity belongs to Bitrue.
                Bitrue reserves the right to adjust the rules of the event at
                any time
                <br /> based on market and operating co
              </p>
            </div>
          </TabPane>
          <TabPane tab="Faq's" key="2" className="tabb">
            <div>
              <p>
                1. Stake your BTR to increase the amount you can invest in our
                lock-up investments whenever you like. 1 BTR entitles you to the
                <br /> equivalent of 0.4 USD.
              </p>
              <p>
                2. Your BTR will be locked at the same time as the principal.
                When the investment matures and the interest is disbursed, your
                <br /> BTR will be returned to your curs
              </p>
              <p>
                3. The BTR to be locked up will be taken from your current
                account. Please ensure the BTR is available in advance.
              </p>
              <p>4. Eligibility: All users are eligible to participate.</p>
              <p>
                5. Final interepretation of this activity belongs to Bitrue.
                Bitrue reserves the right to adjust the rules of the event at
                any time
                <br /> based on market and operating co
              </p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default RewardThreeComponent;
