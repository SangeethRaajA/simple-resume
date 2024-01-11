import {
  Typography,
  Button,
  Link,
  Card,
  CardActions,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import imageURL from "../../image/bgimg.jpg";

const HomeView = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${imageURL})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
          color="primary"
        >
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
             <b> Simple Resume Builder</b>
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              This project resume builder that simplifies the process of
              creating, and sharing your resume.
            </Typography>
            <Grid marginTop={15}>
            <Link href={"/create"} color="inherit">
              <Button color="inherit" variant="contained" size="large">
                Create Resume
              </Button>
            </Link>
            <Link href={"/list"} color="inherit">
              <Button color="inherit" variant="contained" size="large">
                List Resume
              </Button>
            </Link>
          </Grid>
          </CardContent>
          
        </Grid>
      </Box>
    </>
  );
};

export default HomeView;
