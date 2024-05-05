import React from 'react';
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

export default function ImgMediaCard(props) {
  const { alt, title, content, action, image } = props;

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
              backgroundColor: '#f5f5f5', 
              color: '#021024', // Cor do texto do botão
              '&:hover': {
                backgroundColor: '#448ACC', // Cor do botão ao passar o mouse
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
