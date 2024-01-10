import { Grid, Typography, Table, Button } from "@mui/material";

const ListResume = () => {
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
                    <Typography>sds</Typography>
                  </td>
                  <td>
                    <Typography>sds</Typography>
                  </td>
                  <td>
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListResume;
