import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/contacts",
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () =>
        import("@/features/contacts/pages/ContactsView.vue"),
    },
    {
      path: "/contacts/:id",
      name: "contact-detail",
      component: () =>
        import("@/features/contacts/pages/ContactDetailView.vue"),
      props: true,
    },
    {
      path: "/activities",
      name: "activities",
      component: () =>
        import("@/features/activities/pages/ActivitiesView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: "/contacts",
    },
  ],
})

export default router
