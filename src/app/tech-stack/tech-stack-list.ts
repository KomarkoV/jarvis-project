import { Project } from "./tech-stack.component"
export const Projects: Project[] =
[
    { 
        id: "hardware",
        displayName: "Hardware",
        techStack: [
            { technologyName: "ESP32", iconPath: "assets/svg/esp32.svg" },
            { technologyName: "Arduino Nano", iconPath: "assets/svg/arduino.svg" },
            { technologyName: "CAN bus", iconPath: "assets/svg/canbus.svg" },
            { technologyName: "Bluetooth", iconPath: "assets/svg/bt.svg" },
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