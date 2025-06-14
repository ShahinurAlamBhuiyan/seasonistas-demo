"use client";
import React, { useState } from "react";
import {
  Grid,
} from "@mui/material";


import ProfileSectionCard from "./profileSectionCard";
import ProfileBarCard from "./topProfilebar";
import BasicInfoCard from "./basicInfoCard";
import AboutUsCard from "./aboutUsCard";
import EducationCard from "./educationCard";
import ExperienceCard from "./experienceCard";

export default function DashboardHome() {
  const skills = [
    { title: "UX Design", level: "Expert" },
    { title: "UI Design", level: "Expert" },
    { title: "User Research", level: "Expert" },
    { title: "Design System", level: "Expert" },
  ];

  const interests = [
    { title: "Technology" },
    { title: "Sports & Fitness" },
    { title: "Law & Ethics" },
    { title: "Public Speaking" },
  ];

  const goals = [
    { title: "Become a senior analyst" },
    { title: "Launch my own startup" },
    { title: "Get a remote tech job" },
    { title: "Improve leadership skills" },
  ];

  return (
    <>
      <Grid container spacing={2}>
        <ProfileBarCard type={"individual"} />



        <BasicInfoCard type={"individual"} />

        <AboutUsCard type={"about"} />
        <ExperienceCard />
        <EducationCard />

        <ProfileSectionCard
          title="Skills"
          description="Add skills to increase the chance of hiring"
          addText="Add Skill"
          data={skills}
          type={"skill"}
          footerText="Show More Skill"
        />
        <ProfileSectionCard
          title="Interests"
          description="Add your interests to let employers understand your passion areas"
          addText="Add Interests"
          data={interests}
          type={"interest"}
          footerText="Show More Interests"
        />
        <ProfileSectionCard
          title="Goals"
          description="Mention your career goals to help employers align with your ambitions"
          addText="Add Goals"
          data={goals}
          type={"goal"}
          footerText="Show More Goals"
        />
      </Grid>
    </>
  );
}
