
<template>
    <v-container>
      <v-form ref="form" v-model="valid">
        <v-card>
          <v-card-title>
            <span class="headline">Vendor Application Form</span>
          </v-card-title>
          
          <v-card-text>
            <v-text-field
              v-model="vendorForm.name"
              :rules="[v => !!v || 'Name is required']"
              label="Name"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="vendorForm.email"
              :rules="emailRules"
              label="Email"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="vendorForm.phone"
              :rules="[v => !!v || 'Phone number is required']"
              label="Phone Number"
              required
            ></v-text-field>
            
            <v-text-field
              v-model="vendorForm.businessName"
              :rules="[v => !!v || 'Business Name is required']"
              label="Business Name"
              required
            ></v-text-field>
            
            <v-textarea
              v-model="vendorForm.description"
              :rules="[v => !!v || 'Description is required']"
              label="Business Description"
              required
            ></v-textarea>
            
            <v-text-field
              v-model="vendorForm.website"
              label="Website"
              prepend-icon="mdi-web"
            ></v-text-field>
            
            <v-file-input
              v-model="vendorForm.logo"
              label="Upload Business Logo"
              prepend-icon="mdi-cloud-upload"
            ></v-file-input>
            
            <v-checkbox
              v-model="vendorForm.terms"
              :rules="[v => !!v || 'You must agree to continue!']"
              label="I agree to the terms and conditions"
              required
            ></v-checkbox>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              color="success"
              @click="submitForm"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        vendorForm: {
          name: '',
          email: '',
          phone: '',
          businessName: '',
          description: '',
          website: '',
          logo: null,
          terms: false
        }
      };
    },
    methods: {
      submitForm() {
        if (this.$refs.form.validate()) {
          // Call your API to submit form data here
          console.log('Form submitted', this.vendorForm);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .headline {
    font-size: 24px;
    font-weight: bold;
    color: #3f51b5;
  }
  </style>