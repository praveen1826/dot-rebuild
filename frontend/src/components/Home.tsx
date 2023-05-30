import { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Home = () => {
  const [cases, setCases] = useState<string>("");
  const [new_cases, setNewCases] = useState<string>("");
  const [deaths, setDeaths] = useState<string>("");
  const [vaccine, setVaccine] = useState<string>("");
  const [new_deaths, setNewDeaths] = useState<string>("");
  const [population, setPopulation] = useState<string>("");
  const [news, setNews] = useState<string>("");
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((response) => response.json())
      .then((resData) => {
        setCases(resData.total_cases);
        setNewCases(resData.new_cases);
        setDeaths(resData.total_deaths);
        setVaccine(resData.people_vaccinated);
        setNewDeaths(resData.new_deaths);
        setPopulation(resData.population);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((data) => {
        setNews(
          data.foo
            .split("\n")
            .join("<br /> ")
            .split("Disease Outbreak News")
            .join("")
        );
      });
  }, []);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          backgroundColor: "#FFCA42",
          marginTop: "10px",
          paddingBottom: "20px",
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Covid Cases In India
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  New Cases
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {new_cases}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Total Cases
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {cases}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Total Deaths
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {deaths}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  New Deaths
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {new_deaths}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Vaccinated
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {vaccine}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item lg={4} xl={4}>
            <Card variant="outlined" sx={{ minWidth: 275, minHeight: 175 }}>
              <CardContent>
                <Typography variant="h4" component="div">
                  Population
                </Typography>
                <Typography
                  sx={{ mb: 1.5, fontSize: 25 }}
                  color="text.secondary"
                >
                  {population}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          backgroundColor: "#00C2FF",
          marginTop: "10px",
          paddingBottom: "20px",
          paddingTop: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Current Global Outbreaks</h1>
        <div>{ReactHtmlParser(news)}</div>
      </Container>
    </>
  );
};

export default Home;
