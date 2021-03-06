import React, { useState } from "react";
import { GetServerSideProps } from "next";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../components/TabPanel";
import Head from "next/head";
import FixtureList from "../components/FixtureList";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Home({ skyFixtures, btFixtures }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Football on TV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="TV channels"
          >
            <Tab label="Sky Sports" />
            <Tab label="BT Sports" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FixtureList fixtures={skyFixtures} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FixtureList fixtures={btFixtures} />
        </TabPanel>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const btres = await fetch("http://localhost:3000/api/bt");
  const btRequest = await btres.json();

  const skyres = await fetch("http://localhost:3000/api/sky");
  const skyRequest = await skyres.json();

  return {
    props: {
      skyFixtures: skyRequest,
      btFixtures: btRequest,
    },
  };
};
