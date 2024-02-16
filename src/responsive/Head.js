import { Typography, Box, Grid } from "@mui/material";

const Head = () => {
    return (
        <>
            {/* <Box sx={{border:"solid red 1px"}}>
                <Box sx={{border:"solid 2px red",width:"300px",display:'inline-block'}}>
                    <Typography variant="h5" sx={{color:"red",display:"flex"}} sm={1}xs={1} md={2} lg={1}> hello everyone</Typography>
                </Box>
                <Box sx={{border:"solid 2px red",width:"300px",}}>
                    <Typography variant="h5" sx={{color:"red"}} sm={1}xs={1} md={2} lg={1}> hello everyone</Typography>
                </Box>
            </Box> */}
            <Box sx={{border:"solid 2px black",height:"50px"}}>
                <Grid sx={{border:"solid 1px red",width:"300px",height:"40px",flexDirection:"row",marginleft:"50px"}}>hello</Grid>
                <Grid sx={{border:"solid 1px red",width:"300px",height:"40px",flexDirection:"row"}}>world</Grid>
                {/* <Box sx={{border:"solid 2px red"}}></Box>
                <Box sx={{border:"solid 2px red"}}></Box>
                <Box sx={{border:"solid 2px red"}}></Box>
                <Box sx={{border:"solid 2px red"}}></Box> */}
            </Box>
        </>
    );
};

export default Head;
