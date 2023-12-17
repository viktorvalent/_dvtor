import projectData from "@/database/projects.json";

// function get all project data
const getAllProject = () => {
  return projectData.data;
};

// function get one item by slug
const getProjectBySlug = (slug: string | null) => {
  return projectData.data.find((element) => {
    return element.slug === slug;
  });
};

// function get all project data with paginate
const getAllProjectWithPaginate = (
  pageSize: number | 10,
  pageNumber: number | 1
) => {
  return projectData.data.slice(
    pageSize * pageNumber,
    pageSize * pageNumber + pageNumber
  );
};

export default { getAllProject, getProjectBySlug, getAllProjectWithPaginate };
