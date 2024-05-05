import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

export default function ImgMediaCard(props) {
  const { alt, title, content, action, image } = props;

  return (
    <Card elevation={4} sx={{
      maxWidth: 600,
      borderRadius: 6,
      margin: '0 10px 20px',
      backgroundColor: "DAC0A3",
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    }}>
      <CardContent>
        <CardMedia
          component="img"
          alt={alt}
          width="192"
          image={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardContent>
      {action && (
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button 
            size="large" 
            variant="contained" 
            color='primary' 
            sx={{ 
              borderRadius: 6, 
              padding: '10px 24px', 
              backgroundColor: '#102C57', 
              color: 'white', 
              '&:hover': {
                backgroundColor: '#448ACC',
              },
            }} 
            fullWidth
          >
            {action}
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
