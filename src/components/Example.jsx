import React, { useState } from "react";
import { Tooltip } from "reactstrap";

function Example(args) {
  console.log(args);
  const [tooltipOpen, setTooltipOpen] = useState(false); // creating tooltipopen state
  const toggle = () => setTooltipOpen(!tooltipOpen); //toggling tooltip from false to true

  return (
    <div>
      <Tooltip
        {...args}
        isOpen={tooltipOpen}
        target={args.name}
        toggle={toggle}
      >
        {args.original}
      </Tooltip>
    </div>
  );
}

export default Example;
