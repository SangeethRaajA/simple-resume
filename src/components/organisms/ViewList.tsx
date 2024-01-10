import { IResume } from "../../interfaces/resume.interface";
import { useDispatch } from "react-redux";
import { Alert, Button, Grid, Table, Typography } from "@mui/material";

interface ILView {
  data: IResume[];
}

const ViewList = ({ data }: ILView) => {
  const dispatch: any = useDispatch();

  return (
    <>
      <div>
        <Grid
          display="flex"
          justifyContent="left"
          alignItems="center"
          margin={2}
        >
          <Typography variant="h4">List All Resume</Typography>
        </Grid>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div>
            {data.length > 0 ? (
              data.map((detail: IResume) => {
                return (
                  <Table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Typography>{detail.firstname}</Typography>
                        </td>
                        <td>
                          <Typography>{detail.title}</Typography>
                        </td>
                        <td>
                          <Button>Delete</Button>
                          <Button>Edit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                );
              })
            ) : (
              <Alert variant="standard" color="warning">
                Loading
              </Alert>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewList;
