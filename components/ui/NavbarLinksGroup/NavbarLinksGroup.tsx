"use client";

import { useState } from "react";
import { IconChevronRight, TablerIcon } from "@tabler/icons-react";
import { Box, Collapse, Group, UnstyledButton } from "@mantine/core";
import classes from "./NavbarLinksGroup.module.css";
import Link from "next/link";

interface LinksGroupProps {
  icon?: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string; icon: TablerIcon }[];
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Link key={link.label} className={classes.link} href={link.link}>
      <link.icon size={16} />
      <p className="text-[12px]">{link.label}</p>
    </Link>
  ));

  if (!hasLinks)
    return (
      <Link key={label} className={classes.mainlink} href={"/"}>
        {Icon && <Icon size={16} />}
        <p className="text-[12px]">{label}</p>
      </Link>
    );

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group justify="space-between" gap={0}>
          <h1>{label}</h1>
          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              size={16}
              style={{ transform: opened ? "rotate(-90deg)" : "none" }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
}
