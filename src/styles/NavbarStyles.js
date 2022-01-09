import { indigo } from '@mui/material/colors';

const navStyles = {
    appbarLight:{
        bgcolor:indigo[900],
        color:'white'
    },
    appbarDark:{
        bgcolor: 'white',
        color:'#272727'
    },
    switch:{
        color:'red'
    },
    title:{
        // hide in small view
        display:{'xs':'none', 'sm':'block'}
    }
}
export default navStyles