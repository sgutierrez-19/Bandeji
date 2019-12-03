import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import UserMemberContext from '../../../../context/userMember/userMemberContext';

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { userMemberInfo } = userMemberContext;

  return (
    <Card className={classes.card}>
      <Typography component='h1' variant='h2'>
        Your Profile:
      </Typography>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='UserMember Profile Picture'
          height='300'
          image={userMemberInfo.profilePicture}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {userMemberInfo.memberName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {userMemberInfo.city}, {userMemberInfo.state},
            {userMemberInfo.zipcode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
