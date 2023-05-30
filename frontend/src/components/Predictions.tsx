import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface Prediction {
  Date: string;
  Cases: number;
}

function Predictions() {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  //127.0.0.1:8000/predict/
  useEffect(() => {
    fetch("http://20.219.13.160:8001/predict/")
      .then((response) => response.json())
      .then((resData) => {
        setPredictions(resData);
        console.log(resData);
      });
  }, []);

  return (
    <div style={{ marginTop: "10px" }}>
      <h3>
        The Dataset that I have been using for predictions has stopped updating
        data from 10/03/2023 onwards
      </h3>
      <h4>
        The Below Table displays the predictions of future cases for the next 10
        days from current date
      </h4>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#41B3A3" }}>
            <TableRow>
              <TableCell
                sx={{
                  color: "text.primary",
                  fontSize: 28,
                  fontWeight: "medium",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  color: "text.primary",
                  fontSize: 28,
                  fontWeight: "medium",
                }}
                align="left"
              >
                Cases
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: "#74F0ED" }}>
            {predictions?.map((data) => (
              <TableRow
                key={data.Date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    color: "text.primary",
                    fontSize: 28,
                    fontWeight: "medium",
                  }}
                >
                  {data.Date}
                </TableCell>
                <TableCell
                  sx={{
                    color: "text.primary",
                    fontSize: 28,
                    fontWeight: "medium",
                  }}
                  align="left"
                >
                  {data.Cases}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Predictions;
