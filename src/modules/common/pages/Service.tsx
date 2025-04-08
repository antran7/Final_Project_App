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
          <h2 className="text-[40px] md:text-[50px] font-bold text-[#1C3637] mb-[1.5em] text-center">What We Do</h2>
          <div className="flex flex-col justify-center gap-[2.5em] w-full px-4 md:px-[5%]">
            {/* Group 1 */}
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">CLAIM PROCESSING</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Create and submit claim requests</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Attach supporting documents</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Track claim request status</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> View claim request history</li>
                </ul>
              </div>
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">APPROVAL WORKFLOW</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Review and approve/reject claims</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Add comments and feedback</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Automatic notifications for pending approvals</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Multi-level approval process</li>
                </ul>
              </div>
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">FINANCE HANDLING</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Process approved claims for payment</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Generate financial reports</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Track payment status</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Ensure compliance with company policies</li>
                </ul>
              </div>
            </div>

            {/* Group 2 */}
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">USER & PROJECT MANAGEMENT</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Manage user accounts and roles</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Assign approvers and finance handlers</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Monitor claim activities per project</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Control access and permissions</li>
                </ul>
              </div>
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">REPORTING & ANALYTICS</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Generate real-time claim reports</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Track claim trends and insights</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Export data for auditing</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Visualize claim performance</li>
                </ul>
              </div>
              <div className="w-full sm:w-[48%] lg:w-[30%]">
                <h3 className="text-[20px] md:text-[23px] mb-[1em]">SECURITY & COMPLIANCE</h3>
                <ul>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Role-based access control (RBAC)</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Secure data encryption</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Compliance with financial regulations</li>
                  <li className="text-[18px] md:text-[20px] leading-[2]"><AddIcon /> Audit logs for all activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full bg-white py-16 space-y-24">
          {[
            {
              id: "post-1",
              dark: true,
              title: "Streamlined Claim Processing",
              list: [
                "Fast Submission - Submit claims in seconds",
                "File Attachments - Upload receipts & invoices",
                "Live Tracking - Check status anytime",
                "Claim History - View past requests",
                "Auto-Validation - Reduce errors instantly",
              ],
              img: "https://static.wixstatic.com/media/11062b_f0010cf224904e5383ed94bd38b873ab~mv2.jpg",
              iconColor: "#DB545A",
            },
            {
              id: "post-2",
              dark: false,
              title: "Approval Workflow",
              list: [
                "Multi-Level Review - Structured approval process",
                "Instant Notifications - Get alerts for pending tasks",
                "Comments & Feedback - Approvers leave notes",
                "Secure Access - Role-based permissions",
                "Audit Logs - Full transparency & tracking",
              ],
              img: "https://static.wixstatic.com/media/11062b_aa4665bc130a49728ebf3c1e65dd90e6~mv2.jpg",
              iconColor: "#86AFC0",
            },
            {
              id: "post-3",
              dark: true,
              title: "Finance & Reimbursement",
              list: [
                "Seamless Finance Integration - Hassle-free processing",
                "Expense Categories - Organized claim types",
                "Track Payouts - Monitor reimbursement status",
                "Financial Reports - Export claim summaries",
                "Flexible Payments - Multiple payout options",
              ],
              img: "https://static.wixstatic.com/media/11062b_d8c8c150557a41fb986c6162f2556939~mv2.jpg",
              iconColor: "#DB545A",
            },
            {
              id: "post-4",
              dark: false,
              title: "Smart Notifications",
              list: [
                "Timely Alerts - Keep everyone informed",
                "Email & In-app - Choose your channel",
                "Real-Time Updates - Never miss a change",
                "Custom Reminders - Stay on top of tasks",
                "User Preferences - Personalized alerts",
              ],
              img: "https://static.wixstatic.com/media/11062b_7ffbcc1b69df473a86873f09a429a709~mv2.jpg",
              iconColor: "#86AFC0",
            },
          ].map((section, index) => {
            const isReverse = index % 2 === 1;
            return (
              <div
                key={section.id}
                id={section.id}
                className={`flex flex-col-reverse lg:flex-row ${isReverse ? "lg:flex-row-reverse" : ""
                  } items-center gap-16 px-6 lg:px-12 ${section.dark ? "bg-[#1F1F1F] text-white" : "bg-[#F9FAFB] text-gray-800"
                  } py-16 rounded-[2em] max-w-screen-xl mx-auto shadow-md`}
              >
                {/* Text */}
                <div className="flex-1 text-center lg:text-left space-y-5 max-w-xl">
                  <h2 className="text-3xl lg:text-4xl font-bold">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base">
                        <CheckIcon sx={{ color: section.iconColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 inline-block px-6 py-3 border-2 rounded-full font-semibold text-lg transition-all duration-300 ${section.dark
                        ? "text-white border-white hover:bg-white hover:text-[#1F1F1F]"
                        : `text-[${section.iconColor}] border-[${section.iconColor}] hover:bg-[${section.iconColor}] hover:text-white`
                      }`}
                  >
                    Learn more
                  </button>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                  <img
                    src={section.img}
                    alt=""
                    className="w-full max-w-md rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>


        <div className="flex flex-col items-center mb-[8%]">
          <h2 className="text-[40px] text-[#1C3637] font-bold mb-[20px] text-center">
            Ready to streamline your claim process?
          </h2>
          <p className="text-[18px] text-center w-[60%] mb-[30px]">
            Get started today and experience the ease of automated, transparent, and secure claim handling from request to reimbursement.
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1C3637",
              padding: "10px 30px",
              fontSize: "16px",
              borderRadius: "50px",
              textTransform: "none",
              ":hover": {
                backgroundColor: "#345D5F",
              },
            }}
          >
            Get Started
          </Button>
        </div>

      </div>
      <Footer />
    </Layout>
  );
};

export default ServicePage;