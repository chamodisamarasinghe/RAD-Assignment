import React from 'react'
import {Grid} from "@mui/material";
import RubberBtn from "../../../components/common/RubberBandBtn";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Reg from "../../../assets/images/reg.jpg"
import Book from "../../../assets/images/book.jpg"
import produ from "../../../assets/images/produ.jpg"
import cart from "../../../assets/images/cart.jpg"
import DashNav from "../../sessions/Dash/nav";

const Dash = ({}) => {


    return (
        <div>
            <Grid >
                <DashNav/>

            </Grid>



            <Grid item lg={12} xs={12} sm={12} md={12}>

            </Grid>
            <Card sx={{ maxWidth: 345,ml:25,mt:10 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Reg}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Users
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            43
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:75,mt:-29 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={produ}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Products
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           60
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {/*Active Bookings*/}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {/*5*/}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>




            <Card sx={{ maxWidth: 345,ml:125,mt:-29 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={cart}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Cart
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            12
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {/*Active Bookings*/}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {/*5*/}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>


        </div>
    )

}

export default Dash