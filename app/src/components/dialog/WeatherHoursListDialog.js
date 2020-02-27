import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core';
import WeatherHoursList from '../list/WeatherHoursList';

const styles = theme => ({});

const WeatherHoursListDialog = function (props) {
  const { onClose, selectedItem, open, city } = props;
  
  const handleClose = () => {
    onClose(selectedItem);
  };

  if(!selectedItem) {
    return <></>;
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      open={open}
      maxWidth="lg"
      >
      <DialogTitle id="alert-dialog-slide-title" align="center">
        {`Weather in ${city.country} / ${city.name}`}
      </DialogTitle>
      <DialogContent>
        <WeatherHoursList
          selectedItem={selectedItem}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(WeatherHoursListDialog);