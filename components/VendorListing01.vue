
<script setup lang="ts">
import { Plus, FilePlus, Copy } from 'lucide-vue-next';
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

const props = defineProps(['venueListing']);
console.log(props.venueListing);
</script>

<template>
  <div class="bg-white dark:bg-black min-h-screen py-10">
    <div class="container mx-auto px-4 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle>Manage your listings</CardTitle>
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
                <TableHead class="text-left">
                  Business Name
                </TableHead>
                <TableHead class="text-left">
                  Location
                </TableHead>
                <TableHead class="text-left">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  Placeholder Biz 1
                </TableCell>
                <TableCell>
                  Some Address, City
                </TableCell>
                <TableCell class="text-right">
                  <Button class="flex items-center gap-2" variant="ghost">
                    <Copy class="w-4 h-4" />
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  Placeholder Biz 2
                </TableCell>
                <TableCell>
                  Another Address, Other City
                </TableCell>
                <TableCell class="text-right">
                  <Button class="flex items-center gap-2" variant="ghost">
                    <Copy class="w-4 h-4" />
                    Edit
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
