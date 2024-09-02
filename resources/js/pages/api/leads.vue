<template>
  <div class="leads-container">
  <!-- Loading State -->
  <div v-if="loading" class="loading">Loading leads...</div>
  <!-- Error State -->
  <div v-if="error" class="error">{{ error }}</div>
  <!-- Header with Search Bar, Selected Count, and Create New Button -->
  <div class="leads-header">
  <div class="leads-section">
  <ul>
  <li class="total-leads">All Leads</li>
  <li class="total-leads">My Leads</li>
  </ul>
  </div>
  <div class="icon-section">
  <!-- Selected Leads Count -->
  <ul>
  <li class="selected-count total-leads">
            Selected Leads: {{ selectedLeads.length }}
  </li>
  <li class="total-leads"><i class="fa-solid fa-plus"></i></li>
  <li class="total-leads"><i class="fa-solid fa-trash-can-arrow-up"></i></li>
  <li class="total-leads"><i class="fa-solid fa-envelope"></i></li>
  <li class="total-leads"><i class="fa-solid fa-comment-dots"></i></li>
  <li class="total-leads"><i class="fa-solid fa-tags"></i></li>
  <li class="total-leads"><i class="fa-solid fa-table-cells"></i></li>
  <li class="total-leads"><i class="fa-solid fa-bell"></i></li>
  <li class="total-leads"><i class="fa-solid fa-map-location-dot"></i></li>
  <li class="total-leads"><i class="fa-solid fa-circle-exclamation"></i></li>
  <li class="total-leads"><i class="fa-solid fa-plus"></i></li>
  <li class="total-leads"><i class="fa fa-bar-chart" aria-hidden="true"></i></li>
  <li class="total-leads"><i class="fa-solid fa-envelope-open-text"></i></li>
  <li class="total-leads"><i class="fa-solid fa-right-left"></i></li>
  <li class="total-leads"><i class="fa-solid fa-file-export"></i></li>
  <li class="total-leads"><i class="fa-solid fa-file-import"></i></li>
  </ul>
  </div>
  </div>
  
   
  
  <!-- Selected Leads Count -->
  <div class="selected-count">
        Selected Leads: {{ selectedLeads.length }}
  </div>
  <div v-if="!loading && !error">
  <div class="header">
  <input
            v-model="searchQuery"
            type="text"
            placeholder="Search leads by name..."
            class="search-bar"
          />
  <div class="total-leads">Total Leads: {{ filteredLeads.length }}</div>
  <div class="total-leads">Last 7 Days</div>
  <div class="total-leads">Hot</div>
  <div class="total-leads">Buyer</div>
  <div class="total-leads">Seller</div>
  <div class="total-leads">Closed</div>
  <button @click="showForm = true" class="create-new-button">+ Create New</button>
  </div>
  </div>
  <!-- Create New Lead Form -->
  <div v-if="showForm" class="form-overlay">
  <div class="form-container">
  <button type="button" @click="showForm = false" id="cancel_button">X</button>
  <h2>Create New Lead</h2>
  <form @submit.prevent="submitForm">
  <label>
              Name:
  <input v-model="newLead.full_name" type="text" required />
  <span v-if="errors.full_name">{{ errors.full_name }}</span>
  </label>
  <label>
              Email:
  <input v-model="newLead.email" type="email" required />
  <span v-if="errors.email">{{ errors.email }}</span>
  </label>
  <label>
              Phone:
  <input v-model="newLead.phone" type="tel" required />
  <span v-if="errors.phone">{{ errors.phone }}</span>
  </label>
  <button type="submit" id="submit_button">Submit</button>
  </form>
  </div>
  </div>
  <!-- Leads Table -->
  <div v-if="!loading && !error">
   
      
  <table id="leadsTable" class="table table-striped table-bordered leads-table" v-if="filteredLeads.length">
  <thead>
  <tr>
  <th><input type="checkbox" @change="toggleSelectAll" /></th>
  <th>Name</th>
  <th>Phone</th>
  <th>Email</th>
  <th>Activity</th>
  <th>Created</th>
  <th>Tags</th>
  <th>Stage</th>
  <th>Source</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="lead in filteredLeads" :key="lead.id">
  <td><input type="checkbox" :value="lead.id" v-model="selectedLeads" /></td>
  <td>{{ lead.full_name }}</td>
  <td>{{ lead.phone }}</td>
  <td>{{ lead.email }}</td>
  <td>{{ lead.activity || 'N/A' }}</td>
  <td>{{ new Date(lead.created_at).toLocaleDateString() }}</td>
  <td>{{ lead.tags ? lead.tags.join(', ') : 'N/A' }}</td>
  <td>{{ lead.stage || 'N/A' }}</td>
  <td>{{ lead.source }}</td>
  </tr>
  </tbody>
  </table>
  <!-- No leads available message -->
  <div v-if="filteredLeads.length === 0" class="no-leads">
          No leads available.
  </div>
  </div>
  </div>
  </template>
  
  <script lang="js">
  import '@/assets/leads.css';
