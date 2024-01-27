import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

interface IDeleteModal {
  deleteId: string;
  isOpen: boolean;
  onClickClose: () => void;
}

const DeleteModal = ({ deleteId, isOpen, onClickClose }: IDeleteModal) => {

  // DELETE request using fetch inside useEffect React hook
   const onClickDeleteResume = async () => {
    const fetchData = async () => {
      const response = await fetch(
        `http://simple-resume-backend.eu-north-1.elasticbeanstalk.com/api/v1/resume/delete/${deleteId}`,
        { method: "DELETE" }
      )
      if (response.ok) {
        console.log("Resume deleted successfully");
      } else {
        console.error(`Error deleting resume. Status: ${response.status}`);
      }    
    };
    await fetchData(); 
    onClickClose(); 
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClickClose}
      style={{ backgroundColor: "grey", color: "white" }}
    >
      <DialogTitle>Delete Resume</DialogTitle>
      <DialogContent>
        <p>Are you sure you want to delete resume?</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClickDeleteResume}
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button onClick={onClickClose} variant="contained" color="warning">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { DeleteModal };
