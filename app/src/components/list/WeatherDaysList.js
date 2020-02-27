import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, Box, Typography } from '@material-ui/core';
import WeatherDayListItem from '../item/WeatherDayListItem';//DayItemList
import WeatherHoursListDialog from '../dialog/WeatherHoursListDialog';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function WeatherItemsList(props) {
  const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState();
  const [open, setOpen] = useState(false);
  const { items, city } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = item => {
    setSelectedItem(item);
    setOpen(true);
  };

  return (
    <>
      <Box
          width={1}
          flexDirection="column"
          textAlign="center"
          p={1}>
        <Typography className={classes.pos} color="textSecondary">
          Result: {items.length} day(s) found.
        </Typography>
        <List className={classes.root}>
          {
            items.map( (item, index) => <WeatherDayListItem item={item} key={index} onClickItem={ () => handleOpen(item)} />)
          }
        </List>
      </Box>
      <WeatherHoursListDialog selectedItem={selectedItem} city={city} open={open} onClose={handleClose} />
    </>
  );
}