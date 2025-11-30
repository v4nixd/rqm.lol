import React from "react";

export type LinkItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export type HeaderActivityItem = {
  href?: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
};

export type ActivityItem = {
  color: string;
  title: string;
  description: string;
  imagePath?: string;
};

export type BadgeColor =
  | "green"
  | "red"
  | "blue"
  | "yellow"
  | "purple"
  | "neutral";

// TODO: Move all Props for components here
