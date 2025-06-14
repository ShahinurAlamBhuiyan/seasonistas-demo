"use client";
import React, { useState } from "react";
import {
  Box,
  Avatar,
  Button,
  Typography,
  Chip,
  Stack,
  CircularProgress,
  Grid,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import cardImage from "~/app/assets/card_image.png";
import Image from "next/image";
import { Divider } from "@mui/material";
import barGraph from "~/app/assets/barGraph.png"; // Your green bar graph icon
import arrowUp from "~/app/assets/arrowUp.png";

import ProfileSectionCard from "./profileSectionCard";
import ProfileBarCard from "./topProfilebar";
import PercentageCard from "./profilePercentageCard";
import GraphCard from "./graphCards";
import BasicInfoCard from "./basicInfoCard";
import AboutUsCard from "./aboutUsCard";
import EducationCard from "./educationCard";
import ExperienceCard from "./experienceCard";
import LocationCard from "./LocationCard";
import AllJobs from "./AllJobsCard";
import AllPeople from "./AllPeople";

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
    <Grid container>
      <ProfileBarCard type={"company"} />
      <GraphCard />
      <AboutUsCard type={"overview"} />
      <BasicInfoCard type={"company"} />
      <AllJobs />
      <AllPeople />
      <LocationCard />
    </Grid>
  );
}
