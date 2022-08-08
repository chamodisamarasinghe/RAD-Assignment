import React, {useEffect, useState} from 'react'
import TextField from "@mui/material/TextField";
import {Box, Button, Grid, IconButton} from "@mui/material";
import ProductService from "../../../services/ProductService";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashNav from "../Dash/nav";
const defaultPosition = toast.POSITION.BOTTOM_CENTER;

function createData(title,
                    price,
                    category,
                    description,
                    image,update, deleted) {
    return {
        title,
        price,
        category,
        description,
        image,

        update,
        deleted
    };
}


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        title: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Title',
    },
    {
        price: 'price',
        numeric: false,
        disablePadding: true,
        label: 'Price',
    },
    {
        id: 'category',
        numeric: false,
        disablePadding: true,
        label: 'Category',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: true,
        label: 'Description',
    },
    {
        id: 'image',
        numeric: false,
        disablePadding: true,
        label: 'Image',
    },


];

function EnhancedTableHead(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.title}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.title}
                            direction={orderBy === headCell.title ? order : 'asc'}
                            onClick={createSortHandler(headCell.title)}
                        >
                            {headCell.label}
                            {orderBy === headCell.title ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const {numSelected} = props;

};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export const showToast = ( type = "success", msg, autoClose = 2000, className = "primaryColor", position = defaultPosition ) => {
    if (type === "success") {
        toast.success(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "primaryColor" : className,
            position: position,
        });
    } else if (type === "error") {
        toast.error(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "dangerColor" : className,
            position: position,
        });
    }
};
const Product = ({}) => {

    const initialValues = {

        title:"",
        price:"",
        category:"",
        description:"",
        image:"",

    };

    const statusObj = {
        alert: false,
        message: '',
        severity: '',
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('Add Driver');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitProduct();
    }

    const clearFields = () => {

        setFormValues({
            title:"",
            price:"",
            category:"",
            description:"",
            image:"",


        });
    };

    const submitProduct = async () => {

        let dto = {};
        dto = formValues;

        if (btnLabel === "Add Driver") {
            let res = await ProductService.addProduct(dto);//customer service --> postCustomer()
            console.log(res.status)

            console.log("res Status", res.data)
            if (res.data.code === 200) {

                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'saved successfully !');

                loadData();
                clearFields();

            } else  {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
                console.log("not Equal")
                showToast('error', 'Not Saved');
            }
        } else {
            let res = await ProductService.putProduct(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',
                });
                loadData();
                showToast('success', 'update successfully !');
                setBtnLabel("Add Driver");
                setBtnColor('primary')
                clearFields();

            } else {
                setStatus({
                    alert: true,
                    message: "e",
                    severity: 'error'
                });
                showToast('error', 'Not Updated');
            }
        }
    };


    const loadData = async () => {
        ProductService.fetchProduct().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
            }
        });
    };

    const deleteProduct = async (did) => {
        let params = {
            did: did
        }
        let res = await ProductService.deleteProduct(params);

        if (res.status === 200) {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            showToast('success', 'successfully Deleted!');
            loadData()
        } else {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
            showToast('error', 'Not Deleted');
        }
    };

    const updateProduct = async (data) => {
        setBtnLabel("Update Product");
        setBtnColor('secondary')
        setFormValues({
            title:data.title,
            price: data.price,
            category: data.category,
            description: data.description,
            image: data.image,



        });
    };

    // car
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);


    const setDataToRows = (td) => {

        console.log("tablemap", td);
        const newArr2 = []
        for (let i = 0; i < td.length; i++) {
            newArr2.push((createData(
                td[i].title,td[i].price,td[i].category,td[i].description,td[i].image
            )))
        }
        console.log("new Arra", newArr2)
        setRows(newArr2)


    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // car


    return (
        <div>
            <ToastContainer />
            <Grid>
                <DashNav/>
            </Grid>
            <Divider/>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': {},
                }}
                noValidate
                autoComplete="off"
            >

                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5, mt: 5}}
                >
                    <Grid item>
                        <TextField id="outlined-basic" label="Title" variant="outlined"
                                   helperText="Enter Title" name="title"
                                   onChange={handleInputChange} validators={['required']}
                                   value={formValues.title}/>
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Price"
                            variant="outlined"
                            id="outlined-basic"
                            label="Price"
                            name="price"
                            onChange={handleInputChange}
                            value={formValues.price}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Address"
                            id="outlined-basic"
                            label="Address"
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.address}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Enter Category"
                            id="demo-helper-text-aligned"
                            label="Category"
                            name="category"
                            onChange={handleInputChange}
                            value={formValues.category}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Description"
                            id="demo-helper-text-aligned"
                            label="Description"
                            name="description"
                            onChange={handleInputChange}
                            value={formValues.description}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Upload Image"
                            id="demo-helper-text-aligned"
                            label="Image"
                            name="image"
                            onChange={handleInputChange}
                            value={formValues.image}
                        />
                    </Grid>


                </Grid>
                <InputBase
                    id="outlined-basic"
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search Id"
                    inputProps={{'aria-label': 'search Id'}}
                    variant="standard"
                />
                <IconButton type="submit" sx={{p: '20px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <div>
                    <div>
                        {/*<Button color="secondary" size="medium" type="submit" variant="contained"*/}
                        {/*        sx={{ml: 45, mt: -13}}>*/}
                        {/*    Search*/}
                        {/*</Button>*/}

                        <Button color={btnColor} size="medium" type="submit" variant="contained"
                                sx={{ml: 3, mt: -13}}>
                            {btnLabel}
                        </Button>

                        <Button onClick={clearFields} type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>
                    {/*cartable open*/}
                    <Box sx={{width: '100%'}}>
                        <Paper sx={{width: '100%', mb: 2}}>
                            <EnhancedTableToolbar numSelected={selected.length}/>
                            <TableContainer>
                                <Table
                                    sx={{minWidth: 750, marginTop: 5}}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.title);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.title}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell>
                                                        </TableCell>
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {row.title}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.price}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.category}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.description}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.image}
                                                        </TableCell>






                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.update}
                                                            <IconButton onClick={() => {
                                                                updateProduct(row);
                                                            }} color="info" aria-label="update" component="label">
                                                                <CreateIcon/>
                                                            </IconButton>

                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.delete}

                                                            <IconButton onClick={() => deleteProduct(row.title)}
                                                                        color="error" aria-label="delete"
                                                                        component="label">
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                        </TableCell>


                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Box>
                    {/*cartable close*/}

                </div>

            </Box>
        </div>
    )

}

export default Product