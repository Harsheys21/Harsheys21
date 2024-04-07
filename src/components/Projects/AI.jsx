import { Grid, Button } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ChecklistIcon from '@mui/icons-material/Checklist';
import MapIcon from '@mui/icons-material/Map';
import RocketIcon from '@mui/icons-material/Rocket';
import CloseIcon from '@mui/icons-material/Close';

const AI = () => {
    return (
        <>
            <Grid container direction="column">
                <Grid container justifyContent="center" >
                    <Button>
                        <QuestionMarkIcon/>
                    </Button>
                    <Button>
                        <ChecklistIcon />
                    </Button>
                    <Button>
                        <MapIcon />
                    </Button>
                </Grid>
                <Grid container justifyContent="center" >
                    <Button>
                        <RocketIcon />
                    </Button>
                    <Button>
                        <CloseIcon />
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export default AI; 


