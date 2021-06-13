
import { makeStyles } from '@material-ui/core/styles';


const SearchInput = ({ handleChange, valorDelInput }) => {

    const useStyles = makeStyles((theme) => ({
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        
        },
        input:{
            borderColor:'blue',
            borderRadius:'5px',
       

        
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.header}>

            <h2> Search your movie</h2>
            <div >

                <input className={classes.input} value={valorDelInput} onChange={handleChange} />

            </div>
        </div>
    );

}

export default SearchInput;