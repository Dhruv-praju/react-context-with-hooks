import { indigo } from '@mui/material/colors';

const navStyles = {
    appbar:{
        bgcolor:indigo[900],
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