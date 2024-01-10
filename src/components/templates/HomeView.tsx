import {
  Grid,
  Typography,
  Button,
  Link,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";

const HomeView = () => {
  const imageURL = "../../image/bgimg.jpg";

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
        }}
      ><img src={imageURL}/> 
        {/* <img src={image}> */}
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CardMedia
            // sx={{ height: 140 }}
            // backgroundImage: `url(${imageURL})`,
            image={imageURL}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              Simple Resume Builder
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              This project resume builder that simplifies the process of
              creating, and sharing your resume.
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={"/create"} color="inherit">
              <Button color="inherit" variant="outlined" size="large">
                Create Resume
              </Button>
            </Link>
            <Link href={"/list"} color="inherit">
              <Button color="inherit" variant="outlined" size="large">
                List Resume
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default HomeView;
