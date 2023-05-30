import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";
import Chip from "@mui/material/Chip";

const About = () => {
  return (
    <>
      <h3>Introduction</h3>
      <p>
        My name is praveen reddy, I like to develop full stack web and mobile
        applications
      </p>
      <h3 style={{ marginBottom: "-3px" }}>Tech Stack Used</h3>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="React" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Nodejs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CircleIcon />
                </ListItemIcon>
                <ListItemText primary="Django" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          paddingBottom: "4px",
        }}
      >
        <Chip
          label="Made By Praveen"
          color="primary"
          variant="outlined"
          sx={{ fontWeight: "700" }}
        />
      </div>
    </>
  );
};

export default About;
