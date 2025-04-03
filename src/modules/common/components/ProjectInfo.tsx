import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './ProjectInfo.css';
import { ProjectData } from '../constants/projectData';
import { formatDateWithRelative } from '../services/dateFormat';
import { statusColors } from '../constants/statusColor';

interface ProjectInfoProps {
    isOpen: boolean;
    handleClose: () => void;
    project: ProjectData;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ isOpen, handleClose, project }) => {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isOpen}
            sx={{
                '& .MuiDialog-paper': {
                    maxWidth: "700px", // Giới hạn chiều rộng
                    maxHeight: "80vh", // Giới hạn chiều cao
                },
            }}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    boxShadow: 'none',
                }
            }}
        >
            <DialogTitle className='project-info-header' id="customized-dialog-title">
                <AssignmentIcon sx={{
                    backgroundColor: "#F3F3F3",
                    fontSize: "35px",
                    color: "#58585A",
                    border: "1px solid #EAEAEA",
                    borderRadius: "50%",
                    p: "5px",
                }} />
                <div className='project-title'>
                    <h1>{project.project_name}</h1>
                    <small>Code: {project.project_code}</small>
                </div>
                <div className='project-status'>
                    <Typography
                        variant='body1'
                        sx={{
                            border: `1px solid ${statusColors[project.project_status] || "black"}`,
                            borderRadius: '10px',
                            color: statusColors[project.project_status] || "black",
                            textAlign: "center",
                            fontWeight: "bold",
                            padding: "2px 10px",
                            ml: 2,
                        }}
                    >
                        {project.project_status}
                    </Typography>
                </div>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>

            {/* ✅ Chỉ DialogContent cuộn khi nội dung vượt quá maxHeight */}
            <DialogContent dividers sx={{ maxHeight: "60vh", display: "flex", flexDirection: "column" }}>
                <div className='project-info-content'>
                    <div className='project-content-date'>
                        <div className='project-content-startdate'>
                            <h2>Start date:</h2>
                            <Typography>
                                {formatDateWithRelative(project.project_start_date)}
                            </Typography>
                        </div>
                        <div className='project-content-enddate'>
                            <h2>End date:</h2>
                            <Typography>
                                {formatDateWithRelative(project.project_end_date)}
                            </Typography>
                        </div>
                    </div>
                    <div className='project-content-department'>
                        <h2>Department:</h2>
                        <Typography>{project.project_department}</Typography>
                    </div>
                    <div className='project-content-description'>
                        <h2>Description:</h2>
                        <Typography>{project.project_description}</Typography>
                    </div>
                </div>

                <div className='project-info-members' style={{ flexGrow: 1 }}>
                    <h2>Members:</h2>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S.no</TableCell>
                                    <TableCell align="left">Username</TableCell>
                                    <TableCell align="left">Role</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {project.project_members.map((member, index) => (
                                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="left">{member.user_name}</TableCell>
                                        <TableCell align="left">{member.project_role}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center" }}>
                <button
                    className='px-4 py-2 text-white bg-[#1976D2] border border-[#1976D2] rounded-md cursor-pointer text-md font-semibold transition-all duration-300 ease-in-out transform hover:bg-transparent hover:text-[#1976D2] hover:scale-105'
                    onClick={handleClose}
                >
                    OK
                </button>
            </DialogActions>
        </Dialog>

    )
}

export default ProjectInfo
