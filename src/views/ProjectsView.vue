<template>
  <v-container>
    <projects-header-component />
    <v-row justify="center">
      <v-col
        cols="12"
        lg="8"
      >
        <v-row>
          <v-col
            cols="7"
          >
            <v-text-field
              v-model="form.title"
              :label="t('search')"
              variant="outlined"
              density="comfortable"
              required
            />
          </v-col>
          <v-col
            cols="5"
          >
            <v-autocomplete
              v-model="form.categories"
              :items="categories"
              :label="t('category')"
              variant="outlined"
              density="comfortable"
              multiple
              filled
              chips
              closable-chips
              :no-data-text="t('notfound')"
            >
              <template #chip="{ props, selection }">
                <v-chip
                  v-if="selection.index ===0"
                  v-bind="props"
                  :closable="true"
                  size="small"
                >
                  {{ selection.title }}
                </v-chip>
                <span
                  v-if="selection.index === 1"
                  class="text-grey text-caption align-self-center"
                >
                  (+{{ form.categories.length - 1 }} {{ t('others') }})
                </span>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row align="stretch">
      <v-col
        v-for="(project ,i ) in projects"
        :key="i"
        cols="12"
        md="6"
        lg="4"
      >
        <projects-card-component
          class="fill-height"
          :project="project"
          @changeDialog="changeDialog"
          @changeActiveProject="changeActiveProject"
        />
      </v-col>
    </v-row>
    <projects-modal-component
      v-if="activeProject"
      :dialog.sync="dialog"
      :project="activeProject"
      @changeDialog="changeDialog"
    />
  </v-container>
</template>

<script setup lang="ts">
import ProjectsHeaderComponent from '@/components/projects/ProjectsHeaderComponent.vue'
import ProjectsCardComponent from '@/components/projects/ProjectsCardComponent.vue'
import ProjectsModalComponent from '@/components/projects/ProjectsModalComponent.vue'
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ProjectType } from '@/types'

type FormType = {
  categories: string[],
  title: string,
}

const store = useStore()
const categories = store.getters['projects/categories']
const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
const projects = ref<ProjectType[]>([])
const activeProject = ref<ProjectType>()
const dialog = ref<boolean>(false)
const form = ref<FormType>({ categories: [], title: '' })

const changeDialog = (val: boolean) => dialog.value = val
const changeActiveProject = (val: ProjectType) => activeProject.value = val

onMounted(() => {
  projects.value = store.getters['projects/projects']()
})

watch(form, (val) => {
    projects.value = store.getters['projects/projects'](val.categories, val.title)
  }, { deep: true }
)
</script>

<i18n>
{
  "en": {
    "category": "Select categories",
    "search": "Enter title",
    "others": "others",
    "notfound": "not found"
  },
  "ru": {
    "category": "Выберите категорию",
    "search": "Введите заголовок",
    "others": "других",
    "notfound": "не найдено"
  }
}
</i18n>