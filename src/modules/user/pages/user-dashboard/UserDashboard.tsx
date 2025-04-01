import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ClaimRequestData from "./ClaimRequestData";
import PieChartComponent from "./PieChartComponent";
import Layout from "../../../../shared/layouts/Layout";
import { Grid, Box } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder"; // Sử dụng FolderIcon thay vì Folder

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function UserDashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Box className="dashboard-container">
        {/* Swiper Slider */}
        <Box className="items-cards">
          <Box className="request-card">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <div className="requests-cards" onClick={() => navigate("/user/my-requests")}>
                  <div className="requests-card-left">
                    <p>My claims</p>
                    {/* <p>{count}</p> */}
                  </div>
                  <div className="requests-card-right">
                    <FolderIcon sx={{ fontSize: 50 }} />
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* PieChartComponent */}
        <Box className="chart-wrapper">
          <Box className="chart-container">
            <PieChartComponent />
          </Box>

          {/* ClaimRequestData */}
          <Box className="bar-chart">
            <ClaimRequestData />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
