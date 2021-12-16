import Checkbox from "@mui/material/Checkbox";
import Paper from '@mui/material/Paper';
import './list.css'

function Lista({ list }) {
  return (
    <div className="card">
      <Paper elevation={8}>
          {list}
          <Checkbox {...list} />
      </Paper>
    </div>
  );
}

export default Lista;
