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
          <li class="total-leads"><span>Delete</span><i class="fa-solid fa-trash-can-arrow-up"></i></li>
          <li class="total-leads"><span>Email</span><i class="fa-solid fa-envelope"></i></li>
          <li class="total-leads"><span>Smart SMS</span><i class="fa-solid fa-comment-dots"></i></li>
          <li class="total-leads"><span>Tags</span><i class="fa-solid fa-tags"></i></li>
          <li class="total-leads"><span>Stage</span><i class="fa-solid fa-table-cells"></i></li>
          <li class="total-leads"><span>New Listing Alert</span><i class="fa-solid fa-bell"></i></li>
          <li class="total-leads"><span>Neighbourhood Alert</span><i class="fa-solid fa-map-location-dot"></i></li>
          <li class="total-leads"><span>Open House Alert</span><i class="fa-solid fa-circle-exclamation"></i></li>
          <li class="total-leads"><span>Action plan</span><i class="fa-solid fa-plus"></i></li>
          <li class="total-leads"><span>Market Updates</span><i class="fa fa-bar-chart" aria-hidden="true"></i></li>
          <li class="total-leads"><span>Real Estate Newsletter</span><i class="fa-solid fa-envelope-open-text"></i></li>
          <li class="total-leads"><span>Lead Transfer</span><i class="fa-solid fa-right-left"></i></li>
          <li class="total-leads"><span>Export Lead</span><i class="fa-solid fa-file-export"></i></li>
          <li class="total-leads"><span>Import</span><i class="fa-solid fa-file-import"></i></li>
        </ul>
      </div>
    </div>

    <div v-if="!loading && !error">
      <div class="header">
        <input v-model="searchQuery" type="text" placeholder="Search leads by name..." class="search-bar" />
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
    First Name:
    <input v-model="newLead.first_name" type="text" required />
    <span v-if="errors.first_name" class="error">{{ errors.first_name }}</span>
  </label>
  <label>
    Last Name:
    <input v-model="newLead.last_name" type="text" required />
    <span v-if="errors.last_name" class="error">{{ errors.last_name }}</span>
  </label>
  <label>
    Email:
    <input v-model="newLead.email" type="email" required />
    <span v-if="errors.email" class="error">{{ errors.email }}</span>
  </label>
  <label>
    Phone:
    <input v-model="newLead.phone" type="tel" required />
    <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
  </label>
  <label>
    Tag:
    <select v-model="newLead.tag" required>
      <option v-for="tag in tags" :key="tag.id" :value="tag.id">
        {{ tag.name }}
      </option>
    </select>
    <span v-if="errors.tag" class="error">{{ errors.tag }}</span>
  </label>
  <label>
    Stage:
    <select v-model="newLead.stage" required>
      <option v-for="stage in stages" :key="stage.id" :value="stage.id">
        {{ stage.name }}
      </option>
    </select>
    <span v-if="errors.stage" class="error">{{ errors.stage }}</span>
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
      <th>
        <label class="custom-checkbox-label">
          <input type="checkbox" @change="toggleSelectAll" class="custom-checkbox" />
          <span class="custom-checkbox-span"></span>
        </label>
      </th>
      <!-- Other headers -->
      <th>First Name</th>
      <th>Last Name</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Activity</th>
      <th>Created</th>
      <th>Tag</th>
      <th>Stage</th>
      <th>Source</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lead in filteredLeads" :key="lead.id">
      <td>
        <label class="custom-checkbox-label">
          <input type="checkbox" :value="lead.id" v-model="selectedLeads" class="custom-checkbox" />
          <span class="custom-checkbox-span"></span>
        </label>
      </td>
      <!-- Other columns -->
      <td>{{ lead.first_name }}</td>
      <td>{{ lead.last_name }}</td>
      <td>{{ lead.phone }}</td>
      <td>{{ lead.email }}</td>
      <td>{{ lead.activity || 'N/A' }}</td>
      <td>{{ new Date(lead.created_at).toLocaleDateString() }}</td>
      <td>{{ lead.tag || 'N/A' }}</td>
      <td>{{ lead.stage || 'N/A' }}</td>
      <td>{{ lead.source || 'N/A' }}</td>
    </tr>
  </tbody>
