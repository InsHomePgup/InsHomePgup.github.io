<script setup lang="ts">
const skills = [
  'TypeScript', 'JavaScript', 'Vue.js', 'React', 'Node.js', 'NestJS',
  'TypeORM', 'Midway.js', 'PostgreSQL', 'Redis', 'Docker', 'UnoCSS',
  'TailwindCSS', 'Hugo', 'Git',
]
</script>

<template>
  <div class="grid">
    <div class="card card-hero">
      <div class="hero-top">
        <img class="hero-avatar" src="/img/avatar.jpg" alt="Abra X" />
        <div>
          <div class="hero-eyebrow">Full-Stack Engineer</div>
          <div class="hero-name">Abra X</div>
          <div class="hero-birthday">1997.08</div>
        </div>
      </div>
      <div>
        <div class="hero-tagline">从前端到后端，从像素到数据库，独立打磨完整产品。</div>
      </div>
      <div class="hero-stack">Vue · React · NestJS · PostgreSQL · Redis · Docker</div>
    </div>

    <div class="card card-skills">
      <div class="label">Skills</div>
      <div class="pills">
        <SkillPill v-for="skill in skills" :key="skill">{{ skill }}</SkillPill>
      </div>
    </div>

    <div class="card card-contact">
      <div class="label">Contact</div>
      <div class="contact-list">
        <a class="contact-row" href="https://github.com/InsHomePgup" target="_blank" rel="noopener">
          <span class="contact-key">GitHub</span>
          <span class="contact-val">github.com/InsHomePgup</span>
        </a>
        <a class="contact-row" href="mailto:BlueWhaleDesigner@outlook.com">
          <span class="contact-key">Email</span>
          <span class="contact-val">BlueWhaleDesigner@outlook.com</span>
        </a>
        <a class="contact-row" href="https://blog.inshomepgup.com/" target="_blank" rel="noopener">
          <span class="contact-key">Blog</span>
          <span class="contact-val">blog.inshomepgup.com</span>
        </a>
      </div>
    </div>

    <ProjectCard
      area="proj1"
      accent="var(--blue)"
      title="NestJS Enterprise Starter"
      desc="NestJS 企业级项目模板：PostgreSQL(Prisma) + Redis 缓存 + JWT 鉴权骨架 + 健康检查 + 结构化日志，Docker Compose 一键启动。"
      :tags="['NestJS', 'Prisma', 'Redis', 'Docker']"
      href="https://github.com/InsHomePgup/nestjs-enterprise-starter"
    />

    <ProjectCard
      area="proj2"
      accent="var(--green)"
      title="Vue3 + TDesign Starter"
      desc="Vue 3 + TypeScript + TDesign 项目模板，集成文件路由、UnoCSS、Pinia、VueUse、Orval。"
      :tags="['Vue 3', 'TypeScript', 'TDesign', 'UnoCSS']"
      href="https://github.com/InsHomePgup/vue3-ts-tdesign"
    />
  </div>
</template>
