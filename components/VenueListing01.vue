<script setup lang="ts">
import { Plus, FilePlus, Copy, Trash } from 'lucide-vue-next'; // Import the Trash icon
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from 'vue-toastification'; // Import the useToast composable

const props = defineProps(['venueListing']);
const supabase = useSupabaseClient();
const user = useSupabaseUser();
const myVenues = ref([]);
const emit = defineEmits(['nextStep']);
const toast = useToast(); // Initialize the toast instance

async function fetchVenues() {
  const response = await supabase
    .from('AllVenues')
    .select()
    .eq('createdBy', user.value.id);
  if (response.error) {
    console.error(response.error);
    return;
  }
  myVenues.value = response.data;
}

function editVenue(item) {
  emit('nextStep', item);
}

async function deleteVenue(venue) {
  if (confirm(`Are you sure you want to delete "${venue.title}"?`)) {
    try {
      const { error } = await supabase
        .from('AllVenues')
        .delete()
        .eq('id', venue.id);

      if (error) {
        throw error;
      }

      // Remove the venue from the local array
      myVenues.value = myVenues.value.filter((v) => v.id !== venue.id);

      // Show a success toast message
      toast.success(`"${venue.title}" has been deleted.`, { timeout: 3000 });
    } catch (error) {
      console.error('Error deleting venue:', error);
      // Show an error toast message
      toast.error('Failed to delete venue.', { timeout: 3000 });
    }
  }
}

onMounted(() => {
  fetchVenues();
});
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Manage Venue Listings</CardTitle>
          <CardDescription>
            Create new listing or duplicate and edit an existing one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap items-center justify-start gap-4 mb-6">
            <Button @click="$emit('nextStep')" class="flex items-center gap-2 bg-orange-500 hover:bg-orange-300">
              <Plus class="w-5 h-5" />
              Create New Listing
            </Button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="text-left">Venue Name</TableHead>
                <TableHead class="text-left">Location</TableHead>
                <TableHead class="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              <!-- Loop through the 'venues' array to create table rows -->
              <TableRow v-for="(venue, index) in myVenues" :key="index">
                <TableCell>{{ venue.title }}</TableCell>
                <TableCell>{{ venue.address }}</TableCell>
                <TableCell class="text-right flex flex-wrap gap-2">
                  <Button class="flex items-center gap-2 mr-2" variant="ghost" @click="editVenue(venue)">
                    <Copy class="w-4 h-4" />
                    Edit
                  </Button>
                  <Button class="flex items-center gap-2" variant="ghost" @click="deleteVenue(venue)">
                    <Trash class="w-4 h-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div class="text-center">
            <Button variant="link">
              View All Listings
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
