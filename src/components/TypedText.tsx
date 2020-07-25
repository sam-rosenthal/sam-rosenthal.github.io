import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';

export default function TypedText(txt: string): JSX.Element {
  const [skillsText, setSkillsText] = React.useState('|');
  const [index, setIndex] = React.useState(0);
  const [blink, setBlinker] = React.useState(true);

  useEffect(() => {
    if (index < txt.length) {
      setIndex(index + 1);
      setTimeout(function () {
        typeWriter(index, blink, txt);
      }, 60);
    } else {
      setBlinker(!blink);
      setTimeout(function () {
        typeWriter(index, blink, txt);
      }, 500);
    }
  }, [skillsText]);

  function typeWriter(index: number, blink: boolean, txt: string): void {
    if (index < txt.length) {
      setSkillsText(skillsText.substring(0, skillsText.length - 1) + txt.charAt(index) + '|');
    } else {
      if (blink) {
        setSkillsText(skillsText.substring(0, skillsText.length - 1));
      } else {
        setSkillsText(skillsText + '|');
      }
    }
  }

  return (
    <Typography component="h1" variant="h2" id="skills">
      {skillsText}
    </Typography>
  );
}
