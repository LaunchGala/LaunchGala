
<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Trash2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Draggable } from '@braks/revue-draggable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

const columns = ref([
  { title: 'Backlog', tasks: ['Create mockup', 'Review requirements'] },
  { title: 'In Progress', tasks: ['Implement feature'] },
  { title: 'Review', tasks: [] },
  { title: 'Done', tasks: ['Set up project'] },
])

function addTask(colIndex) {
  const taskTitle = window.prompt('Enter task title:')
  if (taskTitle) {
    columns.value[colIndex].tasks.push(taskTitle)
  }
}

function deleteTask(colIndex, taskIndex) {
  columns.value[colIndex].tasks.splice(taskIndex, 1)
}
</script>

<template>
  <div class="flex space-x-4 p-8">
    <Draggable tag="div" list="columns" class="flex space-x-4">
      <div
        v-for="(col, colIndex) in columns"
        :key="col.title"
        class="flex flex-col bg-gray-200 dark:bg-black p-6 rounded-lg w-80"
      >
        <Collapsible>
          <Card>
            <CardHeader class="flex justify-between items-center px-4 py-3">
              <CollapsibleTrigger as-child>
                <CardTitle class="cursor-pointer">
                  {{ col.title }}
                </CardTitle>
              </CollapsibleTrigger>
              <Button variant="ghost" @click="addTask(colIndex)">
                <Plus class="w-6 h-6" />
              </Button>
            </CardHeader>
            <CollapsibleContent as-child>
              <CardContent class="px-4 py-3">
                <Draggable tag="div" list="col.tasks" class="space-y-4">
                  <div
                    v-for="(task, taskIndex) in col.tasks"
                    :key="task"
                    class="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md"
                  >
                    <div class="flex justify-between items-center">
                      <span>{{ task }}</span>
                      <Button
                        variant="ghost"
                        class="text-gray-400 hover:text-red-500"
                        @click="deleteTask(colIndex, taskIndex)"
                      >
                        <Trash2 class="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                </Draggable>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>
      </div>
    </Draggable>
  </div>
</template>
