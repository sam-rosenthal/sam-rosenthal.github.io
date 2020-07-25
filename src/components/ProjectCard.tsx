import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Box, Link, Grid, Typography, Collapse } from '@material-ui/core';
import { ImageCarousel, carouselProps } from './ImageCarousel';
import { TechChips, techChipsProp } from './TechChips';

interface cardHeaderProps {
  href: string;
  title: string;
  date: string;
  icon: string;
}

interface projectCardProps {
  id: string;
  header: cardHeaderProps;
  body: JSX.Element;
  techIcons: techChipsProp;
  techDetails: JSX.Element | null;
  carouselImages: carouselProps;
}

export default function ProjectCard(props: projectCardProps): JSX.Element {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item id={props.id}>
      <Card>
        <CardHeader
          title={
            props.header.href !== '' ? (
              <Link href={props.header.href} target="_blank" variant="h4">
                {props.header.title}
              </Link>
            ) : (
              <Typography variant="h4">{props.header.title}</Typography>
            )
          }
          subheader={props.header.date}
          avatar={<Avatar variant="rounded" src={props.header.icon}></Avatar>}
          style={{ paddingBottom: '0px' }}
        />
        <div style={{ marginLeft: '56px', paddingTop: '0px' }}>
          <CardContent>
            {props.body}
            <Box component="ul" style={{ paddingLeft: '0px', marginTop: '8px' }}>
              {props.techDetails !== null && (
                <Typography variant="h6">
                  <Link component="button" variant="body1" onClick={handleExpandClick}>
                    <b>{expanded === false ? 'Show' : 'Hide'} technology details</b>
                  </Link>
                </Typography>
              )}
              <TechChips {...props.techIcons} />
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Typography variant="h6">
                <b>Technologies details:</b>
              </Typography>
              {props.techDetails}
            </Collapse>
            <ImageCarousel {...props.carouselImages} />
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}
