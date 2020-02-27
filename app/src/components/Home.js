import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import SearchInput from './common/SearchInput';
import SearchResult from './common/SearchResult';
import { searchSelector, searchAction } from '../core/adapters/redux/weather/search';

const styles = theme => ({});

const Home = function (props) {
    const { search, dispatchSearch } = props;

    const onSearchClick = (event, zipCode) => {
        dispatchSearch({ country: 'us', zipCode });
    };
    return (
        <>
            <Box
                width={1}
                flexDirection="row"
                textAlign="center"
                p={3}
                >
                <Typography component="h1" variant="h4">
                    Weather App
                </Typography>
                <Divider />
            </Box>
            <Box
                width={1}
                flexDirection="row"
                textAlign="center"
                p={2}>
                <SearchInput
                    onSearchClick={onSearchClick}
                    message={search.message}
                    processing={search.processing}
                />
            </Box>
            <SearchResult
                result={search}
            />
        </>
    );
};
const StyledHome = withStyles(styles)(Home);
const mapStateToProps = (appState) => {
    return {
        search: searchSelector(appState),
    }
}; 
const mapDispatchToProps = {
    dispatchSearch: searchAction,
}
export default connect(mapStateToProps, mapDispatchToProps)(StyledHome);
  