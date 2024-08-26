// import { Button, Container, Grid, Paper, Typography } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';
// import Navbar from '../../components/Navbar';
// import backgroundImage from '../admin/back2.jpg';

// function Dashboard() {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         minHeight: '100vh',
//         color: '#fff',
//       }}
//     >
//       <Navbar />
//       <Grid container justifyContent="center" alignItems="center" style={{ padding: '40px 0' }}>
//         <Grid item xs={11} sm={10} md={8}>
//           <Container>
//             <Typography variant="h3" gutterBottom align="center" style={{ fontWeight: 'bold' }}>
//               Admin Dashboard
//             </Typography>
//             <Grid container spacing={4} justifyContent="center">
//               <Grid item xs={12} sm={6} md={4}>
//                 <Paper
//                   elevation={6}
//                   style={{
//                     padding: 30,
//                     textAlign: 'center',
//                     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: 15,
//                     boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                   }}
//                 >
//                   <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
//                     Manage Doctors
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     component={Link}
//                     to="/doctors"
//                     style={{
//                       padding: '10px 20px',
//                       fontSize: '16px',
//                       backgroundColor: '#007BFF',
//                       color: '#fff',
//                       borderRadius: 25,
//                     }}
//                   >
//                     Go
//                   </Button>
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Paper
//                   elevation={6}
//                   style={{
//                     padding: 30,
//                     textAlign: 'center',
//                     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: 15,
//                     boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                   }}
//                 >
//                   <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
//                     Manage Appointments
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="secondary"
//                     component={Link}
//                     to="/appointments"
//                     style={{
//                       padding: '10px 20px',
//                       fontSize: '16px',
//                       backgroundColor: '#28a745',
//                       color: '#fff',
//                       borderRadius: 25,
//                     }}
//                   >
//                     Go
//                   </Button>
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Paper
//                   elevation={6}
//                   style={{
//                     padding: 30,
//                     textAlign: 'center',
//                     backgroundColor: 'rgba(255, 255, 255, 0.7)',
//                     borderRadius: 15,
//                     boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
//                   }}
//                 >
//                   <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
//                     Manage Services
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="success"
//                     component={Link}
//                     to="/reports"
//                     style={{
//                       padding: '10px 20px',
//                       fontSize: '16px',
//                       backgroundColor: '#17a2b8',
//                       color: '#fff',
//                       borderRadius: 25,
//                     }}
//                   >
//                     Go
//                   </Button>
//                 </Paper>
//               </Grid>
//             </Grid>
//           </Container>
//         </Grid>
//       </Grid>
//       <Footer />
//     </div>
//   );
// }

// export default Dashboard;




import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from '../../components/Navbar';
import backgroundImage from '../admin/back2.jpg';

function Dashboard() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* <Navbar /> */}
      <Grid container justifyContent="center" alignItems="center" style={{ flex: 1, padding: '40px 0' }}>
        <Grid item xs={11} sm={10} md={8}>
          <Container>
            <Typography
              variant="h3"
              gutterBottom
              align="center"
              style={{
                fontWeight: 'bold',
                color: '#f5f5f5',
                marginBottom: '40px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              Admin Dashboard
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    padding: 30,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
                    Manage Doctors
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/doctors"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    padding: 30,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
                    Manage Appointments
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/appointments"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  elevation={8}
                  style={{
                    padding: 30,
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    borderRadius: 15,
                    boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                    transition: 'transform 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <Typography variant="h5" style={{ marginBottom: 20, color: '#333' }}>
                    Manage Service
                  </Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/services"
                    style={{
                      padding: '12px 25px',
                      fontSize: '16px',
                      backgroundColor: '#007BFF',
                      color: '#fff',
                      borderRadius: 30,
                      boxShadow: '0px 4px 10px rgba(0, 123, 255, 0.4)',
                      textTransform: 'none',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#007BFF')}
                  >
                    View
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
