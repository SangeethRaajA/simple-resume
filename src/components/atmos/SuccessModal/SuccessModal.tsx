import { Dialog, DialogContent, Button, DialogActions } from "@mui/material";

const SuccessModal = ({ isOpen, onClose, message }: any) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogActions
        style={{
          padding: "16px",
        }}
      >
        <DialogContent>
          <p>{message}</p>
        </DialogContent>
        <Button onClick={onClose} variant="contained" color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessModal;