import React from 'react';

function Homediv2() {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>About Us</h2>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h4>Our Vision</h4>
          <p>
            Our vision is to create a healthcare ecosystem where accessing quality medical care is as simple and convenient as booking any other service. By leveraging technology, we aim to eliminate the complexities often associated with scheduling appointments, allowing patients to focus on their health and well-being. We envision a future where patients have complete control over their healthcare journey, with our platform serving as their trusted companion.
          </p>
        </div>
        <div style={styles.card}>
          <h4>Our Mission</h4>
          <p>
            Our mission is to empower patients and healthcare providers through a robust, user-friendly online platform that streamlines the appointment booking process. We are dedicated to bridging the gap between patients and medical professionals by offering a centralized solution that enhances communication and coordination. Through our platform, we strive to optimize resource allocation, reduce wait times, and improve overall patient satisfaction while supporting healthcare providers in delivering efficient and effective care.
          </p>
        </div>
        <div style={styles.card}>
          <h4>Our Values</h4>
          <p>
            <strong>Patient Focus:</strong> We prioritize the patient experience above all else. Our platform is designed with the patient in mind, ensuring ease of use, accessibility, and personalized care.
            <br /><br/>
            <strong>Innovation:</strong> We are committed to staying at the forefront of healthcare technology. By embracing innovation, we continuously seek to improve our platform and deliver exceptional value to our users.
            <br /><br />
            <strong>Efficiency:</strong> We believe in optimizing processes to save time and effort for both patients and healthcare providers. Our platform is designed to streamline workflows and enhance productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#73C6B6', 
    padding: '5%', 
    textAlign: 'center',
    borderRadius: '10px',
    minHeight: '100vh', 
  },
  header: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '2%', 
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '2%', 
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    width: '30%', 
    margin: '1%', 
    textAlign: 'left',
    boxSizing: 'border-box', 
  },
  '@media (max-width: 768px)': { 
    card: {
      width: '45%', 
    },
  },
  '@media (max-width: 480px)': { 
    card: {
      width: '100%', 
    },
    header: {
      fontSize: '1.5rem', 
    },
  },
};

export default Homediv2;
