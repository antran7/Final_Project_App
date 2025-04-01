import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = "https://management-claim-request.vercel.app/api";

interface Claim {
  _id: string;
  claim_status: string;
}

function PieChartComponent() {
  const [loading, setLoading] = useState(true);
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    const fetchClaims = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        setLoading(true);
        const response = await axios.post(
          `${API_URL}/claims/claimer-search`,
          {
            searchCondition: {
              keyword: "",
              claim_status: "",
              claim_start_date: "",
              claim_end_date: "",
              is_delete: false,
            },
            pageInfo: { pageNum: 1, pageSize: 100 },
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.data.success) {
          setClaims(response.data.data.pageData);
        } else {
          console.error("Error fetching claims: API returned success=false");
        }
      } catch (error) {
        console.error("Error fetching claims:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClaims();
  }, []);

  const processClaimsData = () => {
    const statusCounts: Record<string, number> = {
      pending: 0,
      approved: 0,
      rejected: 0,
      paid: 0,
      cancelled: 0,
      draft: 0,
    };

    claims.forEach((claim) => {
      const normalizedStatus = claim.claim_status?.trim().toLowerCase();
      switch (normalizedStatus) {
        case "pending approval":
          statusCounts.pending++;
          break;
        case "approved":
          statusCounts.approved++;
          break;
        case "rejected":
          statusCounts.rejected++;
          break;
        case "paid":
          statusCounts.paid++;
          break;
        case "canceled": // API có thể trả về `canceled` thay vì `cancelled`
        case "cancelled":
          statusCounts.cancelled++;
          break;
        case "draft":
          statusCounts.draft++;
          break;
        default:
          break;
      }
    });

    return Object.values(statusCounts);
  };

  const pieChartData = {
    labels: ["Pending", "Approved", "Rejected", "Paid", "Cancelled", "Draft"],
    datasets: [
      {
        label: "Claim Requests",
        data: processClaimsData(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(36, 250, 118, 0.7)",
          "rgba(250, 89, 36, 0.7)",
          "rgba(97, 80, 74, 0.7)",
        ],
      },
    ],
  };

  return (
    <div className="pie-chart-container">
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>Loading...</p>
      ) : claims.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "18px" }}>No claim data available</p>
      ) : (
        <Pie data={pieChartData} />
      )}
    </div>
  );
}

export default PieChartComponent;
