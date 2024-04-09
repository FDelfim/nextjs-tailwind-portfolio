export interface Project {
    title: string;
    subtitle: string;
    description: string;
    img: string;
    app?: string;
    repo?: string;
    info?: string;
    technologies?: technologies[]
    author: author[]
}

interface technologies{
    name: string;
    color: string;
}

export interface author{
    name: string;
    url: string;
}