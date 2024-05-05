import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function ImgMediaCard(props) {
  return (
    <Card elevation={4} sx={{
      maxWidth: 600,
      borderRadius: 6,
      margin: '0 10px 20px',
      backgroundColor: "f5f5f5",
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <CardContent>
        <CardMedia
          component="img"
          alt="cubo"
          width="192"
          image={process.env.PUBLIC_URL + '/logo192.png'}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button 
          size="large" 
          variant="contained" 
          color='primary' 
          sx={{ 
            borderRadius: 6, 
            padding: '10px 24px', 
            backgroundColor: '#f5f5f5', 
            color: '#021024', 
            '&:hover': {
              backgroundColor: '#448ACC', 
            },
          }} 
          fullWidth
        >
          {props.name}
        </Button>
      </CardActions>
    </Card>
  );
}
