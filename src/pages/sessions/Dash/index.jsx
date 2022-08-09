import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import NavBar from "../../../components/common/NavBar";
import {Typography} from "@mui/material";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import pro from "../../../assets/images/pro.jpg"
import produ from "../../../assets/images/produ.jpg"
import DashNav from "./nav";
import Box from "@material-ui/core/Box";
import BoxSx from "../../../components/common/box";
import LinearProgress from "@material-ui/core/LinearProgress";

// const driver = new URL("../../../assets/driver.png",import.meta.url)
// const car9 = new URL("../../../assets/car9.png",import.meta.url)
// const cus = new URL("../../../assets/cus.png",import.meta.url)
class DashBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid >
                    <DashNav/>

                </Grid>


                <div>

                </div>

            </div>

        )
    }
}

export default DashBoard