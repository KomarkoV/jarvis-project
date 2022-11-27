import { Project } from "./tech-stack.component"
export const Projects: Project[] =
[
    { 
        id: "hardware",
        displayName: "Hardware & Firmware",
        techStack: [
            { technologyName: "ESP32", iconPath: "" },
            { technologyName: "Arduino Nano", iconPath: "" },
            { technologyName: "CAN bus", iconPath: "" },
            { technologyName: "C/C++", iconPath: "" }
        ]
    },
    {
        id: "mobile",
        displayName: "Jarvis Mobile Dashboard",
        techStack: [
            { technologyName: ".NET Xamarin Forms", iconPath: "" }
        ]
    },
    {
        id: "cloud",
        displayName: "Jarvis Analytics",
        techStack: [
            { technologyName: "ASP.NET Core", iconPath: "" },
            { technologyName: "SignalR", iconPath: "" },
            { technologyName: "Microsoft Azure", iconPath: "" },
            { technologyName: "Angular", iconPath: "" }
        ]
    }
]