import axios from 'axios';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import { computed, onMounted, ref } from 'vue';
  export default {
    name: 'LeadsPage',
    setup() {
      const leads = ref([]);
      const loading = ref(true);
      const error = ref('');
      const searchQuery = ref('');
      const showForm = ref(false);
      const selectedLeads = ref([]);
      const newLead = ref({
        id: 0,
        full_name: '',
        email: '',
        phone: '',
      });
      const errors = ref({
        full_name: '',
        email: '',
        phone: '',
      });
      const fetchLeads = async () => {
        try {
          const response = await axios.get('/leads');
          leads.value = Array.isArray(response.data) ? response.data : [];
        } catch (err) {
          error.value = 'Failed to fetch leads.';
        } finally {
          loading.value = false;
        }
      };
      const filteredLeads = computed(() => {
        return leads.value.filter((lead) =>
          lead.full_name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
      });
      const validateForm = () => {
        errors.value = {
          full_name: newLead.value.full_name ? '' : 'Name is required.',
          email: newLead.value.email && /^\S+@\S+\.\S+$/.test(newLead.value.email) ? '' : 'Valid email is required.',
          phone: newLead.value.phone && /^\d{10}$/.test(newLead.value.phone) ? '' : 'Valid phone number is required.',
        };
        return !Object.values(errors.value).some(errorMsg => errorMsg);
      };
      const submitForm = async () => {
        if (!validateForm()) {
          return;
        }
        try {
          const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
          const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
          await axios.post('/leads', {
            full_name: newLead.value.full_name,
            email: newLead.value.email,
            phone: newLead.value.phone,
          }, {
            headers: {
              'X-CSRF-TOKEN': csrfToken,
            },
          });
          newLead.value = { id: 0, full_name: '', email: '', phone: '' };
          showForm.value = false;
          fetchLeads(); // Refresh leads list
          // Show toast notification (or replace with your notification logic)
          alert('Lead created successfully!');
        } catch (err) {
          error.value = 'Failed to create lead.';
        }
      };
      const toggleSelectAll = (event) => {
        if (event.target.checked) {
          selectedLeads.value = filteredLeads.value.map((lead) => lead.id);
        } else {
          selectedLeads.value = [];
        }
      };
      onMounted(() => {
        fetchLeads();
        // Initialize DataTables after the data has been fetched
        const intervalId = setInterval(() => {
          if (leads.value.length > 0) {
            $('#leadsTable').DataTable({
              pagingType: "simple_numbers", // Simplified pagination style
              pageLength: 10, // Default entries per page
              lengthMenu: [5, 10, 25, 50], // Options for entries per page
              dom: '<"top"lf>rt<"bottom"ip><"clear">', // Positioning of elements
              language: {
                lengthMenu: "Show _MENU_ entries", // Custom text for entries per page
                paginate: {
                  previous: "«",
                  next: "»"
                }
              }
            });
            clearInterval(intervalId);
          }
        }, 500);
      });
      return {
        leads,
        loading,
        error,
        searchQuery,
        filteredLeads,
        showForm,
        newLead,
        errors,
        selectedLeads,
        submitForm,
        toggleSelectAll,
      };
    },
  };
  </script>

  <style scoped>
    .error {
      color: red;
    }
    .no-leads {
      text-align: center;
      color: gray;
    }
    .dataTables_wrapper .dataTables_length {
    float: left; /* Align the entries per page dropdown to the left */
  }
  .dataTables_wrapper .dataTables_filter {
    float: right; /* Align the search box to the right */
  }
  .dataTables_wrapper .dataTables_paginate {
    float: right; /* Align the pagination controls to the right */
  }
  .dataTables_wrapper .dataTables_info {
    float: left; /* Align the info text to the left */
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button {
    padding: 0.5em 1em;
    margin-left: 0.5em;
    background-color: #007bff; /* Button color */
    color: white;
    border-radius: 5px;
    border: none;
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button.current {
    background-color: #0056b3; /* Active page button color */
  }

  .dt-search {
    display: none !important;
}
  </style>
