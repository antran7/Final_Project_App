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
                    maxWidth: "700px",
                    maxHeight: "80vh",
                },
            }}
            BackdropProps={{
                style: {
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    boxShadow: 'none',
                }
            }}
        >
            <DialogTitle className="flex items-center p-4">
                <AssignmentIcon sx={{
                    backgroundColor: "#F3F3F3",
                    fontSize: "35px",
                    color: "#58585A",
                    border: "1px solid #EAEAEA",
                    borderRadius: "50%",
                    p: "5px",
                }} />
                <div className="ml-4 leading-5">
                    <h1>{project.project_name}</h1>
                    <small className="text-gray-500">Code: {project.project_code}</small>
                </div>
                <div className="ml-4">
                    <Typography
                        variant="body1"
                        className={`border border-[${statusColors[project.project_status] || "black"}] rounded-lg text-[${statusColors[project.project_status] || "black"}] text-center font-bold px-4 py-1 ml-2`}
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

            <DialogContent dividers className="max-h-[60vh] flex flex-col">
                <div className="flex flex-col gap-5 min-w-[360px] py-2">
                    <div className="flex">
                        <div className="flex-1">
                            <h2 className="font-bold">Start date:</h2>
                            <Typography className="text-lg text-gray-500">
                                {formatDateWithRelative(project.project_start_date)}
                            </Typography>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-bold">End date:</h2>
                            <Typography className="text-lg text-gray-500">
                                {formatDateWithRelative(project.project_end_date)}
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold">Department:</h2>
                        <Typography className="text-lg text-gray-500">{project.project_department}</Typography>
                    </div>
                    <div>
                        <h2 className="font-bold">Description:</h2>
                        <Typography className="text-lg text-gray-500">{project.project_description}</Typography>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="font-bold mb-5">Members:</h2>
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

export default ProjectInfo;