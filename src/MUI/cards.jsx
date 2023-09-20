import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ImgMediaCard() {
  const [apiData, setApiData] = useState([]);
 

  useEffect(() => {
    fakeData();
  }, [])

  const fakeData = async () => {
    await axios.get('https://fakestoreapi.com/products').then((resp) => setApiData(resp.data));

  }


  return (
    <div>

<h2 className='text-center '>Api Data Using MUI Card </h2>
<div  style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"2rem"}}>

      {apiData?.map((data, i) => (

        <>
        
          <Card sx={{ maxWidth: 345 }} style={{margin:"15px"}}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={data.image}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </>

      ))

      }
      </div>



    </div>


  )
}