import React from 'react';
import { Chip, Avatar } from '@material-ui/core';

export interface techChip {
  icon: string | null;
  label: string;
}

export interface techChipsProp {
  data: Array<techChip>;
}

export function TechChips(techChipsProp: techChipsProp): JSX.Element {
  return (
    <>
      {techChipsProp.data.map((d: techChip) => {
        return d.icon != null ? (
          <Chip
            key={d.label}
            avatar={<Avatar variant="square" src={d.icon}></Avatar>}
            component="a"
            target="_blank"
            label={d.label}
            clickable
            style={{ margin: '2px' }}
          />
        ) : (
          <Chip
            key={d.label}
            component="a"
            // href={d.href}
            target="_blank"
            label={d.label}
            clickable
          />
        );
      })}
    </>
  );
}
