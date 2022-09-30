import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import NewMessage from 'pages/Mesaj/OgretmenMesaj/NewMessage'
import Meta from 'components/Meta';

import useStyles from './styles';
import isMobile from 'utils/isMobile';
import { Link as RouterLink } from 'react-router-dom';

function Fakulte({ isOpen, onClose, onOpen }) {
  const classes = useStyles({ 
    isOpen,
    isMobile,});



 
  return (
   
    <>
      <Meta
        title="Öğretim Üyeleri Mesaj"
        description="Öğretim Üyeleri Mesaj"
      />
     
      <Container size="large" maxWidth="sm" className={classes.root}>
      <Button variant="outlined"  component={RouterLink} to="./OgrenciMesaj">
       Öğrenciler İle
      </Button>

      <Button variant="outlined"  component={RouterLink} to="./OgretmenMesaj" >
        Öğretim Görevlileri İle
      </Button>

      </Container>
      <Container size="large" maxWidth="sm" className={classes.root2}>
      
       <NewMessage/>
        </Container>
     
    </>
  );
}


export default Fakulte;

