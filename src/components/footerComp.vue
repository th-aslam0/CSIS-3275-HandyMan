<!-- Footer.vue -->

<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 Handyman. All rights reserved.</p>
        <p>Address: 700 Royal Ave, New Westminster, BC V3M 5Z5, Canada</p>
        <p>Phone: +1 123-456-7890</p>
        <nav>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComp'
  }
  </script>
  
  
  <style scoped>
  .footer {
    background-color: #f8f9fa;
    padding: 20px 0;
    text-align: center;
  }
  
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin-right: 10px;
  }
  
  a {
    color: #333;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  