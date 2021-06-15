import { makeStyles } from '@material-ui/core/styles';


const SearchInput = ({ handleChange, valorDelInput }) => {

    const useStyles = makeStyles((theme) => ({
        header: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color:"white",      
        },
        input:{
            borderColor:'gold',
            borderRadius:'5px',
            width:"500px",
            height:"30px",
            marginBottom:"20px",
            "@media (max-width: 300px)": {
                width:"100px"    
               
               },
            "@media (min-width: 300px)": {
               width:"280px"
               
              
              },
              "@media (max-width: 280px)": {
                width:"250px"    
               
               },
        
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.header}>

            <h2> Search your movie</h2>
            <div >

                <input className={classes.input} value={valorDelInput} onChange={handleChange} />

            </div>


            <Box bgcolor="#ff0000" maxWidth="100%" height="100px" justify="center">
                <Typography align="center" className={classes.text} variant="h5">
                Movie Finder by Euge and Sofi
                </Typography>
            </Box>
        </div>
    );

}

export default SearchInput;