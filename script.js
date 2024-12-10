/* Global styling for the entire website */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: url('hexapod.jpeg') no-repeat center center fixed;
    background-size: cover;
    color: #fff;
  }
  
  /* Header styling */
  header {
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    color: #fff;
    padding: 1rem;
  }
  
  header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
  }
  
  header nav ul li {
    margin: 0 1rem;
  }
  
  header nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  /* Content section styling */
  .content {
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent box for readability */
    border-radius: 8px;
    margin: 2rem auto;
    max-width: 800px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  /* Info card styling */
  .info-card {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;
    color: #000; /* Black text for better readability */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  /* Footer styling */
  footer {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
  }
  
  /* Links hover effect */
  header nav ul li a:hover {
    text-decoration: underline;
  }
  