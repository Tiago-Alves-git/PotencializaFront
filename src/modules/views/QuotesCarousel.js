import React from 'react';
import fotoHelio from '../../static/themes/images/FotoHelio.jpeg';
import { Box, Typography } from '@mui/material';
import quotationMark from '../../static/themes/icons/quotation-mark.png'


const QuotesCarousel = () => {

  const quotes = { id: 1, text: 'Serviço fantastico, com apenas 3 horas de conversa já pude viajar o mundo com o lucro da minha empresa.', 
    author: 'Hélio', image: fotoHelio };


  return (
    <Box className="quotes-carousel" sx={{ backgroundColor: '#fff5f8' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', marginTop: '50px'}}>
          Avaliação dos Clientes
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", margin: '20px', padding: '20px' }}>
          <Box component="img"
          src={quotes.image}
          sx={{ width: "250px", height: "250px", borderRadius: 50, objectFit: "cover" }}
          >
          </Box>
          <Typography sx={{ maxWidth: '300px', marginLeft: '50px', position: 'relative' }} variant='h5'>
          <img src={quotationMark} alt='quotes' style={{ width: '50px', height: '50px', position: 'absolute', left: '-40px', top: '-30px' }} />
            <br></br>
            {quotes.text}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotesCarousel;
