import { BookOpen, ChartArea, GraduationCap, House, Settings, SquareTerminal } from "lucide-react";

export const routes = [
    {
        title: "Home",
        url: "/",
        icon: House
    },
    {
        title: "Courses",
        url: "/courses",
        icon: SquareTerminal
    },
    {
        title: "My courses",
        url: "/my-courses",
        icon: BookOpen
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings
    },

]

export const routesTeacher = [
    {
        title: "Courses",
        url: "/teacher",
        icon: GraduationCap
    },
    {
        title: "Analitycs",
        url: "/analitycs",
        icon: ChartArea
    },
]