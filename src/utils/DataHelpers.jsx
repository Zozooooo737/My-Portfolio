import projectsData from "@/data/projectsData";

export const getProjectById = (projectId) => {
  return projectsData.find((project) => project.id === projectId);
};

export const getProjectsByIds = (projectIds) => {
  return projectIds.map((id) => getProjectById(id)).filter(Boolean);
};
