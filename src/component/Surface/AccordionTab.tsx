import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteButton from "../Buttons/DeleteButton";

type WorkData = {
  work: {
    wname: string;
    role: string;
    sdate: Date;
    edate: Date;
    wdesc: string;
  };
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US");
};

const AccordionTab = (props: WorkData) => {
  const { work } = props;
    const { wname, role, sdate, edate, wdesc } = work;
    return (
      <>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{wname}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{role}</Typography>
              <Typography>{formatDate(sdate)}</Typography>
              <Typography>{formatDate(edate)}</Typography>            
              <Typography>{wdesc}</Typography>
            </AccordionDetails>
            <DeleteButton />
          </Accordion>
        </div>
      </>
    );
};

export default AccordionTab;
