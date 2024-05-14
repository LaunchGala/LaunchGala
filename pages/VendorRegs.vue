<template>
    <div class="vendor-registration-container">
      <h1 class="header">Vendor Registration Form</h1>
      <form @submit.prevent="submitForm" class="form">
        <div class="form-group">
          <label for="vendorName">Vendor Name:</label>
          <input type="text" id="vendorName" v-model="form.vendorName" required />
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" v-model="form.contactNumber" required />
        </div>
        <div class="form-group">
          <label for="website">Business Website:</label>
          <input type="url" id="website" v-model="form.website" />
        </div>
        <div class="form-group">
          <label for="logo">Business Logo:</label>
          <input type="file" @change="handleFileUpload" />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="form.description" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" v-model="form.category" required>
            <option disabled value="">Select a category</option>
            <option>Food</option>
            <option>Beverage</option>
            <option>Entertainment</option>
            <option>Decoration</option>
            <option>Photography</option>
          </select>
        </div>
        <div class="form-group">
          <label for="location">Location:</label>
          <input type="text" id="location" v-model="form.location" required />
        </div>
        <div class="form-group">
          <label for="socialMedia">Social Media Handle:</label>
          <input type="text" id="socialMedia" v-model="form.socialMedia" />
        </div>
        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          vendorName: '',
          email: '',
          contactNumber: '',
          website: '',
          logo: null,
          description: '',
          category: '',
          location: '',
          socialMedia: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
  
        // Artificial delay to simulate async operation (e.g., API call)
        setTimeout(() => {
          alert('Thank you for registering. Your form has been submitted for approval!');
          this.resetForm();
        }, 500);
      },
      resetForm() {
        this.form = {
          vendorName: '',
          email: '',
          contactNumber: '',
          website: '',
          logo: null,
          description: '',
          category: '',
          location: '',
          socialMedia: ''
        };
      },
      handleFileUpload(event) {
        const file = event.target.files[0];
        this.form.logo = file;
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap');
  
  .vendor-registration-container {
    max-width: 700px;
    margin: 50px auto;
    padding: 20px;
    background: #fff9f3;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    font-family: 'Montserrat', sans-serif;
    color: #333;
  }
  .header {
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    color: #ff6b6b;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .form-group {
    margin-bottom: 15px;
  }
  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #ff6b6b;
    border-radius: 5px;
    background: #ffefed;
  }
  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    border-color: #ff9f9f;
    outline: none;
  }
  .form-group button {
    background-color: #ff6b6b;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
  }
  .form-group button:hover {
    background-color: #ff4e4e;
  }
  </style>