export interface Project {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    app?: string;
    repo?: string;
    info?: string;
    technologies?: technologies[]
}

interface technologies{
    name: string;
    color: string;
}