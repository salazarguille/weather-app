import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, FormHelperText } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  searchInput: {
    padding: theme.spacing(1, 1, 1, 1),
    borderRadius: 8,
    fontSize: 19,
  },
});

const SearchInput = function(props) {
  const { classes, onSearchClick, message, processing } = props;
  const [ zipCode, setZipCode ] = useState('');

  const onClickSearchIcon = (e) => {
    e.preventDefault();
    onSearchClick({}, zipCode);
  };
  const onChange = e => setZipCode(e.target.value);

  const isErrorMessage = message !== undefined && message.hasTypeError();

  return (
    <FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
        <OutlinedInput
            error={isErrorMessage}
            onChange={onChange}
            value={zipCode}
            id="outlined-adornment-search"
            type="number"
            placeholder="Type a ZIP code (USA)"
            className={classes.searchInput}
            disabled={processing}
            startAdornment={
                <InputAdornment position="start">
                <IconButton edge="start">
                    <img src="/images/usa.png" width="32" alt="logo" />
                </IconButton>
                </InputAdornment>
            }
            endAdornment={
                <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickSearchIcon}
                    edge="end"
                >
                    <SearchIcon />
                </IconButton>
                </InputAdornment>
            }
            labelWidth={100}
            aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" error={true} >
          {isErrorMessage ? message.message : ''}
        </FormHelperText>
        
    </FormControl>
  );
}

export default withStyles(styles)(SearchInput);