import React from "react";

import './styles.css';

// import components
import Header from "./Header";
import MapSelection from "./MapSelection";
import AccountNavigation from "./AccountNavigation";

// customize theme
import { MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#147E7D",
    },
    secondary: {
      main: "#C73E4E",
    },
  },
});

/* Component for the Home page */
class Home extends React.Component {
/*
  state = {
    username: "username"
  }
*/
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AccountNavigation /*username={ this.state.username }*/ />
        <Header />
        <MapSelection />
      </MuiThemeProvider>
    );
  }
}

export default Home;
