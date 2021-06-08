import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';


const SearchInput = ({ handleChange, valorDelInput }) => {

    const useStyles = makeStyles((theme) => ({
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
     /*    search: {

            position: 'relative',

            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.black, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.black, 0.25),
            },
            marginLeft: 0,
            width: '50%',
            [theme.breakpoints.up('sm')]: {
                width: '50%',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {

            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '90ch',
                },
            },
        }, */
    }));
    const classes = useStyles();

    return (
        <div className={classes.header}>

            <h2> Search your movie</h2>
            <div >

                <input value={valorDelInput} onChange={handleChange} />

            </div>
        </div>
    );

}

export default SearchInput;