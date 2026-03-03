import { Dispatch, SetStateAction, useState } from "react";
import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import classes from "./FloatingIndicator.module.css";

interface MantineFloatingIndicator {
  data: string[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export default function MantineFloatingIndicator({
  data,
  active,
  setActive,
}: MantineFloatingIndicator) {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(item)}
      mod={{ active: active === item }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
}
