import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, Box, Typography } from '@material-ui/core';
import WeatherHourListItem from '../item/WeatherHourListItem';
import { getDayTitle } from '../../core/utils/dates';

const styles = theme => ({});

const WeatherHoursList = function (props) {
  const { selectedItem } = props;
  const date = new Date(selectedItem.date);
  return (
    <>
      <Box flexDirection="row" p={1} m={0} textAlign="center" alignContent="center">
          <Typography color="textPrimary" font={18}>
            {getDayTitle(date)}
          </Typography>
      </Box>
      <List>
        {selectedItem.hours.map((hour, index) => <WeatherHourListItem item={hour} key={index}/>)}
      </List>
    </>
  );
};

export default withStyles(styles)(WeatherHoursList);