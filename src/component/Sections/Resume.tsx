import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@mui/system/styled";
import DownloadIcon from "@mui/icons-material/Download";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: "4px",
}));

const Resume = () => {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const capture = document.querySelector(".simple-resume");
    if (capture) {
      setLoader(true);
      html2canvas(capture as HTMLElement).then((canvas) => {
        const imgData = canvas.toDataURL("img/png");
        const doc = new jsPDF();
        const componentWidth = doc.internal.pageSize.getWidth();
        const componentHeight = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
        setLoader(false);
        doc.save("resume.pdf");
      });
    }
  };

  return (
    <>
      <div className="wrapper">
        <Box sx={{ flexGrow: 1 }}>
          <div className="simple-resume">
            <Grid container>
              <Grid xs={2} md={3} sx={{ width: 150, height: 150 }}>
                <Item>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    sx={{ width: 150, height: 150 }}
                  />
                </Item>
              </Grid>
              <Grid xs={4} md={9}>
                <Item>
                  <Typography>Profile </Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={2} md={3}>
                <Item>
                  <Typography>Contact </Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={4} md={9}>
                <Item>
                  <Typography>Work Experience </Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={2} md={3}>
                <Item>
                  <Typography>Skills </Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={4} md={9}>
                <Item>
                  <Typography>Education</Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={2} md={3}>
                <Item>
                  <Typography>Extracurricular </Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
              <Grid xs={4} md={9}>
                <Item>
                  <Typography>Achivement</Typography>
                  <hr />
                  <p></p>
                </Item>
              </Grid>
            </Grid>
          </div>
          <Grid container justifyContent="flex-end">
            <Button
              variant="contained"
              endIcon={<DownloadIcon />}
              onClick={downloadPDF}
            >
              {loader ? <span>Downloading</span> : <span>Download</span>}
            </Button>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Resume;
