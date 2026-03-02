"use client";

import { useState } from "react";
import { IconChevronRight, TablerIcon } from "@tabler/icons-react";
import { Box, Collapse, Group, UnstyledButton } from "@mantine/core";
import classes from "./NavbarLinksGroup.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinksGroupLinksProps {
  label: string;
  link: string;
  icon: TablerIcon;
}

interface LinksGroupProps {
  icon?: TablerIcon;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: LinksGroupLinksProps[];
}

function NavLink(link: LinksGroupLinksProps) {
  const pathname = usePathname();

  const isActive = pathname === link.link;

  return (
    <Link
      key={link.label}
      className={`${classes.link} ${isActive ? classes.active : ""}`}
      href={link.link}
    >
      <link.icon size={16} />
      <p className="text-[13px]">{link.label}</p>
    </Link>
  );
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const pathname = usePathname();

  const isActive = pathname === link;

  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <NavLink {...link} key={link.label} />
  ));

  if (!hasLinks)
    return (
      <Link
        key={label}
        className={`${classes.mainlink} ${isActive ? classes.active : ""}`}
        href={link || "/"}
      >
        {Icon && <Icon size={16} />}
        <p className="text-[13px]">{label}</p>
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
