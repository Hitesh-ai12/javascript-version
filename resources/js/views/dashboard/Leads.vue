<template>
  <div class="leads-container">
    <div v-if="loading" class="loading">Loading leads...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="!loading && !error && leads.length === 0" class="no-leads">
      No leads available.
    </div>
    <div v-else>
      <div class="lead" v-for="lead in leads" :key="lead.id">
        <h2>{{ lead.full_name }}</h2>
        <p>{{ lead.email }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  name: 'LeadsPage',
  setup() {
    const leads = ref([]);
    const loading = ref(true);
    const error = ref('');

    const fetchLeads = async () => {
      try {
        const response = await axios.get('/api/leads');
        leads.value = response.data;
      } catch (err) {
        error.value = 'Failed to fetch leads.';
        console.error('Error fetching leads:', err);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchLeads);

    return {
      leads,
      loading,
      error,
    };
  }
}
</script>



<style lang="scss">
.v-card .trophy {
  position: absolute;
  inline-size: 5.188rem;
  inset-block-end: 1.25rem;
  inset-inline-end: 1.25rem;
}
</style>
