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

export default function UserCard() {
  const classes = useStyles();
  const userMemberContext = useContext(UserMemberContext);
  const { getUserMember, userMemberInfo } = userMemberContext;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='300'
          image={userMemberInfo.profilePicture}
          title='User Picture'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {userMemberInfo.memberName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {userMemberInfo.city}, {userMemberInfo.state},{' '}
            {userMemberInfo.zipcode}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
