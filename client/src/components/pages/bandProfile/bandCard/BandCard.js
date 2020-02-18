import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BandMemberContext from '../../../../context/bandMember/bandMemberContext';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function BandCard() {
  const classes = useStyles();
  const bandMemberContext = useContext(BandMemberContext);
  const { bandUserMember } = bandMemberContext;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='300'
          image={bandUserMember.band.bandPicture}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {bandUserMember.band.bandName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {bandUserMember.band.city}, {bandUserMember.band.state},{' '}
            {bandUserMember.band.zipcode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
