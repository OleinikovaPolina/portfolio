<template>
  <div>
    <v-container>
      <info-header-component />
    </v-container>
    <info-skills-component />
    <v-container>
      <info-education-component />
    </v-container>
    <div class="section-background py-8 py-md-16">
      <v-container>
        <info-work-experience-component />
      </v-container>
    </div>
    <v-container>
      <info-achievements-component />
    </v-container>
    <v-container>
      <info-contributions-component />
    </v-container>
  </div>
</template>

<script setup lang="ts">
import InfoHeaderComponent from '@/components/info/InfoHeaderComponent.vue'
import InfoSkillsComponent from '@/components/info/InfoSkillsComponent.vue'
import InfoEducationComponent from '@/components/info/InfoEducationComponent.vue'
import InfoWorkExperienceComponent from '@/components/info/InfoWorkExperienceComponent.vue'
import InfoAchievementsComponent from '@/components/info/InfoAchievementsComponent.vue'
import InfoContributionsComponent from '@/components/info/InfoContributionsComponent.vue'
</script>

