import React, { useCallback, useEffect, useState } from 'react'
import './ViewProject.css'
import Layout from '../../../shared/layouts/Layout'
import Search from '../../../shared/components/searchComponent/Search'
import { Autocomplete, Box, Button, Grid, IconButton, InputLabel, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useForm } from 'react-hook-form'
import { searchProjectWithData } from '../../admin/services/projectService'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { debounce } from "lodash";
import Footer from '../../../shared/components/layoutComponent/Footer'
import { searchUsers } from '../../admin/services/userService'
import { User } from '../../admin/types/user'
import { formatDateWithRelative } from '../services/dateFormat'
import { statusColors } from '../constants/statusColor'
import ProjectInfo from '../components/ProjectInfo'
import { ProjectData } from '../constants/projectData'


interface SearchFormInputs {
    searchTerm: string;
    startDate: string;
    endDate: string;
    user_id: string;
}

// type Order = "asc" | "desc";

const ViewProject: React.FC = () => {
    const [alignment, setAlignment] = React.useState('basic');
    const [loading, setLoading] = React.useState(true);
    const [loadingDetail, setLoadingDetail] = useState(false);
    const [results, setResults] = React.useState<ProjectData[]>([]);
    const [curPage, setCurPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(1);
    const [totalItems, setTotalItems] = React.useState(0);
    // const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<{ key: keyof ProjectData, order: "asc" | "desc" }[]>([]);
    // dành cho tìm user
    const [inputValue, setInputValue] = React.useState("");
    const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
    const [filteredUsers, setFilteredUsers] = React.useState<User[]>([]);
    const [openProjectId, setOpenProjectId] = useState<string | null>(null);

    const {
        register,
        reset,
        setValue,
        getValues,
        trigger,
        formState: { errors },
    } = useForm<SearchFormInputs>();

    const handleSort = (property: keyof ProjectData) => {
        setOrderBy((prev) => {
            const existingIndex = prev.findIndex((col) => col.key === property);
            let newOrderBy = [...prev];

            if (existingIndex !== -1) {
                newOrderBy[existingIndex] = {
                    key: property,
                    order: newOrderBy[existingIndex].order === "asc" ? "desc" : "asc",
                };
            } else {
                newOrderBy.push({ key: property, order: "asc" });
            }
            return newOrderBy;
        });
    };

    const handleChange = (_event: React.ChangeEvent<unknown>, newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const showProject = (projectId: string) => {
        setLoadingDetail(true);
        const randomDelay = Math.random() * (2000 - 1000) + 1000;
        setTimeout(() => {
            setOpenProjectId(projectId);
            setLoadingDetail(false);
        }, randomDelay);
    }

    const handleCloseProject = () => {
        setOpenProjectId(null);
    }

    const sortedRows = [...results].sort((a, b) => {
        for (const sortRule of orderBy) {
            const valueA = a?.[sortRule.key];
            const valueB = b?.[sortRule.key];

            // Kiểm tra nếu một trong hai giá trị bị null hoặc undefined
            if (valueA == null && valueB == null) return 0;
            if (valueA == null) return 1; // Đẩy giá trị null xuống cuối
            if (valueB == null) return -1; // Đẩy giá trị null lên đầu

            // So sánh khi cả hai đều có giá trị hợp lệ
            if (valueA > valueB) return sortRule.order === "asc" ? 1 : -1;
            if (valueA < valueB) return sortRule.order === "asc" ? -1 : 1;
        }
        return 0;
    });

    const debounceSearchProject = useCallback(debounce(() => handleSubmitSearch(), 1000), []);
    const debounceSearchUser = useCallback(debounce((text: string) => handleSearchUsers(text), 1000), []);

    const handleSearch = async (searchTerm: string) => {
        setValue("searchTerm", searchTerm);
        debounceSearchProject();
    }

    const handleClearFilters = () => {
        reset({
            searchTerm: "",
            startDate: "",
            endDate: "",
            user_id: "",
        });
        setSelectedUser(null);
        setFilteredUsers([]);
        handleSubmitSearch();
    }

    const handleSearchUsers = async (searchText: string) => {
        if (searchText === "") return;
        let currentPage = 1;
        let moreData = true;
        setFilteredUsers([]);
        while (moreData) {
            const searchData = {
                keyword: searchText,
                role_code: "",
                is_blocked: false,
                is_deleted: false,
                is_verified: "",
            }
            const pageData = {
                pageNum: currentPage,
                pageSize: 10,
            }
            try {
                const response = await searchUsers(searchData, pageData);
                response.pageData.map(user => {
                    if (user.user_name.includes(searchText)) {
                        setFilteredUsers(prevUsers => [...prevUsers, user]);
                    }
                });
                if (response.pageInfo.totalItems > currentPage * 8) {
                    currentPage++;
                } else {
                    moreData = false;
                }
            } catch (error) {
                console.error("Error: ", error);
                moreData = false;
            }
        }
    }

    const handleSubmitSearch = async () => {
        const isValid = await trigger();
        if (!isValid) return;
        setLoading(true);
        const data = getValues();
        const formattedData = {
            ...data,
            startDate: data.startDate ? new Date(data.startDate).toISOString() : "",
            endDate: data.endDate ? new Date(data.endDate).toISOString() : "",
        };
        console.log(formattedData);
        try {
            const response = await searchProjectWithData(formattedData, curPage);
            if (response) {
                setTotalPages(response.pageInfo.totalPages);
                setTotalItems(response.pageInfo.totalItems);
                setResults(response.pageData);
            }
        } catch (error) {
            console.error("Error: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        handleSubmitSearch();
    }, [curPage]);

    return (
        <Layout>
            {
                loadingDetail ? (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-70 backdrop-blur-sm z-50">
                        <div className="flex gap-2">
                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce"></div>
                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce" style={{ animationDelay: "-0.3s" }}></div>
                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce" style={{ animationDelay: "-0.5s" }}></div>
                        </div>
                    </div>
                ) : null}
            <div className='search-projects-container'>
                <div className='search-bar-input'>
                    <Search onSearch={handleSearch} />
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={handleChange}
                        aria-label="Platform"
                        className='search-filter-toggle'
                    >
                        <ToggleButton value="basic">Basic Filtering</ToggleButton>
                        <ToggleButton value="advanced">Advanced Filtering</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                {alignment === "advanced" && (
                    <Grid container spacing={2} className="search-bar-filter">
                        {/* Username */}
                        <Grid item xs={12} md={3}>
                            <Box display="flex" flexDirection="column">
                                <InputLabel sx={{ mb: 1 }}>Username:</InputLabel>
                                <Autocomplete
                                    options={filteredUsers}
                                    getOptionLabel={(option) => option.user_name}
                                    value={selectedUser}
                                    onChange={(_, newValue) => {
                                        setSelectedUser(newValue as User);
                                        setValue("user_id", newValue ? newValue._id : "");
                                        trigger("user_id");
                                        handleSubmitSearch();
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(_, newInputValue) => {
                                        setInputValue(newInputValue);
                                        debounceSearchUser(newInputValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            id="outlined-basic"
                                            variant="outlined"
                                            error={!!errors.user_id}
                                            helperText={errors.user_id?.message}
                                        />
                                    )}
                                />
                            </Box>
                        </Grid>

                        {/* Start Date */}
                        <Grid item xs={12} md={3}>
                            <Box display="flex" flexDirection="column">
                                <InputLabel sx={{ mb: 1 }}>Start Date:</InputLabel>
                                <TextField
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    {...register("startDate", {
                                        validate: (value) => {
                                            const endDate = getValues("endDate");
                                            if (endDate && value && new Date(value) > new Date(endDate)) {
                                                return "Start Date must be before End Date";
                                            }
                                            return true;
                                        }
                                    })}
                                    error={!!errors.startDate}
                                    helperText={errors.startDate?.message}
                                    onChange={(e) => {
                                        setValue("startDate", e.target.value);
                                        trigger("endDate");
                                        handleSubmitSearch();
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* End Date */}
                        <Grid item xs={12} md={3}>
                            <Box display="flex" flexDirection="column">
                                <InputLabel sx={{ mb: 1 }}>End Date:</InputLabel>
                                <TextField
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    {...register("endDate", {
                                        validate: (value) => {
                                            const startDate = getValues("startDate");
                                            if (startDate && value && new Date(value) < new Date(startDate)) {
                                                return "End Date must be after Start Date";
                                            }
                                            return true;
                                        }
                                    })}
                                    error={!!errors.endDate}
                                    helperText={errors.endDate?.message}
                                    onChange={async (e) => {
                                        setValue("endDate", e.target.value);
                                        await trigger("startDate");
                                        await handleSubmitSearch();
                                    }}
                                />
                            </Box>
                        </Grid>

                        {/* Clear Filters */}
                        <Grid item xs={12} md={3}>
                            <Box display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
                                <InputLabel sx={{ visibility: "hidden", mb: 1 }}>Label</InputLabel>
                                <Button
                                    fullWidth
                                    startIcon={<CancelOutlinedIcon sx={{ fontSize: "18px" }} />}
                                    onClick={handleClearFilters}
                                >
                                    Clear All Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                )}
                <div className='filter-results-display'>
                    <h3>{`${Math.min(curPage * 10 - 9, totalItems)}-${Math.min(curPage * 10, totalItems)} of ${totalItems} results`}</h3>
                </div>
                <TableContainer className='results-table-display' sx={{ width: "90%", margin: "auto" }} component={Paper}>
                    <Table>
                        <TableHead sx={{ "& th": { fontSize: "18px", color: "#040938" } }}>
                            <TableRow>
                                <TableCell sx={{ width: "5%" }}>No.</TableCell>
                                <TableCell sx={{ width: "20%" }}>
                                    <TableSortLabel
                                        IconComponent={UnfoldMoreIcon}
                                        active={orderBy.some(o => o.key === "project_name")}
                                        direction={orderBy.find(o => o.key === "project_name")?.order === "desc" ? "desc" : "asc"}
                                        onClick={() => handleSort("project_name")}
                                        sx={{
                                            "& .MuiTableSortLabel-icon": { opacity: 1 },
                                        }}
                                    >
                                        Project Name
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{ width: "15%" }}>
                                    <TableSortLabel
                                        IconComponent={UnfoldMoreIcon}
                                        active={orderBy.some(o => o.key === "project_code")}
                                        direction={orderBy.find(o => o.key === "project_code")?.order === "desc" ? "desc" : "asc"}
                                        onClick={() => handleSort("project_code")}
                                        sx={{
                                            "& .MuiTableSortLabel-icon": { opacity: 1 },
                                        }}
                                    >
                                        Project Code
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{ width: "15%" }}>
                                    <TableSortLabel
                                        IconComponent={UnfoldMoreIcon}
                                        active={orderBy.some(o => o.key === "project_start_date")}
                                        direction={orderBy.find(o => o.key === "project_start_date")?.order === "desc" ? "desc" : "asc"}
                                        onClick={() => handleSort("project_start_date")}
                                        sx={{
                                            "& .MuiTableSortLabel-icon": { opacity: 1 },
                                        }}
                                    >
                                        Start Date
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{ width: "15%" }}>
                                    <TableSortLabel
                                        IconComponent={UnfoldMoreIcon}
                                        active={orderBy.some(o => o.key === "project_end_date")}
                                        direction={orderBy.find(o => o.key === "project_end_date")?.order === "desc" ? "desc" : "asc"}
                                        onClick={() => handleSort("project_end_date")}
                                        sx={{
                                            "& .MuiTableSortLabel-icon": { opacity: 1 },
                                        }}
                                    >
                                        End Date
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell sx={{ width: "10%" }}>Status</TableCell>
                                <TableCell sx={{ width: "10%" }}>Last updated</TableCell>
                                <TableCell sx={{ width: "10%" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={9} align="center">
                                        <div className="flex justify-center flex-row gap-2">
                                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce"></div>
                                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.3s]"></div>
                                            <div className="w-4 h-4 rounded-full bg-gray-700 animate-bounce [animation-delay:-.5s]"></div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ) : sortedRows.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={9} align="center">
                                        No projects found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                sortedRows.map((project, index) => (
                                    <TableRow
                                        key={index}
                                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                            } hover:bg-gray-200 transition-colors`}
                                    >
                                        <TableCell>{(curPage - 1) * 10 + index + 1}</TableCell>
                                        <TableCell>{project.project_name}</TableCell>
                                        <TableCell>{project.project_code}</TableCell>
                                        <TableCell>{formatDateWithRelative(project.project_start_date)}</TableCell>
                                        <TableCell>{formatDateWithRelative(project.project_end_date)}</TableCell>
                                        <TableCell>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: statusColors[project.project_status] || "black",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {project.project_status}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>{formatDateWithRelative(project.updated_at)}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                sx={{ color: "#1E1E1E" }}
                                                onClick={() => showProject(project._id)}
                                            >
                                                <MoreHorizIcon />
                                            </IconButton>

                                            <ProjectInfo
                                                isOpen={openProjectId === project._id}
                                                handleClose={handleCloseProject}
                                                project={project}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className='pagination-results'>
                    <Pagination
                        count={totalPages}
                        page={curPage}
                        variant="outlined"
                        onChange={(_, value) => setCurPage(value)}
                    />
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default ViewProject