<template>
  <v-container>
    <projects-header-component />
    <v-row justify="center">
      <v-col
        cols="10"
        md="5"
        class="pb-0 pb-md-12"
      >
        <v-text-field
          v-model="form.title"
          :label="t('search')"
          :density="$vuetify.display.smAndDown?'compact':'comfortable'"
          variant="outlined"
          color="info"
          single-line
          hide-details
        />
      </v-col>
      <v-col
        cols="10"
        md="3"
        class="pb-8 pb-md-12"
      >
        <v-autocomplete
          v-model="form.categories"
          :items="categories"
          :label="t('category')"
          :density="$vuetify.display.smAndDown?'compact':'comfortable'"
          variant="outlined"
          color="info"
          single-line
          multiple
          filled
          chips
          closable-chips
          :no-data-text="t('nodata')"
          hide-details
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
    <v-row style="min-height: 70vh;">
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
      <v-col
        v-if="!projects.length"
        cols="12"
        md="4"
        class="mx-auto"
      >
        <v-img
          src="@/assets/images/undraw_searching.svg"
          class="mx-auto"
        />
        <div class="text-center">
          {{ t('nodata') }}
        </div>
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
import { computed, ref } from 'vue'
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
const projects =computed(() => store.getters['projects/projects'](form.value.categories, form.value.title))
const activeProject = ref<ProjectType>()
const dialog = ref<boolean>(false)
const form = ref<FormType>({ categories: [], title: '' })

const changeDialog = (val: boolean) => dialog.value = val
const changeActiveProject = (val: ProjectType) => activeProject.value = val
</script>

<i18n>
{
  "en": {
    "category": "Select categories",
    "search": "Enter title",
    "others": "others",
    "nodata": "no data"
  },
  "ru": {
    "category": "???????????????? ??????????????????",
    "search": "?????????????? ??????????????????",
    "others": "????????????",
    "nodata": "???? ??????????????"
  }
}
</i18n>
