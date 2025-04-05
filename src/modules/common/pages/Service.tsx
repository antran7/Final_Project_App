import React, { useEffect } from 'react';
import Layout from '../../../shared/layouts/Layout';
import Footer from '../../../shared/components/layoutComponent/Footer';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';

const ServicePage: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <Layout>
      <div className='service-page'>
        <div className='bg-[url("https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover bg-center bg-no-repeat flex flex-col items-center min-h-[55vh] relative mb-[15%]'>
          <div className='w-1/2 text-center text-white'>
            <h1 className='text-[50px] font-bold mt-[50px] mb-[30px] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.3)]'>
              Affordable Claiming Services Tailored For You
            </h1>
            <p className='text-[18px] mt-[20px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque illo rem asperiores quas doloribus, consequuntur laborum optio dolor dolorum vel, ut minima obcaecati odio. Consectetur unde iusto consequuntur inventore!
            </p>
          </div>
          <div className='flex justify-evenly w-full gap-[30px] absolute -bottom-[15%]'>
            <div className='bg-[#FEFEFE] rounded-[20px] text-[#88B1C1] border border-dashed border-[#88B1C1] text-center w-[300px] pt-[30px] pb-[15px] px-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] will-change-transform group'>
              <DescriptionIcon className="service-icon group-hover:rotate-[360deg] group-hover:scale-[1.1] transition-transform duration-[600ms] ease-in-out" sx={{ fontSize: "4em" }} />
              <h3 className='font-bold mt-[20px] mb-[10px]'>Claim Request Management</h3>
              <p>Create, track, and manage reimbursement requests efficiently.</p>
            </div>
            <div className='bg-[#FEFEFE] rounded-[20px] text-[#88B1C1] border border-dashed border-[#88B1C1] text-center w-[300px] pt-[30px] pb-[15px] px-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] will-change-transform group'>
              <TaskAltIcon className="service-icon group-hover:rotate-[360deg] group-hover:scale-[1.1] transition-transform duration-[600ms] ease-in-out" sx={{ fontSize: "4em" }} />
              <h3 className='font-bold mt-[20px] mb-[10px]'>Approval Workflow</h3>
              <p>Streamline approval processes with real-time status updates.</p>
            </div>
            <div className='bg-[#FEFEFE] rounded-[20px] text-[#88B1C1] border border-dashed border-[#88B1C1] text-center w-[300px] pt-[30px] pb-[15px] px-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] will-change-transform group'>
              <MonetizationOnIcon className="service-icon group-hover:rotate-[360deg] group-hover:scale-[1.1] transition-transform duration-[600ms] ease-in-out" sx={{ fontSize: "4em" }} />
              <h3 className='font-bold mt-[20px] mb-[10px]'>Finance Processing</h3>
              <p>Ensure seamless financial processing for approved claims.</p>
            </div>
            <div className='bg-[#FEFEFE] rounded-[20px] text-[#88B1C1] border border-dashed border-[#88B1C1] text-center w-[300px] pt-[30px] pb-[15px] px-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] will-change-transform group'>
              <GroupIcon className="service-icon group-hover:rotate-[360deg] group-hover:scale-[1.1] transition-transform duration-[600ms] ease-in-out" sx={{ fontSize: "4em" }} />
              <h3 className='font-bold mt-[20px] mb-[10px]'>User & Project Management</h3>
              <p>Manage users, roles, and project access effortlessly.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mb-[10%]">
          <h2 className="text-[50px] font-bold text-[#1C3637] mb-[1.5em]">What We Do</h2>
          <div className="flex flex-col justify-center gap-[2.5em] w-full">
            <div className="flex pl-[10%]">
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">CLAIM PROCESSING</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Create and submit claim requests</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Attach supporting documents</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Track claim request status</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> View claim request history</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">APPROVAL WORKFLOW</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Review and approve/reject claims</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Add comments and feedback</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Automatic notifications for pending approvals</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Multi-level approval process</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">FINANCE HANDLING</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Process approved claims for payment</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Generate financial reports</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Track payment status</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Ensure compliance with company policies</li>
                </ul>
              </div>
            </div>

            <div className="flex pl-[10%]">
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">USER & PROJECT MANAGEMENT</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Manage user accounts and roles</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Assign approvers and finance handlers</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Monitor claim activities per project</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Control access and permissions</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">REPORTING & ANALYTICS</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Generate real-time claim reports</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Track claim trends and insights</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Export data for auditing</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Visualize claim performance</li>
                </ul>
              </div>
              <div className="flex-1">
                <h3 className="text-[23px] mb-[1em]">SECURITY & COMPLIANCE</h3>
                <ul>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Role-based access control (RBAC)</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Secure data encryption</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Compliance with financial regulations</li>
                  <li className="text-[20px] leading-[2]"><AddIcon /> Audit logs for all activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-[10%]">
          {/* DARK BLOCK 1 */}
          <div
            id='post-1'
            className="flex items-center bg-[#333333] h-[70vh] gap-[5em]"
          >
            <div className="flex-1 flex justify-end">
              <div>
                <h2 className="text-white text-[40px] font-bold mb-[0.6em]">Streamlined Claim Processing</h2>
                <div className="leading-loose">
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Fast Submission - Submit claims in seconds
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    File Attachments - Upload receipts & invoices
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Live Tracking - Check status anytime
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Claim History - View past requests
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Auto-Validation - Reduce errors instantly
                  </h3>
                </div>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: "transparent",
                    color: "#eee",
                    fontWeight: "bold",
                    padding: "15px 35px",
                    border: "2px solid white",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "18px",
                    marginTop: "1.5em",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#333",
                    },
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex-1 flex items-center h-full">
              <img
                className="h-[75%] rounded-[3em]"
                alt=""
                src="https://static.wixstatic.com/media/11062b_f0010cf224904e5383ed94bd38b873ab~mv2.jpg/v1/fill/w_470,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f0010cf224904e5383ed94bd38b873ab~mv2.jpg"
              />
            </div>
          </div>

          {/* WHITE BLOCK 2 */}
          <div
            id='post-2'
            className="flex items-center h-[70vh] gap-[3em]"
          >
            <div className="flex-1 flex justify-end items-center h-full">
              <img
                className="h-[75%] rounded-[3em]"
                alt=""
                src="https://static.wixstatic.com/media/11062b_aa4665bc130a49728ebf3c1e65dd90e6~mv2.jpg/v1/fill/w_470,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/02.jpg"
              />
            </div>
            <div className="flex-1 flex items-center h-full">
              <div className="flex flex-col justify-center bg-[#F1F6F9] w-fit h-[75%] px-[25px] py-[35px] rounded-[3em]">
                <h2 className="text-[40px] font-bold mb-[0.6em]">Approval Workflow</h2>
                <div className="leading-loose">
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Multi-Level Review - Structured approval process
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Instant Notifications - Get alerts for pending tasks
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Comments & Feedback - Approvers leave notes
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Secure Access - Role-based permissions
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Audit Logs - Full transparency & tracking
                  </h3>
                </div>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: "transparent",
                    color: "#86AFC0",
                    fontWeight: "bold",
                    padding: "15px 35px",
                    border: "2px solid #86AFC0",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "18px",
                    marginTop: "1.5em",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#86AFC0",
                      color: "white",
                    },
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
          <div
            id='post-3'
            className="flex items-center bg-[#333333] h-[70vh] gap-[5em]"
          >
            <div className="flex-1 flex justify-end">
              <div>
                <h2 className="text-white text-[40px] font-bold mb-[0.6em]">Finance & Reimbursement</h2>
                <div className="leading-loose">
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Seamless Finance Integration - Hassle-free processing
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Expense Categories - Organized claim types
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Track Payouts - Monitor reimbursement status
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Financial Reports - Export claim summaries
                  </h3>
                  <h3 className="text-white flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#DB545A" }} />
                    Flexible Payments - Multiple payout options
                  </h3>
                </div>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: "transparent",
                    color: "#eee",
                    fontWeight: "bold",
                    padding: "15px 35px",
                    border: "2px solid white",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "18px",
                    marginTop: "1.5em",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "#333",
                    },
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="flex-1 flex items-center h-full">
              <img
                className="h-[75%] rounded-[3em]"
                alt=""
                src="https://static.wixstatic.com/media/11062b_d8c8c150557a41fb986c6162f2556939~mv2.jpg/v1/fill/w_470,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/03.jpg"
              />
            </div>
          </div>
          <div
            id='post-4'
            className="flex items-center h-[70vh] gap-[3em]"
          >
            <div className="flex-1 flex justify-end items-center h-full">
              <img
                className="h-[75%] rounded-[3em]"
                alt=""
                src="https://static.wixstatic.com/media/11062b_7ffbcc1b69df473a86873f09a429a709~mv2.jpg/v1/fill/w_470,h_295,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/04.jpg"
              />
            </div>
            <div className="flex-1 flex items-center h-full">
              <div className="flex flex-col justify-center bg-[#F1F6F9] w-fit h-[75%] px-[25px] py-[35px] rounded-[3em]">
                <h2 className="text-[40px] font-bold mb-[0.6em]">Admin & Project Management</h2>
                <div className="leading-loose">
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    User Roles - Manage permissions easily
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Project-Based Claims - Link requests to projects
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Dashboard Insights - Key metrics at a glance
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    Custom Workflows - Adapt to company needs
                  </h3>
                  <h3 className="flex items-center gap-[10px] text-[18px]">
                    <CheckIcon sx={{ color: "#86AFC0" }} />
                    System Integration - Connect with existing tools
                  </h3>
                </div>
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    background: "transparent",
                    color: "#86AFC0",
                    fontWeight: "bold",
                    padding: "15px 35px",
                    border: "2px solid #86AFC0",
                    borderRadius: "30px",
                    cursor: "pointer",
                    fontSize: "18px",
                    marginTop: "1.5em",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#86AFC0",
                      color: "white",
                    },
                  }}
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </Layout>
  );
};

export default ServicePage;