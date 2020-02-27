import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Box } from '@material-ui/core';
import { Brightness5, Brightness7, WbSunny } from '@material-ui/icons';

const styles = theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CityDetails = function (props) {
  const { city, uvi, classes } = props;

  return (
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Search Result
          </Typography>
          <Typography variant="h5" component="h2">
            {city.country} / {city.name} ({city.timezone / (60 * 60)}h)
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Coords (lat/lon): {city.coord.lat} / {city.coord.lon}
          </Typography>
          <Box display="flex" flexDirection="row" p={0} m={0}>
            <Box width={1/3} flexDirection="column">
              <Typography variant="body2" component="p" color="textSecondary">
                Sunnrise
              </Typography>
              <Typography
                  component="p"
                  variant="body2"
                  align="center"
              >
                <Brightness5/>
              </Typography>
              {new Date(city.sunrise).toLocaleTimeString()}
            </Box>
            <Box width={1/3} flexDirection="column">
              <Typography variant="body2" component="p" color="textSecondary">
                Sunset
              </Typography>
              <Typography
                  component="p"
                  variant="body2"
                  align="center"
              >
                <Brightness7/>
              </Typography>
              {new Date(city.sunset).toLocaleTimeString()}
            </Box>
            <Box width={1/3} flexDirection="column">
              <Typography variant="body2" component="p" color="textSecondary">
                UV Index
              </Typography>
              <Typography
                  component="p"
                  variant="body2"
                  align="center"
              >
                <WbSunny/>
              </Typography>
              {uvi.value}
            </Box>
          </Box>
        </CardContent>
    </Card>
  );
}

export default withStyles(styles)(CityDetails);