</table>


      <!-- No leads available message -->
      <div v-if="filteredLeads.length === 0" class="no-leads">No leads available.</div>
    </div>

    <!-- Toast Notification -->
    <div v-if="toast.message" :class="`toast ${toast.type}`">
      {{ toast.message }}
      <button @click="toast.message = ''" class="toast-close-button">X</button>
    </div>
  </div>
</template>


<script lang="js">
import '@/assets/leads.css';
import axios from 'axios';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';
import $ from 'jquery';
import { computed, nextTick, onMounted, ref } from 'vue';

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
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      tag: '',
      stage: '',
    });
    const errors = ref({});
    const toast = ref({ message: '', type: '' });
    const tags = ref([]);
    const stages = ref([]);
    const sources = ref([]);

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

    const fetchItems = async () => {
      try {
        const response = await axios.get('/items');
        tags.value = response.data.tags;
        stages.value = response.data.stages;
        sources.value = response.data.sources;
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    const filteredLeads = computed(() => {
      return leads.value.filter((lead) =>
        lead.first_name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const getTagValue = (id) => {
      const tag = tags.value.find(t => t.id === id);
      return tag ? tag.value : 'N/A';
    };

    const getStageValue = (id) => {
      const stage = stages.value.find(s => s.id === id);
      return stage ? stage.value : 'N/A';
    };

    const validateForm = () => {
      errors.value = {
        first_name: newLead.value.first_name ? '' : 'First name is required.',
        last_name: newLead.value.last_name ? '' : 'Last name is required.',
        email: newLead.value.email && /^\S+@\S+\.\S+$/.test(newLead.value.email) ? '' : 'Valid email is required.',
        phone: newLead.value.phone && /^\d{10}$/.test(newLead.value.phone) ? '' : 'Valid phone number is required.',
        tag: newLead.value.tag ? '' : 'Tag is required.',
        stage: newLead.value.stage ? '' : 'Stage is required.',
      };
      return !Object.values(errors.value).some((errorMsg) => errorMsg);
    };

    const showToast = (message, type) => {
      toast.value = { message, type };
      setTimeout(() => {
        toast.value = { message: '', type: '' };
      }, 5000); // Extended timeout to 5 seconds
    };

    const submitForm = async () => {
      if (!validateForm()) {
        return;
      }

      try {
        const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
        const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';

        await axios.post('/leads', {
          first_name: newLead.value.first_name,
          last_name: newLead.value.last_name,
          email: newLead.value.email,
          phone: newLead.value.phone,
          tag: String(newLead.value.tag),
          stage: String(newLead.value.stage),
        }, {
          headers: {
            'X-CSRF-TOKEN': csrfToken,
          },
        });

        newLead.value = { id: 0, first_name: '', last_name: '', email: '', phone: '', tag: '', stage: '' };
        showForm.value = false;

        // Fetch leads and update the DataTable
        await fetchLeads();
        updateDataTable();
        showToast('Lead created successfully!', 'success');
      } catch (err) {
        showToast('Failed to create lead.', 'error');
      }
    };

    const toggleSelectAll = (event) => {
      if (event.target.checked) {
        selectedLeads.value = filteredLeads.value.map((lead) => lead.id);
      } else {
        selectedLeads.value = [];
      }
    };

    const updateDataTable = () => {
      nextTick(() => {
        $('#leadsTable').DataTable().destroy();
        $('#leadsTable').DataTable({
          pagingType: 'simple_numbers',
          pageLength: 10,
          lengthMenu: [5, 10, 25, 50],
          dom: '<"top"lf>rt<"bottom"ip><"clear">',
          language: {
            lengthMenu: 'Show _MENU_ entries',
            paginate: {
              previous: '«',
              next: '»',
            },
          },
        });
      });
    };

    onMounted(async () => {
      await fetchLeads();
      await fetchItems();
      updateDataTable();
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
      toast,
      getTagValue,
      getStageValue,
    };
  },
};
</script>
   
