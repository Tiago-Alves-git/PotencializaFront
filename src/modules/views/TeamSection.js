import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import fotoTiago from '../../static/themes/images/fotoTiago.jpeg';
import fotoGabriel from '../../static/themes/images/fotoGrabriel.jpeg';
import fotoMessi from '../../static/themes/images/LionelMessi.jpeg';

const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: 'Tiago Alves', position: 'Fundador', bio: 'Tenho 23 Anos e curto cozinhar', image: fotoTiago },
    { id: 2, name: 'Gabriel Braga', position: 'Fundador', bio: 'Tenho 23 Anos e curto ler', image: fotoGabriel },
    { id: 3, name: 'Renato Portilho', position: 'Diretor de Marketing', bio: '18 Anos e Jogo futebol', image: fotoMessi }
  ];

  return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "15px" }}>
      <Typography variant='h4' sx={{ textAlign: 'center' }} className='section-title'>
        Nosso time
      </Typography>
      <Box className="title-underline"></Box>
      <Container className="team-members" sx={{ display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
        {teamMembers.map(member => (
          <Box key={member.id} className="team-member" sx={{ display: 'flex', flexDirection: 'column'}}>
            <Box
            component='img'
            src={member.image}
            sx={{ width: '300px', height: '300px', borderRadius: 100, objectFit: 'contain' }}
            ></Box>
            <Typography variant=''>
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.bio}</p>
            </Typography>
          </Box>
        ))}
      </Container>
    </Box>

  );
}

export default TeamSection;
