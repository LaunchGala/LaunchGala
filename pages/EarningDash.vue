
<script setup lang="ts">
import { Calendar as CalendarIcon, Home, User, Check, Search } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
</script>

<template>
  <div class="bg-white dark:bg-black p-8">
    <!-- Dashboard Header -->
    <div class="mb-5 flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Earnings Dashboard</h1>
      <Button variant="outline">
        <CalendarIcon class="w-4 h-4 mr-2" />This Month
      </Button>
    </div>

    <!-- Tabs -->
    <Tabs default-value="all" class="mb-8">
      <TabsList class="mb-4">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="venue">Venue Renting</TabsTrigger>
        <TabsTrigger value="expert">Expert Participation</TabsTrigger>
        <TabsTrigger value="services">Service Offering</TabsTrigger>
      </TabsList>
      <TabsContent value="all">Data Visualization for All Revenue Streams</TabsContent>
      <TabsContent value="venue">Venue Renting Stats</TabsContent>
      <TabsContent value="expert">Expert Participation Stats</TabsContent>
      <TabsContent value="services">Service Offering Stats</TabsContent>
    </Tabs>

    <!-- Earnings Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Total Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-xl font-medium">$15,234</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Average Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-xl font-medium">$782</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-xl font-medium">342</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-xl font-medium">218</p>
        </CardContent>
      </Card>
    </div>

    <!-- Main Chart -->
    <div class="mb-8">
      <ChartBar />
    </div>

    <!-- Recent Transactions Table -->
    <Card class="mb-8">
      <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table class="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
              <TableHead class="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mar 14, 2023</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Web Design Project</TableCell>
              <TableCell class="text-right">$1,200.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 11, 2023</TableCell>
              <TableCell>Venue</TableCell>
              <TableCell>Conference Room Booking</TableCell>
              <TableCell class="text-right">$350.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 9, 2023</TableCell>
              <TableCell>Expert</TableCell>
              <TableCell>Consultation Service</TableCell>
              <TableCell class="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <!-- Action Items -->
    <div class="flex justify-end space-x-2">
      <Button variant="outline">
        <Search class="w-4 h-4 mr-2" /> Search
      </Button>
      <Button variant="outline">
        <Check class="w-4 h-4 mr-2" /> View All
      </Button>
    </div>
  </div>
</template>
