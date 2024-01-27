import { useEffect, useState } from "react";
import { IResume } from "../../interfaces/resume.interface";
import {
  Box,
  Button,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DeleteModal } from "../atmos/DeleteModal/DeleteModal";
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const [resumes, setResumes] = useState<IResume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | any>("");

  //navigate page from list
  let navigate = useNavigate();

  //fetch resume list
  const fetchData = async () => {
    const response = await fetch(
      "http://simple-resume-backend.eu-north-1.elasticbeanstalk.com/api/v1/resume/list"
    );
    const data = await response.json();
    setResumes(data.data.resumeResponseDto);
    console.log(data);

    if (!response.ok) {
      const msg = `Error occured : ${response.status}`;
      throw new Error(msg);
    }
  };

  // Delete funtion
  const onClickDeleteResume = (id: any) => {
    setDeleteId(id);
    setModalOpen(true);
    console.log(deleteId);
  };

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []);

  // Render your data here
  return (
    <>
      <DeleteModal
        deleteId={deleteId}
        isOpen={isModalOpen}
        onClickClose={() => setModalOpen(false)}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          display="flex"
          justifyContent="left"
          alignItems="center"
          margin={2}
        >
          <Typography variant="h4">Resume List Details</Typography>
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          <div>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={2} variant="head">
                    Name
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    Title
                  </TableCell>
                  <TableCell align="center" colSpan={2}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              {isLoading ? (
                <p>Loading data...</p>
              ) : (
                <TableBody>
                  {resumes.map((resume) => (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={resume.id}
                    >
                      <TableCell align="center" colSpan={2}>
                        {resume.firstname} {resume.lastname}
                      </TableCell>
                      <TableCell align="center" colSpan={2}>
                        {resume.title}
                      </TableCell>
                      <TableCell align="center" colSpan={2}>
                        <Stack
                          spacing={1}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Button
                            variant="contained"
                            color="success"
                            startIcon={<VisibilityIcon />}
                            size="medium"
                            onClick={() => {
                              navigate(`/view/${resume?.id}`);
                            }}
                          >
                            View
                          </Button>
                          <Button
                            variant="contained"
                            color="warning"
                            startIcon={<EditIcon />}
                            size="medium"
                            onClick={() => {
                              navigate(`/edit/${resume?.id}`);
                            }}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            size="medium"
                            onClick={() => {
                              onClickDeleteResume(resume?.id);
                            }}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              )}
            </Table>
          </div>
        </Grid>
      </Box>
    </>
  );
};

export default ListView;
