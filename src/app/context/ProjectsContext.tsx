"use client";

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { Projekt } from "@/app/types";
import axios from "axios";

const ProjectsContext = createContext<Projekt[] | null>(null);

export const ProjectsProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [projects, setProjects] = useState<Projekt[]>([]);

    useEffect(() => {
        axios
            .get<{
                data: Projekt[];
            }>(
                "https://studio-blumenspiess-cms-production.up.railway.app/api/projects?populate=*"
            )
            .then((response) => setProjects(response.data.data));
    }, []);

    return (
        <ProjectsContext.Provider value={projects}>
            {children}
        </ProjectsContext.Provider>
    );
};

export const useProjects = () => useContext(ProjectsContext);
