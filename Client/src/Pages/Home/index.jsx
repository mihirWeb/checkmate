import React from "react";
import DropdownTeamMember from "../../Components/DropdownTeamMember";
import "./index.css";
import Button from "../../Components/Button";
import Link from "../../Components/Link";
import Avatar from "../../Components/Avatar/Avatar";
import avatarImage from "../../assets/Images/avatar_placeholder.png";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <DropdownTeamMember />
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "2rem" }}
      >
        <h4>Buttons</h4>
        <div>
          <Button level="primary" label="Primary" />
          <Button level="secondary" label="Secondary" />
          <Button level="tertiary" label="Tertiary" />
          <Button level="error" label="Error" />
        </div>
        <h4>Disabled Buttons</h4>
        <div>
          <Button level="primary" label="Primary" disabled />
          <Button level="secondary" label="Secondary" disabled />
          <Button level="tertiary" label="Tertiary" disabled />
          <Button level="error" label="Error" disabled />
        </div>
        <div>
          <Link
            level="tertiary"
            label="Tertiary Link"
            url={"https://www.google.com"}
          />
        </div>
        <h4>Avatar</h4>
        <div style={{ display: "flex" }}>
          <Avatar src={avatarImage} firstName="Alex" lastName="Holliday" />
          <Avatar firstName="Alex" lastName="Holliday" />
          <Avatar
            src={avatarImage}
            firstName="Alex"
            lastName="Holliday"
            small
          />
          <Avatar firstName="Alex" lastName="Holliday" small />
        </div>
      </div>
    </>
  );
};

export default Home;
