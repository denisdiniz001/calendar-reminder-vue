import { createWebHistory, createRouter } from "vue-router";
import Calendar from "@/components/Calendar.vue";
import Day from "@/components/Day/Detail.vue";
import Reminder from "@/components/Reminder/Detail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Calendar,
  },
  {
    path: "/day/:id",
    name: "Day",
    component: Day,
    children: [
        {
            path: "reminder/:reminderPos",
            name: "Reminder",
            component: Reminder
        }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;